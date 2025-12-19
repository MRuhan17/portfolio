// Typing animation on page load
window.addEventListener('load', () => {
  const h1 = document.querySelector('h1');
  if (h1) {
    const text = h1.textContent;
    h1.textContent = '';
    let i = 0;
    const type = () => {
      if (i < text.length) {
        h1.textContent += text[i];
        i++;
        setTimeout(type, 80);
      }
    };
    type();
  }
});

// Key sequence detector
function KeySequenceDetector(keys, callback) {
  let index = 0;
  document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    if (key === keys[index]) {
      index++;
      if (index === keys.length) {
        callback();
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}

// Easter Egg 1: AI LAB (G + R + I + D)
KeySequenceDetector(['g', 'r', 'i', 'd'], () => {
  alert('🧪 AI Lab Unlocked!\n\n🤖 Current Research: LLM Fine-tuning & Sentiment Analysis\n📊 Projects: Movie Recommender, Smart Medicine Reminder\n⚡ Skills: Python, TensorFlow, PyTorch\n\nBuilding intelligent systems through experimentation...');
  console.log('%c🧪 AI Lab Unlocked!', 'color: #64ffda; font-weight: bold; font-size: 14px;');
});

// Easter Egg 2: F1 MONACO (M + O + N + A + C + O)
KeySequenceDetector(['m', 'o', 'n', 'a', 'c', 'o'], () => {
  const f1Stats = [
    'Max Verstappen: 3x World Champion 🏆',
    'Lewis Hamilton: 103 Race Wins',
    'Red Bull: Fastest Pit Stop 1.82s',
    'Mercedes: 8 Constructor Championships',
    'DRS: Speed Boost to 370+ km/h'
  ];
  const stat = f1Stats[Math.floor(Math.random() * f1Stats.length)];
  alert('🏎️ MONACO GRAND PRIX\n\n' + stat + '\n\nWelcome to the legendary F1 circuit!');
  console.log('%c🏎️ F1 MODE ACTIVATED!', 'color: #ff0000; font-weight: bold; font-size: 14px;');
  playF1Sound();
});

function playF1Sound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator(), gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.setValueAtTime(400, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.3);
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.3);
  } catch(e) {}
}

// Easter Egg 3: TYPING CHALLENGE (T + Y + P + E)
KeySequenceDetector(['t', 'y', 'p', 'e'], () => {
  const challenges = [
    'The quick brown fox jumps over the lazy dog',
    'JavaScript is a versatile programming language',
    'Competitive programming builds problem solving skills'
  ];
  const text = challenges[Math.floor(Math.random() * challenges.length)];
  const userInput = prompt('⌨️ TYPING CHALLENGE\n\nType this as fast as you can:\n\n' + text + '\n\nYour input:');
  if (userInput) {
    let correct = 0;
    for (let i = 0; i < userInput.length && i < text.length; i++) {
      if (userInput[i] === text[i]) correct++;
      else break;
    }
    const accuracy = Math.round((correct / userInput.length) * 100);
    const wpm = Math.round((userInput.length / 5) / 0.25);
    alert('Accuracy: ' + accuracy + '%\nWPM: ' + wpm + '\nCorrect chars: ' + correct + '/' + userInput.length);
  }
  console.log('%c⌨️ Typing Challenge Started!', 'color: #00ff00; font-weight: bold; font-size: 14px;');
});

// Easter Egg 4: F1 CHAMPION STATS (C + H + A + M + P + I + O + N)
KeySequenceDetector(['c', 'h', 'a', 'm', 'p', 'i', 'o', 'n'], () => {
  const stats = [
    '🏆 Max Verstappen: 3x World Champion (2021-2023)',
    '🏁 Lewis Hamilton: 103 Race Wins',
    '💫 Mercedes: 8 Constructor Championships',
    '🔱 Red Bull: Fastest Pit Stop (1.82 sec)',
    '⚡ DRS System: Speed Boost to 370+ km/h',
    '🏅 Fernando Alonso: 32 Race Wins',
    '🎯 Sebastian Vettel: 4x World Champion'
  ];
  const randomStats = stats.sort(() => Math.random() - 0.5).slice(0, 3);
  console.log('%c🏁 F1 CHAMPIONSHIP STATS:', 'color: #FFD700; font-weight: bold; font-size: 14px;');
  randomStats.forEach(s => console.log('%c' + s, 'color: #FFD700; font-size: 12px;'));
});

// Welcome message
console.log('%c🚀 Welcome to Ruhulalemeen Mulla\'s Portfolio!', 'color: #64ffda; font-size: 20px; font-weight: bold;');
console.log('%c✨ Easter Eggs: G+R+I+D (AI Lab) | M+O+N+A+C+O (F1) | T+Y+P+E (Typing) | C+H+A+M+P+I+O+N (Stats)', 'color: #8892b0; font-size: 12px;');
