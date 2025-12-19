// =======================
// Easter Eggs for Ruhulalemeen Mulla's Portfolio
// =======================

// Easter Egg 1: AI Lab (Press G + R + I + D)
(function setupAiLabEgg() {
  const gridKeys = ['g', 'r', 'i', 'd'];
  let keyIndex = 0;

  document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    if (key === gridKeys[keyIndex]) {
      keyIndex++;
      if (keyIndex === gridKeys.length) {
        activateAiLab();
        keyIndex = 0;
      }
    } else {
      keyIndex = 0;
    }
  });

  function activateAiLab() {
    const overlay = document.getElementById('ai-lab-overlay');
    if (overlay) {
      overlay.style.display = 'flex';
      console.log('%c🧪 AI Lab Unlocked! (Press G + R + I + D)', 'color: #64ffda; font-weight: bold; font-size: 14px;');
    }
  }
})();

// Easter Egg 2: F1 Monaco Mode (Press M + O + N + A + C + O)
(function setupF1EasterEgg() {
  const f1Keys = ['m', 'o', 'n', 'a', 'c', 'o'];
  let keyIndex = 0;

  document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    if (key === f1Keys[keyIndex]) {
      keyIndex++;
      if (keyIndex === f1Keys.length) {
        activateF1Mode();
        keyIndex = 0;
      }
    } else {
      keyIndex = 0;
    }
  });

  function activateF1Mode() {
    const overlay = document.getElementById('f1-overlay');
    if (overlay) {
      overlay.style.display = 'flex';
      playF1Sound();
      console.log('%c🏎️ WELCOME TO MONACO! (Press M + O + N + A + C + O)', 'color: #ff0000; font-weight: bold; font-size: 14px;');
    }
  }

  function playF1Sound() {
    // Create F1 engine sound using Web Audio API
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      
      oscillator.connect(gain);
      gain.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.3);
      
      gain.gain.setValueAtTime(0.3, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.3);
    } catch (e) {
      // Audio API not available, silently fail
    }
  }
})();

// Easter Egg 3: Typing Speed Challenge (Press T + Y + P + E)
(function setupTypingEgg() {
  const typeKeys = ['t', 'y', 'p', 'e'];
  let keyIndex = 0;

  document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    if (key === typeKeys[keyIndex]) {
      keyIndex++;
      if (keyIndex === typeKeys.length) {
        showTypingChallenge();
        keyIndex = 0;
      }
    } else {
      keyIndex = 0;
    }
  });

  function showTypingChallenge() {
    const overlay = document.getElementById('typing-overlay');
    if (overlay) {
      overlay.style.display = 'flex';
      console.log('%c⌨️ Typing Challenge Unlocked! (Press T + Y + P + E)', 'color: #00ff00; font-weight: bold; font-size: 14px;');
    }
  }
})();

// Easter Egg 4: F1 Championship Stats (Press C + H + A + M + P + I + O + N)
(function setupF1StatsEgg() {
  const champKeys = ['c', 'h', 'a', 'm', 'p', 'i', 'o', 'n'];
  let keyIndex = 0;

  document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    if (key === champKeys[keyIndex]) {
      keyIndex++;
      if (keyIndex === champKeys.length) {
        showF1Stats();
        keyIndex = 0;
      }
    } else {
      keyIndex = 0;
    }
  });

  function showF1Stats() {
    const stats = [
      'Max Verstappen: 3x World Champion 🏆',
      'Mercedes: Most Constructors Titles',
      'Lewis Hamilton: 103 Race Wins',
      'Fastest Lap Record Holder: Max Verstappen',
      'DRS Deploy Speed: 320+ km/h',
      'Pit Stop Record: 1.82 seconds (Red Bull)',
      'Most Race Wins: Lewis Hamilton (103)',
      'Youngest Race Winner: Max Verstappen'
    ];
    const stat = stats[Math.floor(Math.random() * stats.length)];
    console.log('%c🏁 F1 Stat: ' + stat, 'color: #FFD700; font-weight: bold; font-size: 13px;');
  }
})();

// Close overlay functions
function closeOverlay(overlayId) {
  const overlay = document.getElementById(overlayId);
  if (overlay) {
    overlay.style.display = 'none';
  }
}
window.closeOverlay = closeOverlay;

// Welcome message with Easter Eggs guide
console.log('%c🚀 Welcome to Ruhulalemeen Mulla\'s Portfolio!', 'color: #64ffda; font-size: 20px; font-weight: bold;');
console.log('%c✨ Easter Eggs Found:', 'color: #8892b0; font-size: 14px; font-weight: bold;');
console.log('%c  1. Press G + R + I + D for AI Lab', 'color: #8892b0; font-size: 12px;');
console.log('%c  2. Press M + O + N + A + C + O for F1 Monaco Mode', 'color: #ff0000; font-size: 12px;');
console.log('%c  3. Press T + Y + P + E for Typing Challenge', 'color: #00ff00; font-size: 12px;');
console.log('%c  4. Press C + H + A + M + P + I + O + N for F1 Championship Stats', 'color: #FFD700; font-size: 12px;');
