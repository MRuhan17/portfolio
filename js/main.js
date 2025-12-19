// =======================
// Typing Animation on Page Load
// =======================
window.addEventListener('load', () => {
  const titleElement = document.querySelector('h1');
  if (titleElement) {
    const text = titleElement.textContent;
    titleElement.textContent = '';
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < text.length) {
        titleElement.textContent += text[index];
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 80);
  }
});

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
      const content = overlay.querySelector('[id$="-content"]') || overlay.querySelector('div:nth-child(2)');
      if (content) {
        content.innerHTML = `
          <button onclick="closeOverlay('ai-lab-overlay')" style="position: absolute; top: 10px; right: 14px; background: transparent; border: none; color: #ffffff; font-size: 1.4rem; cursor: pointer;">×</button>
          <h2 style="margin-top: 0; margin-bottom: 16px; font-size: 1.6rem; color: #64ffda;">🧪 AI Lab</h2>
          <div style="text-align: left; font-size: 0.9rem; line-height: 1.8;">
            <p><strong>🤖 Current Research:</strong> LLM fine-tuning & sentiment analysis</p>
            <p><strong>📊 Projects:</strong> Movie Recommender (Sentiment ML), Smart Medicine Reminder</p>
            <p><strong>⚡ Skills:</strong> Python, TensorFlow, PyTorch, Data Processing</p>
            <p style="margin-top: 12px; opacity: 0.8; font-size: 0.85rem;">Building intelligent systems through experimentation...</p>
          </div>
        `;
      }
      overlay.style.display = 'flex';
      console.log('%c🧪 AI Lab Unlocked!', 'color: #64ffda; font-weight: bold; font-size: 14px;');
    }
  }
})();

// Easter Egg 2: F1 Monaco Mode (Press M + O + N + A + C + O)
(function setupF1EasterEgg() {
  const f1Keys = ['m', 'o', 'n', 'a', 'c', 'o'];
  let keyIndex = 0;
  const f1Stats = [
    { driver: 'Max Verstappen', stat: '3x World Champion', year: '2021-2023' },
    { driver: 'Lewis Hamilton', stat: '103 Race Wins', year: 'Record Holder' },
    { driver: 'Red Bull', stat: 'Fastest Pit Stop', year: '1.82 seconds' },
    { driver: 'Mercedes', stat: 'Most Constructor Titles', year: '8 Championships' },
    { driver: 'DRS System', stat: 'Top Speed', year: '370+ km/h' }
  ];
  let currentStat = 0;

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
      const content = overlay.querySelector('div:nth-child(1)');
      currentStat = Math.floor(Math.random() * f1Stats.length);
      const stat = f1Stats[currentStat];
      if (content) {
        content.innerHTML = `
          <button onclick="closeOverlay('f1-overlay')" style="position: absolute; top: 10px; right: 14px; background: transparent; border: none; color: #ffffff; font-size: 1.4rem; cursor: pointer;">×</button>
          <h2 style="margin: 0; font-size: 2rem; color: #ff0000; text-shadow: 0 0 15px #ff0000;">🏎️ MONACO</h2>
          <p style="margin: 8px 0; font-size: 1.1rem;">${stat.driver}</p>
          <p style="margin: 8px 0; color: #FFD700; font-weight: bold;">${stat.stat}</p>
          <p style="margin: 0; opacity: 0.8; font-size: 0.9rem;">${stat.year}</p>
        `;
      }
      overlay.style.display = 'flex';
      playF1Sound();
      console.log('%c🏎️ F1 MODE ACTIVATED!', 'color: #ff0000; font-weight: bold; font-size: 14px;');
    }
  }

  function playF1Sound() {
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
    } catch (e) {}
  }
})();

// Easter Egg 3: Typing Speed Challenge (Press T + Y + P + E)
(function setupTypingEgg() {
  const typeKeys = ['t', 'y', 'p', 'e'];
  let keyIndex = 0;
  let typingStarted = false;
  let startTime = 0;
  let correctChars = 0;

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
      const content = overlay.querySelector('div:nth-child(1)');
      const challenges = [
        'The quick brown fox jumps over the lazy dog',
        'JavaScript is a versatile programming language',
        'Competitive programming builds problem solving skills'
      ];
      const challenge = challenges[Math.floor(Math.random() * challenges.length)];
      
      if (content) {
        content.innerHTML = `
          <button onclick="closeOverlay('typing-overlay')" style="position: absolute; top: 10px; right: 14px; background: transparent; border: none; color: #ffffff; font-size: 1.4rem; cursor: pointer;">×</button>
          <h2 style="margin-top: 0; margin-bottom: 12px; font-size: 1.6rem; color: #00ff00;">⌨️ Typing Challenge</h2>
          <div style="background: rgba(0, 255, 0, 0.1); padding: 12px; border-radius: 8px; margin-bottom: 12px; font-family: monospace; font-size: 1rem; min-height: 60px;" id="typing-text">${challenge}</div>
          <input type="text" id="typing-input" placeholder="Start typing..." style="width: 100%; padding: 10px; border: 1px solid #00ff00; background: rgba(0, 0, 0, 0.5); color: #00ff00; border-radius: 6px; font-family: monospace;" />
          <div id="typing-result" style="margin-top: 12px; font-size: 0.9rem; text-align: center;"></div>
        `;
        
        setTimeout(() => {
          const input = document.getElementById('typing-input');
          const textDiv = document.getElementById('typing-text');
          const result = document.getElementById('typing-result');
          
          if (input && textDiv && result) {
            input.focus();
            input.addEventListener('input', (evt) => {
              const typed = evt.target.value;
              const original = challenge;
              let correct = 0;
              
              for (let i = 0; i < typed.length && i < original.length; i++) {
                if (typed[i] === original[i]) correct++;
                else break;
              }
              
              const accuracy = typed.length > 0 ? Math.round((correct / typed.length) * 100) : 0;
              const wpm = typed.length > 0 ? Math.round((typed.length / 5) / 0.25) : 0; // rough WPM calc
              
              result.innerHTML = `<p style="color: #00ff00;">Accuracy: ${accuracy}% | WPM: ${wpm}</p>`;
            });
          }
        }, 100);
      }
      overlay.style.display = 'flex';
      console.log('%c⌨️ Typing Challenge Started!', 'color: #00ff00; font-weight: bold; font-size: 14px;');
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
      '🏆 Max Verstappen: 3x World Champion (2021-2023)',
      '🏁 Lewis Hamilton: 103 Race Wins (Most Wins)',
      '💫 Mercedes: 8 Constructor Championships',
      '🔱 Red Bull: Fastest Pit Stop (1.82 sec)',
      '⚡ DRS System: Speed Boost to 370+ km/h'
    ];
    const randomStats = stats.sort(() => Math.random() - 0.5).slice(0, 3);
    console.log('%c🏁 F1 CHAMPIONSHIP STATS:', 'color: #FFD700; font-weight: bold; font-size: 14px;');
    randomStats.forEach(stat => {
      console.log('%c' + stat, 'color: #FFD700; font-size: 12px;');
    });
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

// Welcome message
console.log('%c🚀 Welcome to Ruhulalemeen Mulla\'s Portfolio!', 'color: #64ffda; font-size: 20px; font-weight: bold;');
console.log('%c✨ Easter Eggs:', 'color: #8892b0; font-size: 14px; font-weight: bold;');
console.log('%c  1. G+R+I+D: AI Lab | 2. M+O+N+A+C+O: F1 Mode | 3. T+Y+P+E: Typing | 4. C+H+A+M+P+I+O+N: F1 Stats', 'color: #8892b0; font-size: 12px;');
