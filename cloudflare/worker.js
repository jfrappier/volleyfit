const COOKIE = 'sf_session';
const OTP_TTL = 600;                  // 10 min OTP expiry
const SESSION_TTL = 60 * 60 * 24 * 30; // 30-day sessions

export default {
  async fetch(req, env) {
    const url = new URL(req.url);

    // Auth endpoints — always pass through
    if (url.pathname === '/auth.html')     return fetch(req);
    if (url.pathname === '/auth/send')     return handleSend(req, env);
    if (url.pathname === '/auth/verify')   return handleVerify(req, env);
    if (url.pathname === '/auth/logout')   return handleLogout(req, env);

    // Static assets — always pass through (logo, favicon, etc.)
    if (/\.(png|ico|jpg|webp|svg|css|js|woff2?)$/.test(url.pathname)) return fetch(req);

    // Gate everything else on a valid session cookie
    const session = await getSession(req, env);
    if (!session) {
      return Response.redirect(`${url.origin}/auth.html?redirect=${encodeURIComponent(url.pathname)}`, 302);
    }

    return fetch(req);
  }
};

// ─── Session validation ───────────────────────────────────────────────────────

async function getSession(req, env) {
  const cookie = req.headers.get('Cookie') || '';
  const token = cookie.match(/sf_session=([^;]+)/)?.[1];
  if (!token) return null;
  return env.SESSIONS.get(token); // returns stored email, or null if expired/missing
}

// ─── Send OTP ─────────────────────────────────────────────────────────────────

async function handleSend(req, env) {
  if (req.method !== 'POST') return respond({ error: 'method_not_allowed' }, 405);

  let email;
  try { ({ email } = await req.json()); } catch { return respond({ error: 'bad_request' }, 400); }

  email = (email || '').trim().toLowerCase();
  if (!email) return respond({ error: 'bad_request' }, 400);

  // Check allowlist
  const isAllowed = await env.ALLOWLIST.get(email);
  if (!isAllowed) {
    return respond({ error: 'not_allowed' }, 403);
  }

  // Generate 6-digit code and store with TTL
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  const code = (100000 + (array[0] % 900000)).toString();
  await env.OTPS.put(email, code, { expirationTtl: OTP_TTL });

  // Send via Resend
  const sent = await sendEmail(env.RESEND_API_KEY, email, code);
  if (!sent) return respond({ error: 'email_failed' }, 500);

  return respond({ ok: true });
}

// ─── Verify OTP ───────────────────────────────────────────────────────────────

async function handleVerify(req, env) {
  if (req.method !== 'POST') return respond({ error: 'method_not_allowed' }, 405);

  let email, code;
  try { ({ email, code } = await req.json()); } catch { return respond({ error: 'bad_request' }, 400); }

  email = (email || '').trim().toLowerCase();
  code  = (code  || '').trim();

  const stored = await env.OTPS.get(email);

  // Constant-time comparison to prevent timing attacks
  const valid = stored && timingSafeEqual(stored, code);
  if (!valid) return respond({ error: 'invalid_code' }, 401);

  await env.OTPS.delete(email); // OTP is single-use

  // Create session
  const token = crypto.randomUUID();
  await env.SESSIONS.put(token, email, { expirationTtl: SESSION_TTL });

  return respond({ ok: true }, 200, {
    'Set-Cookie': `${COOKIE}=${token}; Max-Age=${SESSION_TTL}; Path=/; HttpOnly; Secure; SameSite=Strict`
  });
}

// ─── Logout ───────────────────────────────────────────────────────────────────

async function handleLogout(req, env) {
  const cookie = req.headers.get('Cookie') || '';
  const token = cookie.match(/sf_session=([^;]+)/)?.[1];
  if (token) await env.SESSIONS.delete(token);

  return new Response(null, {
    status: 302,
    headers: {
      Location: '/auth.html',
      'Set-Cookie': `${COOKIE}=; Max-Age=0; Path=/; HttpOnly; Secure; SameSite=Strict`
    }
  });
}

// ─── Resend email ─────────────────────────────────────────────────────────────

async function sendEmail(apiKey, to, code) {
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization:  `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from:    'SpikeFit <noreply@spikefit.app>',
        to,
        subject: `Your SpikeFit code: ${code}`,
        html:    `
          <div style="font-family:'Source Sans Pro',Helvetica,sans-serif;max-width:400px;margin:0 auto;padding:40px 24px;">
            <img src="https://spikefit.app/logo.png" alt="SpikeFit" style="width:160px;display:block;margin:0 auto 32px;">
            <h2 style="color:#2d3748;text-align:center;letter-spacing:0.05em;text-transform:uppercase;margin-bottom:8px;">Your sign-in code</h2>
            <p style="color:#718096;text-align:center;margin-bottom:32px;">Enter this code to access SpikeFit. It expires in 10 minutes.</p>
            <div style="background:#f4f6f8;border-radius:12px;padding:24px;text-align:center;margin-bottom:32px;">
              <span style="font-size:40px;font-weight:700;letter-spacing:0.3em;color:#e80a89;">${code}</span>
            </div>
            <p style="color:#718096;font-size:14px;text-align:center;">If you didn't request this, you can safely ignore it.</p>
          </div>
        `
      })
    });
    return res.ok;
  } catch {
    return false;
  }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function respond(body, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...extraHeaders }
  });
}

// Prevents timing attacks when comparing OTP codes
function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}
