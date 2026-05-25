// ─── Workout Database ─────────────────────────────────────────────────────────

const workouts = {
  'A': {
    name: 'Workout A: Vertical Power',
    blocks: [
      {
        title: 'Superset 1 (4 Rounds - Rest 60-90s)',
        exercises: [
          { id: 'a1', name: 'Seated Box Jumps', reps: '5 reps', notes: 'Explode up, jump down, land on two feet.', video: 'Seated Box Jumps' },
          { id: 'a2', name: 'Pogo Jumps', reps: '15 seconds', notes: 'Max ankle stiffness.', video: 'Pogo Jumps exercise' }
        ]
      },
      {
        title: 'Superset 2 (3 Rounds - Rest 60s)',
        exercises: [
          { id: 'a3', name: 'DB Reverse Lunges', reps: '8 reps / leg', notes: 'Drive through front heel.', video: 'Dumbbell Reverse Lunges' },
          { id: 'a4', name: 'Dead Bugs', reps: '10 reps / side', notes: 'Lower back glued to floor.', video: 'Dead Bug exercise' }
        ]
      }
    ]
  },
  'A2': {
    name: 'Workout A: Vertical Power (Intermediate)',
    blocks: [
      {
        title: 'Superset 1 (4 Rounds - Rest 60-90s)',
        exercises: [
          { id: 'a2-1', name: 'Seated Box Jumps', reps: '5 reps', notes: 'Explode up, jump down, land on two feet.', video: 'Seated Box Jumps' },
          { id: 'a2-2', name: 'Pogo Jumps', reps: '20 seconds', notes: 'Max ankle stiffness and height.', video: 'Pogo Jumps exercise' },
          { id: 'a2-3', name: 'Broad Jumps', reps: '5 reps', notes: 'Explode forward, stick the landing.', video: 'Broad Jumps' }
        ]
      },
      {
        title: 'Superset 2 (3 Rounds - Rest 60s)',
        exercises: [
          { id: 'a2-4', name: 'DB Reverse Lunges', reps: '10 reps / leg', notes: 'Drive through front heel.', video: 'Dumbbell Reverse Lunges' },
          { id: 'a2-5', name: 'Dead Bugs', reps: '12 reps / side', notes: 'Lower back glued to floor.', video: 'Dead Bug exercise' },
          { id: 'a2-6', name: 'DB Romanian Deadlifts', reps: '10 reps', notes: 'Hinge at the hips, slight knee bend.', video: 'Dumbbell RDL' }
        ]
      }
    ]
  },
  'B': {
    name: 'Workout B: Upper Body Armor',
    blocks: [
      {
        title: 'Superset 1 (4 Rounds - Rest 60-90s)',
        exercises: [
          { id: 'b1', name: 'DB Push Press', reps: '8 reps', notes: 'Slight knee dip to drive up.', video: 'Dumbbell Push Press' },
          { id: 'b2', name: 'Pull-Ups or DB Rows', reps: '8-10 reps', notes: 'Squeeze back at the top.', video: 'Dumbbell Rows' }
        ]
      },
      {
        title: 'Superset 2 (3 Rounds - Rest 60s)',
        exercises: [
          { id: 'b3', name: 'DB Scaption (Y-Raises)', reps: '10 reps', notes: '45-deg angle, thumbs up.', video: 'Dumbbell Scaption' },
          { id: 'b4', name: 'Weighted Russian Twists', reps: '15 reps / side', notes: 'Rotate torso, not just arms.', video: 'Weighted Russian Twists' }
        ]
      }
    ]
  },
  'B2': {
    name: 'Workout B: Upper Body Armor (Intermediate)',
    blocks: [
      {
        title: 'Superset 1 (4 Rounds - Rest 60-90s)',
        exercises: [
          { id: 'b2-1', name: 'DB Push Press', reps: '10 reps', notes: 'Slight knee dip to drive up.', video: 'Dumbbell Push Press' },
          { id: 'b2-2', name: 'Pull-Ups or DB Rows', reps: '10-12 reps', notes: 'Squeeze back at the top.', video: 'Dumbbell Rows' },
          { id: 'b2-3', name: 'Push-Ups', reps: 'Max Reps', notes: 'Strict form, stop 1 rep shy of failure.', video: 'Perfect Pushup' }
        ]
      },
      {
        title: 'Superset 2 (3 Rounds - Rest 60s)',
        exercises: [
          { id: 'b2-4', name: 'DB Scaption (Y-Raises)', reps: '12 reps', notes: '45-deg angle, thumbs up.', video: 'Dumbbell Scaption' },
          { id: 'b2-5', name: 'Weighted Russian Twists', reps: '20 reps / side', notes: 'Rotate torso, not just arms.', video: 'Weighted Russian Twists' },
          { id: 'b2-6', name: 'Superman Holds', reps: '15 reps', notes: 'Squeeze glutes and back, hold 1s at top.', video: 'Superman Exercise' }
        ]
      }
    ]
  },
  'C': {
    name: 'Workout C: Defense Agility',
    blocks: [
      {
        title: 'Superset 1 (4 Rounds - Rest 60-90s)',
        exercises: [
          { id: 'c1', name: 'Single-Arm DB Snatches', reps: '6 reps / arm', notes: 'Power from the hips.', video: 'Single-Arm Dumbbell Snatch' },
          { id: 'c2', name: 'Lateral Lunges', reps: '8 reps / leg', notes: 'Push hips back.', video: 'Lateral Lunges' }
        ]
      },
      {
        title: 'Superset 2 (3 Rounds - Rest 60s)',
        exercises: [
          { id: 'c3', name: 'Push-Up to Renegade Row', reps: '8 reps / arm', notes: 'Keep hips square to floor.', video: 'Push-Up to Renegade Row' },
          { id: 'c4', name: 'Plank w/ Shoulder Taps', reps: '40 seconds', notes: 'Anti-rotation core hold.', video: 'Plank with Shoulder Taps' }
        ]
      }
    ]
  },
  'C2': {
    name: 'Workout C: Defense Agility (Intermediate)',
    blocks: [
      {
        title: 'Superset 1 (4 Rounds - Rest 60-90s)',
        exercises: [
          { id: 'c2-1', name: 'Single-Arm DB Snatches', reps: '8 reps / arm', notes: 'Power from the hips.', video: 'Single-Arm Dumbbell Snatch' },
          { id: 'c2-2', name: 'Lateral Lunges', reps: '10 reps / leg', notes: 'Push hips back.', video: 'Lateral Lunges' },
          { id: 'c2-3', name: 'Skater Jumps', reps: '10 reps / side', notes: 'Explosive lateral push off outside leg.', video: 'Skater Jumps' }
        ]
      },
      {
        title: 'Superset 2 (3 Rounds - Rest 60s)',
        exercises: [
          { id: 'c2-4', name: 'Push-Up to Renegade Row', reps: '8 reps / arm', notes: 'Keep hips square to floor.', video: 'Push-Up to Renegade Row' },
          { id: 'c2-5', name: 'Plank w/ Shoulder Taps', reps: '45 seconds', notes: 'Anti-rotation core hold.', video: 'Plank with Shoulder Taps' },
          { id: 'c2-6', name: 'Mountain Climbers', reps: '30 seconds', notes: 'Fast pace, keep hips level.', video: 'Mountain Climbers' }
        ]
      }
    ]
  },
  'D': {
    name: 'Workout D: Core & Swing Mechanics',
    blocks: [
      {
        title: 'Volleyball Core (3 Rounds - Rest 45s)',
        exercises: [
          { id: 'd1', name: 'Hollow Body Hold', reps: '30 seconds', notes: 'Mimics pre-swing mid-air tension. Press lower back into floor.', video: 'Hollow Body Hold' },
          { id: 'd2', name: 'Seated Rotational Twists', reps: '15 reps / side', notes: 'Focus on torso rotation to simulate arm swing torque.', video: 'Russian Twists' },
          { id: 'd3', name: 'Bird-Dog', reps: '10 reps / side', notes: 'Slow and controlled. Builds back and core stability.', video: 'Bird Dog Exercise' }
        ]
      },
      {
        title: 'Swing Mechanics (Focus on Form - Rest as needed)',
        exercises: [
          { id: 'd4', name: 'Half-Kneeling Swings (Left Knee Up)', reps: '20 reps', notes: 'Left knee bent, right knee on floor. Focus on elbow draw and torque.', video: 'Swing Mechanics', url: 'https://www.youtube.com/watch?v=X2TLr7aLors' },
          { id: 'd5', name: 'Half-Kneeling Swings (Right Knee Up)', reps: '20 reps', notes: 'Right knee bent, left knee on floor. Maintain high elbow.', video: 'Swing Mechanics', url: 'https://www.youtube.com/watch?v=X2TLr7aLors' },
          { id: 'd6', name: 'Tall Kneeling Swings', reps: '20 reps', notes: 'Both knees on floor. Engage core to snap through the swing.', video: 'Swing Mechanics', url: 'https://www.youtube.com/watch?v=X2TLr7aLors' }
        ]
      }
    ]
  },
  'D2': {
    name: 'Workout D: Core & Swing Mechanics (Intermediate)',
    blocks: [
      {
        title: 'Volleyball Core (3 Rounds - Rest 45s)',
        exercises: [
          { id: 'd2-1', name: 'Hollow Body Hold', reps: '45 seconds', notes: 'Mimics pre-swing mid-air tension. Press lower back into floor.', video: 'Hollow Body Hold' },
          { id: 'd2-2', name: 'Seated Rotational Twists', reps: '20 reps / side', notes: 'Focus on torso rotation to simulate arm swing torque.', video: 'Russian Twists' },
          { id: 'd2-3', name: 'Bird-Dog', reps: '12 reps / side', notes: 'Slow and controlled. Builds back and core stability.', video: 'Bird Dog Exercise' },
          { id: 'd2-4', name: 'Side Plank', reps: '30 seconds / side', notes: 'Keep body in a straight line, push floor away.', video: 'Side Plank' }
        ]
      },
      {
        title: 'Swing Mechanics (Focus on Form - Rest as needed)',
        exercises: [
          { id: 'd2-5', name: 'Half-Kneeling Swings (Left Knee Up)', reps: '25 reps', notes: 'Left knee bent, right knee on floor. Focus on elbow draw and torque.', video: 'Swing Mechanics', url: 'https://www.youtube.com/watch?v=X2TLr7aLors' },
          { id: 'd2-6', name: 'Half-Kneeling Swings (Right Knee Up)', reps: '25 reps', notes: 'Right knee bent, left knee on floor. Maintain high elbow.', video: 'Swing Mechanics', url: 'https://www.youtube.com/watch?v=X2TLr7aLors' },
          { id: 'd2-7', name: 'Tall Kneeling Swings', reps: '25 reps', notes: 'Both knees on floor. Engage core to snap through the swing.', video: 'Swing Mechanics', url: 'https://www.youtube.com/watch?v=X2TLr7aLors' },
          { id: 'd2-8', name: 'Standing Arm Swings', reps: '20 reps', notes: 'Full standing swing mechanics, focus on quick torque.', video: 'Volleyball Arm Swing Mechanics' },
          { id: 'd2-9', name: 'Approach Jumps w/ 2-Foot Landing', reps: '10 reps', notes: 'Full approach jump. Prioritize landing softly on BOTH feet simultaneously to absorb impact.', video: 'Volleyball 2-Foot Landing', url: 'https://www.tiktok.com/@elevateyourselfofficial/video/7112060380637056299' }
        ]
      }
    ]
  },
  'A3': {
    name: 'Workout A: Vertical Power (Advanced)',
    blocks: [
      {
        title: 'Superset 1 (4 Rounds - Rest 60-90s)',
        exercises: [
          { id: 'a3-1', name: 'Seated Box Jumps', reps: '6 reps', notes: 'Explode up, jump down, land on two feet.', video: 'Seated Box Jumps' },
          { id: 'a3-2', name: 'Pogo Jumps', reps: '30 seconds', notes: 'Max ankle stiffness and height.', video: 'Pogo Jumps exercise' },
          { id: 'a3-3', name: 'Broad Jumps', reps: '6 reps', notes: 'Explode forward, stick the landing.', video: 'Broad Jumps' }
        ]
      },
      {
        title: 'Superset 2 (3 Rounds - Rest 60s)',
        exercises: [
          { id: 'a3-4', name: 'DB Reverse Lunges', reps: '12 reps / leg', notes: 'Drive through front heel.', video: 'Dumbbell Reverse Lunges' },
          { id: 'a3-5', name: 'Dead Bugs', reps: '15 reps / side', notes: 'Lower back glued to floor.', video: 'Dead Bug exercise' },
          { id: 'a3-6', name: 'DB Romanian Deadlifts', reps: '12 reps', notes: 'Hinge at the hips, slight knee bend.', video: 'Dumbbell RDL' }
        ]
      },
      {
        title: 'Superset 3 (3 Rounds - Rest 60s)',
        exercises: [
          { id: 'a3-7', name: 'Bulgarian Split Squats', reps: '8 reps / leg', notes: 'Keep chest up, drop back knee down.', video: 'Bulgarian Split Squat' },
          { id: 'a3-8', name: 'Depth Drops', reps: '5 reps', notes: 'Step off low box, stick landing instantly.', video: 'Depth Drop' },
          { id: 'a3-9', name: 'Calf Raises', reps: '20 reps', notes: 'Full extension, slow negative.', video: 'Standing Calf Raise' }
        ]
      }
    ]
  },
  'B3': {
    name: 'Workout B: Upper Body Armor (Advanced)',
    blocks: [
      {
        title: 'Superset 1 (4 Rounds - Rest 60-90s)',
        exercises: [
          { id: 'b3-1', name: 'DB Push Press', reps: '12 reps', notes: 'Slight knee dip to drive up.', video: 'Dumbbell Push Press' },
          { id: 'b3-2', name: 'Pull-Ups or DB Rows', reps: '12-15 reps', notes: 'Squeeze back at the top.', video: 'Dumbbell Rows' },
          { id: 'b3-3', name: 'Push-Ups', reps: 'Max Reps', notes: 'Strict form, stop 1 rep shy of failure.', video: 'Perfect Pushup' }
        ]
      },
      {
        title: 'Superset 2 (3 Rounds - Rest 60s)',
        exercises: [
          { id: 'b3-4', name: 'DB Scaption (Y-Raises)', reps: '15 reps', notes: '45-deg angle, thumbs up.', video: 'Dumbbell Scaption' },
          { id: 'b3-5', name: 'Weighted Russian Twists', reps: '25 reps / side', notes: 'Rotate torso, not just arms.', video: 'Weighted Russian Twists' },
          { id: 'b3-6', name: 'Superman Holds', reps: '20 reps', notes: 'Squeeze glutes and back, hold 1s at top.', video: 'Superman Exercise' }
        ]
      },
      {
        title: 'Superset 3 (3 Rounds - Rest 60s)',
        exercises: [
          { id: 'b3-7', name: 'Pike Push-Ups', reps: '10 reps', notes: 'Hips high, focus on shoulders.', video: 'Pike Pushup' },
          { id: 'b3-8', name: 'DB Lateral Raises', reps: '12 reps', notes: 'Slight bend in elbows, control down.', video: 'Dumbbell Lateral Raise' },
          { id: 'b3-9', name: 'Plank to Down-Dog', reps: '10 reps', notes: 'Flow smoothly, stretch shoulders.', video: 'Plank to Downward Dog' }
        ]
      }
    ]
  },
  'C3': {
    name: 'Workout C: Defense Agility (Advanced)',
    blocks: [
      {
        title: 'Superset 1 (4 Rounds - Rest 60-90s)',
        exercises: [
          { id: 'c3-1', name: 'Single-Arm DB Snatches', reps: '8 reps / arm', notes: 'Power from the hips.', video: 'Single-Arm Dumbbell Snatch' },
          { id: 'c3-2', name: 'Lateral Lunges', reps: '12 reps / leg', notes: 'Push hips back.', video: 'Lateral Lunges' },
          { id: 'c3-3', name: 'Skater Jumps', reps: '12 reps / side', notes: 'Explosive lateral push off outside leg.', video: 'Skater Jumps' }
        ]
      },
      {
        title: 'Superset 2 (3 Rounds - Rest 60s)',
        exercises: [
          { id: 'c3-4', name: 'Push-Up to Renegade Row', reps: '10 reps / arm', notes: 'Keep hips square to floor.', video: 'Push-Up to Renegade Row' },
          { id: 'c3-5', name: 'Plank w/ Shoulder Taps', reps: '60 seconds', notes: 'Anti-rotation core hold.', video: 'Plank with Shoulder Taps' },
          { id: 'c3-6', name: 'Mountain Climbers', reps: '40 seconds', notes: 'Fast pace, keep hips level.', video: 'Mountain Climbers' }
        ]
      },
      {
        title: 'Superset 3 (3 Rounds - Rest 60s)',
        exercises: [
          { id: 'c3-7', name: 'Lateral Bounds', reps: '8 reps / side', notes: 'Jump sideways off one leg, stick landing.', video: 'Lateral Bounds' },
          { id: 'c3-8', name: 'Bear Crawls', reps: '30 seconds', notes: 'Keep knees hovering just off floor.', video: 'Bear Crawl' },
          { id: 'c3-9', name: 'High Knees', reps: '30 seconds', notes: 'Pump arms, drive knees up fast.', video: 'High Knees' }
        ]
      }
    ]
  },
  'D3': {
    name: 'Workout D: Core & Swing Mechanics (Advanced)',
    blocks: [
      {
        title: 'Superset 1: Volleyball Core (3 Rounds - Rest 45s)',
        exercises: [
          { id: 'd3-1', name: 'Hollow Body Hold', reps: '60 seconds', notes: 'Mimics pre-swing mid-air tension. Press lower back into floor.', video: 'Hollow Body Hold' },
          { id: 'd3-2', name: 'Seated Rotational Twists', reps: '25 reps / side', notes: 'Focus on torso rotation to simulate arm swing torque.', video: 'Russian Twists' },
          { id: 'd3-3', name: 'Bird-Dog', reps: '15 reps / side', notes: 'Slow and controlled. Builds back and core stability.', video: 'Bird Dog Exercise' }
        ]
      },
      {
        title: 'Superset 2: Swing Mechanics (3 Rounds - Rest as needed)',
        exercises: [
          { id: 'd3-4', name: 'Half-Kneeling Swings (Left Knee Up)', reps: '30 reps', notes: 'Left knee bent, right knee on floor. Focus on elbow draw and torque.', video: 'Swing Mechanics', url: 'https://www.youtube.com/watch?v=X2TLr7aLors' },
          { id: 'd3-5', name: 'Half-Kneeling Swings (Right Knee Up)', reps: '30 reps', notes: 'Right knee bent, left knee on floor. Maintain high elbow.', video: 'Swing Mechanics', url: 'https://www.youtube.com/watch?v=X2TLr7aLors' },
          { id: 'd3-6', name: 'Tall Kneeling Swings', reps: '30 reps', notes: 'Both knees on floor. Engage core to snap through the swing.', video: 'Swing Mechanics', url: 'https://www.youtube.com/watch?v=X2TLr7aLors' }
        ]
      },
      {
        title: 'Superset 3: Dynamic Approach (3 Rounds - Rest 60s)',
        exercises: [
          { id: 'd3-7', name: 'Standing Arm Swings', reps: '25 reps', notes: 'Full standing swing mechanics, focus on quick torque.', video: 'Volleyball Arm Swing Mechanics' },
          { id: 'd3-8', name: 'Approach Jump Footwork', reps: '10 reps', notes: 'Focus on explosive last two steps (penultimate step).', video: 'Volleyball Approach Footwork' },
          { id: 'd3-9', name: 'V-Ups or Med Ball Slams', reps: '15 reps', notes: 'Explosive core flexion.', video: 'V-Ups Exercise' },
          { id: 'd3-10', name: 'Max Approach Jumps w/ 2-Foot Landing', reps: '10 reps', notes: 'Full max approach. Prioritize landing softly on BOTH feet simultaneously to absorb impact.', video: 'Volleyball 2-Foot Landing', url: 'https://www.tiktok.com/@elevateyourselfofficial/video/7112060380637056299' }
        ]
      }
    ]
  }
};

const schedule = [
  { day: 'Monday',    workout: 'A' },
  { day: 'Tuesday',   workout: 'D' },
  { day: 'Wednesday', workout: 'B' },
  { day: 'Thursday',  workout: 'D' },
  { day: 'Friday',    workout: 'C' },
  { day: 'Saturday',  workout: 'A' },
  { day: 'Sunday',    workout: 'Rest/Run' }
];

// ─── localStorage helpers ─────────────────────────────────────────────────────

// Safely parse a JSON object from localStorage; returns {} on any failure
function safeParseObject(key) {
  try {
    const val = JSON.parse(localStorage.getItem(key));
    return (val && typeof val === 'object' && !Array.isArray(val)) ? val : {};
  } catch { return {}; }
}

// Validate a stored ISO date string; returns null if missing or unparseable
function safeISODate(val) {
  if (!val) return null;
  const d = new Date(val);
  return isNaN(d.getTime()) ? null : val;
}

const VALID_LEVELS = new Set(['beginner', 'intermediate', 'advanced']);

// ─── State ────────────────────────────────────────────────────────────────────

let currentDayIndex     = (new Date().getDay() + 6) % 7;
let completedExercises  = safeParseObject('completedExercises');
let completedDates      = safeParseObject('completedDates');
let historyCalDate      = new Date();
let activeWorkoutStart  = safeISODate(localStorage.getItem('activeWorkoutStart'));
let workoutLevel        = VALID_LEVELS.has(localStorage.getItem('workoutLevel'))
                            ? localStorage.getItem('workoutLevel') : 'beginner';
let manualLevelOverride = localStorage.getItem('manualLevelOverride') === 'true';

// ─── Workout key resolution ───────────────────────────────────────────────────

function getWorkoutKey(baseKey) {
  if (baseKey === 'Rest/Run') return baseKey;
  if (workoutLevel === 'advanced')     return baseKey + '3';
  if (workoutLevel === 'intermediate') return baseKey + '2';
  return baseKey;
}

// ─── Persistence ──────────────────────────────────────────────────────────────

function saveState() {
  localStorage.setItem('completedExercises', JSON.stringify(completedExercises));
  localStorage.setItem('completedDates',     JSON.stringify(completedDates));
}

// ─── Tab navigation ───────────────────────────────────────────────────────────

function switchTab(tabId, btnEl) {
  document.querySelectorAll('.container').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.nav button').forEach(b => b.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  btnEl.classList.add('active');

  if (window.innerWidth <= 980) {
    window.scrollTo({ top: document.getElementById('main').offsetTop - 20, behavior: 'smooth' });
  }
}

// ─── Exercise interaction ─────────────────────────────────────────────────────

function toggleExercise(id, cardEl) {
  if (!activeWorkoutStart) return;

  completedExercises[id] = !completedExercises[id];
  saveState();

  if (completedExercises[id]) {
    cardEl.classList.add('completed');
    cardEl.querySelector('input[type="checkbox"]').checked = true;
    checkAndMarkComplete();
  } else {
    cardEl.classList.remove('completed');
    cardEl.querySelector('input[type="checkbox"]').checked = false;
  }
  updateProgressBar();
}

function updateProgressBar() {
  const workoutKey = getWorkoutKey(schedule[currentDayIndex].workout);
  const workout    = workouts[workoutKey];

  if (!workout || !activeWorkoutStart) {
    document.getElementById('progress-container').style.display = 'none';
    return;
  }

  document.getElementById('progress-container').style.display = 'block';

  let total = 0, checked = 0;
  workout.blocks.forEach(block => {
    block.exercises.forEach(ex => {
      total++;
      if (completedExercises[ex.id]) checked++;
    });
  });

  const pct = total === 0 ? 0 : Math.round((checked / total) * 100);
  document.getElementById('progress-bar').style.width = pct + '%';
}

function checkAndMarkComplete() {
  const workout = workouts[getWorkoutKey(schedule[currentDayIndex].workout)];
  if (!workout) return;

  const allDone = workout.blocks.every(block =>
    block.exercises.every(ex => completedExercises[ex.id])
  );
  if (allDone) markWorkoutComplete();
}

// ─── Workout lifecycle ────────────────────────────────────────────────────────

function startWorkout() {
  if (!activeWorkoutStart) {
    activeWorkoutStart = new Date().toISOString();
    localStorage.setItem('activeWorkoutStart', activeWorkoutStart);
    renderDaily();
  }
}

function resetDay() {
  if (!confirm('Clear all checks for today?')) return;

  const workout = workouts[getWorkoutKey(schedule[currentDayIndex].workout)];
  if (workout) {
    workout.blocks.forEach(block => {
      block.exercises.forEach(ex => { completedExercises[ex.id] = false; });
    });
  }
  activeWorkoutStart = null;
  localStorage.removeItem('activeWorkoutStart');
  saveState();
  renderDaily();
}

function markWorkoutComplete() {
  const today    = new Date();
  const dateStr  = today.getFullYear() + '-' +
                   String(today.getMonth() + 1).padStart(2, '0') + '-' +
                   String(today.getDate()).padStart(2, '0');

  const displayDate = today.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
  const endTimeStr  = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  let startTimeStr  = 'N/A';
  let mins          = 0;

  if (activeWorkoutStart) {
    const start  = new Date(activeWorkoutStart);
    startTimeStr = start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    mins         = Math.max(1, Math.floor((today - start) / 60000));
  }

  completedDates[dateStr] = { completed: true, startTime: activeWorkoutStart, endTime: today.toISOString() };
  activeWorkoutStart      = null;
  localStorage.removeItem('activeWorkoutStart');

  saveState();
  renderHistoryCalendar();
  renderDaily();

  // Auto-upgrade logic
  const count = Object.keys(completedDates).length;
  if (count >= 16 && workoutLevel === 'intermediate' && !manualLevelOverride) {
    setLevel('advanced', true);
    alert("🔥 MAXIMUM OVERDRIVE! You've successfully logged four weeks of workouts. We've automatically upgraded your schedule to the Advanced plan!");
  } else if (count >= 8 && workoutLevel === 'beginner' && !manualLevelOverride) {
    setLevel('intermediate', true);
    alert("🎉 LEVEL UP! You've successfully logged two weeks of workouts. We've automatically upgraded your schedule to the Intermediate plan! Keep crushing it!");
  }

  // Populate badge modal
  // Values are from Date API calls, not raw user/localStorage input
  const badgeDateEl = document.getElementById('badge-date-text');
  const badgeTimeEl = document.getElementById('badge-time-text');
  badgeDateEl.textContent = '';
  badgeTimeEl.textContent = '';

  const dateSpan = document.createElement('span');
  dateSpan.textContent = displayDate;
  badgeDateEl.appendChild(document.createTextNode('Date: '));
  badgeDateEl.appendChild(dateSpan);

  if (startTimeStr !== 'N/A') {
    const timeSpan = document.createElement('span');
    timeSpan.textContent = `${startTimeStr} - ${endTimeStr}`;
    const minSpan = document.createElement('span');
    minSpan.style.cssText = 'color:var(--accent); font-size:0.85em; display:block; margin-top:0.5em;';
    minSpan.textContent = `${mins} Minutes`;
    badgeTimeEl.appendChild(document.createTextNode('Time: '));
    badgeTimeEl.appendChild(timeSpan);
    badgeTimeEl.appendChild(minSpan);
  } else {
    const timeSpan = document.createElement('span');
    timeSpan.textContent = endTimeStr;
    badgeTimeEl.appendChild(document.createTextNode('Completed at: '));
    badgeTimeEl.appendChild(timeSpan);
  }

  document.getElementById('badge-modal').style.display = 'flex';

  // Brief visual confirmation on the complete button
  const btn = document.querySelector('.btn-complete');
  if (btn) {
    const durationText = mins > 0 ? ` (${mins} min)` : '';
    btn.textContent        = `✔ Workout Logged!${durationText}`;
    btn.style.background   = '#4CAF50';
    btn.style.borderColor  = '#4CAF50';
    btn.style.color        = '#ffffff';
    setTimeout(() => {
      btn.textContent       = 'Mark Workout Complete';
      btn.style.background  = '';
      btn.style.borderColor = '';
      btn.style.color       = '';
    }, 4000);
  }
}

function updateWorkoutStatus() {
  const controlsDiv  = document.getElementById('workout-controls');
  const startBtn     = document.getElementById('btn-start-workout');
  const completeBtn  = document.querySelector('.btn-complete');
  const workout      = workouts[getWorkoutKey(schedule[currentDayIndex].workout)];

  if (!workout) {
    if (controlsDiv)  controlsDiv.style.display  = 'none';
    if (completeBtn)  completeBtn.style.display   = 'none';
    return;
  }

  if (controlsDiv) controlsDiv.style.display = 'block';
  if (completeBtn) completeBtn.style.display  = 'block';

  if (activeWorkoutStart) {
    const startTime      = new Date(activeWorkoutStart).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    startBtn.textContent = `Workout started at ${startTime}`;
    startBtn.classList.add('started');
    startBtn.disabled    = true;
    if (completeBtn) completeBtn.disabled = false;
  } else {
    startBtn.textContent = 'Start Workout';
    startBtn.classList.remove('started');
    startBtn.disabled    = false;
    if (completeBtn) completeBtn.disabled = true;
  }
}

// ─── Level ────────────────────────────────────────────────────────────────────

function setLevel(level, auto = false) {
  workoutLevel = level;
  localStorage.setItem('workoutLevel', level);
  if (!auto) {
    manualLevelOverride = true;
    localStorage.setItem('manualLevelOverride', 'true');
  }

  document.getElementById('btn-level-beginner').classList.toggle('active',     level === 'beginner');
  document.getElementById('btn-level-intermediate').classList.toggle('active', level === 'intermediate');
  document.getElementById('btn-level-advanced').classList.toggle('active',     level === 'advanced');

  renderDaily();
  renderSchedule();
}

// ─── Schedule navigation ──────────────────────────────────────────────────────

function setWorkoutDay(index) {
  currentDayIndex = index;
  saveState();
  renderDaily();
  renderSchedule();

  document.querySelectorAll('.container').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.nav button').forEach(b => b.classList.remove('active'));
  document.getElementById('daily').classList.add('active');
  document.querySelector('[data-tab="daily"]').classList.add('active');

  if (window.innerWidth <= 980) {
    window.scrollTo({ top: document.getElementById('main').offsetTop - 20, behavior: 'smooth' });
  }
}

// ─── History calendar ─────────────────────────────────────────────────────────

function changeMonth(delta) {
  const next = new Date(historyCalDate.getFullYear(), historyCalDate.getMonth() + delta, 1);
  if (next.getFullYear() > 2026) return;
  historyCalDate = next;
  renderHistoryCalendar();
}

// ─── Modals ───────────────────────────────────────────────────────────────────

function closeBadgeModal() {
  document.getElementById('badge-modal').style.display = 'none';
  setTimeout(() => showToast('Time to Refuel!', "Don't forget to grab a protein shake or a healthy snack for recovery.", '🥤'), 400);
}

function openDisclaimerModal() { document.getElementById('disclaimer-modal').style.display = 'flex'; }
function acceptDisclaimer() {
  localStorage.setItem('disclaimerAgreed', 'true');
  document.getElementById('disclaimer-modal').style.display = 'none';
  setTimeout(checkStreak, 500);
}

function openPrivacyModal()  { document.getElementById('privacy-modal').style.display = 'flex'; }
function closePrivacyModal() { document.getElementById('privacy-modal').style.display = 'none'; }

// ─── Toast ────────────────────────────────────────────────────────────────────

function showToast(title, text, icon = '🥤', duration = 8000) {
  document.getElementById('toast-icon').textContent  = icon;
  document.getElementById('toast-title').textContent = title;
  document.getElementById('toast-text').textContent  = text;

  const toast = document.getElementById('app-toast');
  toast.classList.add('show');

  if (window._toastTimeout) clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(closeToast, duration);
}

function closeToast() {
  document.getElementById('app-toast').classList.remove('show');
}

// ─── Share ────────────────────────────────────────────────────────────────────

function shareBadge() {
  const dateText    = document.getElementById('badge-date-text').textContent;
  const timeText    = document.getElementById('badge-time-text').textContent.replace(/\n/g, ' ');
  const workoutName = document.getElementById('current-workout-title').textContent;
  const text        = `I just crushed "${workoutName}" on SpikeFit! 🏐💪\n${dateText}\n${timeText}`;

  if (navigator.share) {
    navigator.share({ title: 'SpikeFit Workout Complete', text }).catch(console.error);
  } else {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      const btn     = document.getElementById('btn-share-badge');
      const origTxt = btn.textContent;
      btn.textContent = 'Copied to Clipboard!';
      setTimeout(() => { btn.textContent = origTxt; }, 3000);
    } catch (err) { console.error('Failed to copy', err); }
    document.body.removeChild(ta);
  }
}

// ─── Streak check ─────────────────────────────────────────────────────────────

function checkStreak() {
  if (sessionStorage.getItem('welcomeToastShown')) return;
  sessionStorage.setItem('welcomeToastShown', 'true');

  const today    = new Date();
  today.setHours(0, 0, 0, 0);
  const todayStr = today.getFullYear() + '-' +
                   String(today.getMonth() + 1).padStart(2, '0') + '-' +
                   String(today.getDate()).padStart(2, '0');

  const dates = Object.keys(completedDates).sort((a, b) => new Date(b) - new Date(a));
  if (dates.length === 0) return;

  const latestWorkout  = new Date(dates[0] + 'T00:00:00');
  const daysSinceLast  = Math.floor((today - latestWorkout) / (1000 * 60 * 60 * 24));

  if (daysSinceLast >= 2) {
    showToast('👋 Welcome Back!', "Missed you the last few days, let's get a streak going!", '🔥', 10000);
    return;
  }

  let streak = 0;
  const cursor = new Date(today);
  for (let i = 0; i < 365; i++) {
    const key = cursor.getFullYear() + '-' +
                String(cursor.getMonth() + 1).padStart(2, '0') + '-' +
                String(cursor.getDate()).padStart(2, '0');
    if (completedDates[key]) {
      streak++;
      cursor.setDate(cursor.getDate() - 1);
    } else if (i === 0 && !completedDates[todayStr]) {
      cursor.setDate(cursor.getDate() - 1);
    } else {
      break;
    }
  }

  if (streak >= 2) {
    showToast('🔥 Hot Streak!', `Daaamn, ${streak} days in a row, keep it up!`, '💪', 10000);
  } else if (streak === 1 && daysSinceLast === 1) {
    showToast('💪 Keep the Momentum!', 'You logged a workout yesterday. Keep it going today!', '✨', 10000);
  }
}

function checkDisclaimer() {
  if (!localStorage.getItem('disclaimerAgreed')) {
    openDisclaimerModal();
  } else {
    setTimeout(checkStreak, 500);
  }
}

// ─── Render: Daily ────────────────────────────────────────────────────────────

function renderDaily() {
  const content    = document.getElementById('workout-content');
  const workoutKey = getWorkoutKey(schedule[currentDayIndex].workout);
  const workout    = workouts[workoutKey];

  if (!workout) {
    document.getElementById('current-workout-title').textContent = 'Active Recovery / Cardio';
    content.innerHTML = `
      <div style="text-align:center; padding: 4em 0; background: var(--bg-panel); border: 1px solid var(--border); border-radius: var(--radius-md); box-shadow: var(--shadow-sm);">
        <h2 style="color:var(--text-main); border:none; margin-bottom: 0.5em; justify-content:center;">Rest or Run Day</h2>
        <p style="color:var(--text-muted)">Focus on cardio, stretching, and recovery.</p>
      </div>`;
    document.getElementById('progress-container').style.display = 'none';
    return;
  }

  document.getElementById('current-workout-title').textContent = workout.name;

  const isStarted     = !!activeWorkoutStart;
  const disabledClass = isStarted ? '' : 'disabled';
  const disabledAttr  = isStarted ? '' : 'disabled';

  // All data here is from the hardcoded workouts object — no user/localStorage values
  // are injected as HTML, so innerHTML is safe for this render path.
  let html = '';
  workout.blocks.forEach(block => {
    html += `<div class="workout-section"><h2>${block.title}</h2>`;
    block.exercises.forEach(ex => {
      const isChecked      = completedExercises[ex.id] ? 'checked' : '';
      const completedClass = completedExercises[ex.id] ? 'completed' : '';
      const videoURL       = ex.url
        ? ex.url
        : `https://www.youtube.com/results?search_query=${encodeURIComponent(ex.video + ' tutorial')}`;

      html += `
        <div class="exercise-card ${completedClass} ${disabledClass}" data-exercise-id="${ex.id}">
          <div class="checkbox-container">
            <input type="checkbox" ${isChecked} ${disabledAttr}>
          </div>
          <div class="exercise-info">
            <span class="title">${ex.name}</span>
            <span class="reps">${ex.reps}</span>
            <p class="notes">${ex.notes}</p>
            <a href="${videoURL}" target="_blank" rel="noopener noreferrer" class="video-link">Watch</a>
          </div>
        </div>`;
    });
    html += `</div>`;
  });

  content.innerHTML = html;
  updateWorkoutStatus();
  updateProgressBar();
}

// ─── Render: Schedule ─────────────────────────────────────────────────────────

function renderSchedule() {
  const content = document.getElementById('schedule-content');
  let html = '';
  schedule.forEach((day, index) => {
    const isToday    = index === currentDayIndex ? 'today' : '';
    const workoutKey = getWorkoutKey(day.workout);
    const name       = workouts[workoutKey] ? workouts[workoutKey].name : 'Rest / Cardio';
    const badge      = isToday ? '<span style="color:var(--accent); font-size:0.8em; margin-left:0.5em;">(Active)</span>' : '';

    html += `
      <div class="calendar-day ${isToday}" data-day-index="${index}">
        <h3>${day.day} ${badge}</h3>
        <p style="color: var(--text-muted); font-size: 0.9em; margin-top: 0.25em;">${name}</p>
      </div>`;
  });
  content.innerHTML = html;
}

// ─── Render: History calendar ─────────────────────────────────────────────────

function renderHistoryCalendar() {
  const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const year  = historyCalDate.getFullYear();
  const month = historyCalDate.getMonth();

  document.getElementById('month-year-display').textContent = `${monthNames[month]} ${year}`;
  document.getElementById('btn-next-month').disabled = (year >= 2026 && month >= 11);

  const firstDay    = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let html = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
    .map(d => `<div class="month-day-header">${d}</div>`).join('');

  for (let i = 0; i < firstDay; i++) html += `<div class="month-date empty"></div>`;

  for (let d = 1; d <= daysInMonth; d++) {
    const key         = `${year}-${String(month + 1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const isCompleted = completedDates[key] ? 'completed' : '';
    html += `<div class="month-date ${isCompleted}">${d}</div>`;
  }

  document.getElementById('month-grid-content').innerHTML = html;
}

// ─── Event delegation ─────────────────────────────────────────────────────────

// Central dispatcher for all data-action elements (buttons and footer links)
const actionMap = {
  startWorkout,
  markWorkoutComplete,
  resetDay,
  prevMonth:          () => changeMonth(-1),
  nextMonth:          () => changeMonth(1),
  shareBadge,
  closeBadgeModal,
  acceptDisclaimer,
  openPrivacyModal,
  closePrivacyModal,
  openDisclaimerModal,
  closeToast
};

document.body.addEventListener('click', e => {
  // data-action buttons and links
  const actionEl = e.target.closest('[data-action]');
  if (actionEl) {
    e.preventDefault();
    const fn = actionMap[actionEl.dataset.action];
    if (fn) fn();
    return;
  }

  // Nav tab buttons
  const tabBtn = e.target.closest('[data-tab]');
  if (tabBtn) {
    switchTab(tabBtn.dataset.tab, tabBtn);
    return;
  }

  // Level toggle buttons
  const levelBtn = e.target.closest('[data-level]');
  if (levelBtn) {
    setLevel(levelBtn.dataset.level);
    return;
  }
});

// Exercise card delegation — handles clicks anywhere on the card including the checkbox.
// Clicking a video link bubbles up here too, so we bail out for links.
document.getElementById('workout-content').addEventListener('click', e => {
  if (e.target.closest('a')) return; // let video links open normally

  const card = e.target.closest('[data-exercise-id]');
  if (!card) return;

  // Prevent the checkbox from toggling its own checked state;
  // toggleExercise manages it explicitly to keep the app state as the source of truth.
  if (e.target.type === 'checkbox') e.preventDefault();

  toggleExercise(card.dataset.exerciseId, card);
});

// Schedule day delegation
document.getElementById('schedule-content').addEventListener('click', e => {
  const day = e.target.closest('[data-day-index]');
  if (!day) return;
  const index = parseInt(day.dataset.dayIndex, 10);
  if (!isNaN(index)) setWorkoutDay(index);
});

// ─── Init ─────────────────────────────────────────────────────────────────────

document.getElementById('btn-level-beginner').classList.toggle('active',     workoutLevel === 'beginner');
document.getElementById('btn-level-intermediate').classList.toggle('active', workoutLevel === 'intermediate');
document.getElementById('btn-level-advanced').classList.toggle('active',     workoutLevel === 'advanced');

renderDaily();
renderSchedule();
renderHistoryCalendar();

// Splash screen
document.body.style.overflow = 'hidden';
const splashScreen   = document.getElementById('splash-screen');
const splashProgress = document.getElementById('splash-progress');
const splashText     = document.getElementById('splash-text');

let progress = 0;
const splashDuration = 3000;
const intervalTime   = 30;
const increment      = 100 / (splashDuration / intervalTime);

const splashInterval = setInterval(() => {
  progress += increment;
  splashProgress.style.width = `${progress}%`;

  if (progress > 30 && progress < 70) {
    splashText.textContent = "Building Today's Workout...";
  } else if (progress >= 70) {
    splashText.textContent = 'Ready To Crush It!';
  }

  if (progress >= 100) {
    clearInterval(splashInterval);
    setTimeout(() => {
      splashScreen.classList.add('hidden');
      document.body.style.overflow = '';
      setTimeout(checkDisclaimer, 600);
    }, 200);
  }
}, intervalTime);
