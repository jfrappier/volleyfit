// Session cookie name and duration — defined here for reference.
// The worker sets and manages the actual cookie; these are not used client-side.
const COOKIE       = 'sf_session';
const SESSION_DAYS = 30;

let emailValue  = '';  // email captured in step 1, used in step 2
let otpAttempts = 0;   // client-side attempt counter (worker enforces the real limit)

// ─── Event listeners ──────────────────────────────────────────────────────────

document.getElementById('email-btn').addEventListener('click', sendOtp);
document.getElementById('otp-btn').addEventListener('click', verifyOtp);
document.getElementById('otp-back-btn').addEventListener('click', goBack);

document.getElementById('email-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') sendOtp();
});

document.getElementById('otp-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') verifyOtp();
});

// Auto-submit when 6 digits entered; strip non-numeric characters on input
document.getElementById('otp-input').addEventListener('input', e => {
  e.target.value = e.target.value.replace(/\D/g, '');
  if (e.target.value.length === 6) verifyOtp();
});

// ─── Auth flow ────────────────────────────────────────────────────────────────

async function sendOtp() {
  const emailInput = document.getElementById('email-input');
  const email      = emailInput.value.trim();
  const errEl      = document.getElementById('email-error');
  const btn        = document.getElementById('email-btn');

  // Use the browser's built-in RFC 5322 validator via the email input's validity state
  if (!emailInput.validity.valid) {
    errEl.textContent = 'Please enter a valid email address.';
    return;
  }

  errEl.textContent = '';
  setLoading(btn, true);

  try {
    const res = await fetch('/auth/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });

    // Always advance to the OTP step regardless of 403 — prevents email enumeration.
    // Unauthorized users will see the OTP screen but never receive a code.
    if (res.status === 403 || res.ok) {
      emailValue  = email;
      otpAttempts = 0;
      document.getElementById('otp-subtitle').textContent =
        `We sent a 6-digit code to ${email}.`;
      showStep('step-otp');
      document.getElementById('otp-input').focus();
      return;
    }

    errEl.textContent = 'Something went wrong — please try again.';

  } catch {
    errEl.textContent = 'Network error. Check your connection.';
  } finally {
    setLoading(btn, false);
  }
}

async function verifyOtp() {
  const code  = document.getElementById('otp-input').value.trim();
  const errEl = document.getElementById('otp-error');
  const btn   = document.getElementById('otp-btn');

  // Guard: shouldn't be reachable without an email, but just in case
  if (!emailValue) {
    errEl.textContent = 'Something went wrong — please start over.';
    showStep('step-email');
    return;
  }

  if (code.length !== 6) {
    errEl.textContent = 'Enter the 6-digit code from your email.';
    return;
  }

  // Client-side attempt limit — real enforcement happens in the worker
  if (otpAttempts >= 5) {
    errEl.textContent = 'Too many attempts. Please request a new code.';
    return;
  }
  otpAttempts++;

  errEl.textContent = '';
  setLoading(btn, true);

  try {
    const res = await fetch('/auth/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: emailValue, code })
    });

    if (res.status === 429) {
      errEl.textContent = 'Too many attempts. Please request a new code.';
      document.getElementById('otp-input').value = '';
      return;
    }

    if (!res.ok) {
      errEl.textContent = 'Incorrect or expired code — try again.';
      document.getElementById('otp-input').value = '';
      return;
    }

    // Worker sets the HttpOnly cookie; we just redirect
    showStep('step-success');

    // Safe redirect: only allow relative paths on the same origin
    const params   = new URLSearchParams(window.location.search);
    const redirect = params.get('redirect');
    const safeDest = (redirect && /^\/[^/\\]/.test(redirect)) ? redirect : '/';
    setTimeout(() => { window.location.href = safeDest; }, 800);

  } catch {
    errEl.textContent = 'Network error. Check your connection.';
  } finally {
    setLoading(btn, false);
  }
}

function goBack() {
  document.getElementById('otp-input').value   = '';
  document.getElementById('otp-error').textContent = '';
  otpAttempts = 0;  // reset so a fresh code gets a fresh counter
  showStep('step-email');
  document.getElementById('email-input').focus();
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function showStep(id) {
  ['step-email', 'step-otp', 'step-success'].forEach(s => {
    const el = document.getElementById(s);
    el.style.display = s === id ? 'block' : 'none';
    if (s === id) el.classList.add('step');
  });
}

function setLoading(btn, on) {
  btn.disabled = on;
  btn.classList.toggle('loading', on);
}
