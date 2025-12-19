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

// Create modal overlay on screen
function showModal(title, content) {
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.85); backdrop-filter: blur(5px);
    display: flex; align-items: center; justify-content: center;
    z-index: 9999;
  `;
  
  const box = document.createElement('div');
  box.style.cssText = `
    background: rgba(15,15,20,0.95); border: 1px solid rgba(100,255,218,0.4);
    border-radius: 12px; padding: 32px; max-width: 500px; width: 90%;
    box-shadow: 0 20px 60px rgba(0,0,0,0.8);
    color: #ffffff; font-family: 'Inter', system-ui;
  `;
  
  const closeBtn = document.createElement('button');
  closeBtn.textContent = '×';
  closeBtn.style.cssText = `
    position: absolute; top: 12px; right: 16px; background: none;
    border: none; color: #ffffff; font-size: 28px; cursor: pointer;
    opacity: 0.7; transition: opacity 0.2s;
  `;
  closeBtn.onmouseover = () => closeBtn.style.opacity = '1';
  closeBtn.onmouseout = () => closeBtn.style.opacity = '0.7';
  closeBtn.onclick = () => modal.remove();
  
  const titleEl = document.createElement('h2');
  titleEl.textContent = title;
  titleEl.style.cssText = `
    margin: 0 0 16px 0; font-size: 1.6rem; color: #64ffda;
  `;
  
  const contentEl = document.createElement('div');
  contentEl.innerHTML = content;
  contentEl.style.cssText = `
    font-size: 0.95rem; line-height: 1.7; color: #e0e0e0;
  `;
  
  box.appendChild(closeBtn);
  box.appendChild(titleEl);
  box.appendChild(contentEl);
  modal.appendChild(box);
  modal.onclick = (e) => e.target === modal && modal.remove();
  document.body.appendChild(modal);
}

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

// Easter Egg 1: AI LAB
KeySequenceDetector(['g', 'r', 'i', 'd'], () => {
  showModal('🧪 AI Lab Unlocked', `
    <p><strong>🤖 Current Research:</strong><br>LLM Fine-tuning & Sentiment Analysis</p>
    <p><strong>📊 Projects:</strong><br>Movie Recommender (Sentiment ML)<br>Smart Medicine Reminder</p>
    <p><strong>⚡ Skills:</strong><br>Python, TensorFlow, PyTorch, Data Processing</p>
    <p style="opacity: 0.8; font-size: 0.9rem; margin-top: 16px;">Building intelligent systems through experimentation...</p>
  `);
  console.log('%c🧪 AI Lab Unlocked!', 'color: #64ffda; font-weight: bold; font-size: 14px;');
});

// Easter Egg 2: F1 MONACO
KeySequenceDetector(['m', 'o', 'n', 'a', 'c', 'o'], () => {
  const f1Stats = [
    'Max Verstappen: 3x World Champion 🏆',
    'Lewis Hamilton: 103 Race Wins',
    'Red Bull: Fastest Pit Stop 1.82s',
    'Mercedes: 8 Constructor Championships',
    'DRS: Speed Boost to 370+ km/h'
  ];
  const stat = f1Stats[Math.floor(Math.random() * f1Stats.length)];
  showModal('🏎️ MONACO GRAND PRIX', `
    <p style="font-size: 1.1rem; color: #FFD700; font-weight: bold;">${stat}</p>
    <p>Welcome to the legendary F1 circuit!</p>
    <p style="opacity: 0.7; font-size: 0.9rem;">The most glamorous race on the calendar...</p>
  `);
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

// Easter Egg 3: TYPING CHALLENGE
KeySequenceDetector(['t', 'y', 'p', 'e'], () => {
  const challenges = [
    'The quick brown fox jumps over the lazy dog',
    'JavaScript is a versatile programming language',
    'Competitive programming builds problem solving skills'
  ];
  const text = challenges[Math.floor(Math.random() * challenges.length)];
  
  let html = `
    <p style="background: rgba(0,255,0,0.1); padding: 12px; border-radius: 8px; font-family: monospace; margin-bottom: 16px;">
      ${text}
    </p>
    <input type="text" id="typing-input" placeholder="Type here..." style="
      width: 100%; padding: 10px; border: 1px solid #00ff00; background: rgba(0,0,0,0.5);
      color: #00ff00; border-radius: 6px; font-family: monospace; box-sizing: border-box;
    ">
    <div id="typing-result" style="margin-top: 12px; font-size: 0.9rem;"></div>
  `;
  
  showModal('⌨️ Typing Challenge', html);
  
  setTimeout(() => {
    const input = document.getElementById('typing-input');
    const result = document.getElementById('typing-result');
    if (input) {
      input.focus();
      input.addEventListener('input', (e) => {
        const typed = e.target.value;
        let correct = 0;
        for (let i = 0; i < typed.length && i < text.length; i++) {
          if (typed[i] === text[i]) correct++;
          else break;
        }
        const accuracy = typed.length > 0 ? Math.round((correct / typed.length) * 100) : 0;
        const wpm = typed.length > 0 ? Math.round((typed.length / 5) / 0.25) : 0;
        if (result) result.innerHTML = `<p style="color: #00ff00;"><strong>Accuracy: ${accuracy}% | WPM: ${wpm}</strong></p>`;
      });
    }
  }, 100);
  
  console.log('%c⌨️ Typing Challenge Started!', 'color: #00ff00; font-weight: bold; font-size: 14px;');
});

// Easter Egg 4: F1 CHAMPION STATS
KeySequenceDetector(['c', 'h', 'a', 'm', 'p', 'i', 'o', 'n'], () => {
  const stats = [
    '🏆 Max Verstappen: 3x World Champion',
    '🏁 Lewis Hamilton: 103 Race Wins',
    '💫 Mercedes: 8 Constructor Championships',
    '🔱 Red Bull: Fastest Pit Stop (1.82s)',
    '⚡ DRS System: 370+ km/h boost',
    '🏅 Fernando Alonso: 32 Race Wins',
    '🎯 Sebastian Vettel: 4x World Champion'
  ];
  const randomStats = stats.sort(() => Math.random() - 0.5).slice(0, 3).join('<br>');
  showModal('🏁 F1 Championship Stats', `<p>${randomStats}</p>`);
  console.log('%c🏁 F1 STATS:', 'color: #FFD700; font-weight: bold; font-size: 14px;');
});

console.log('%c🚀 Welcome to Ruhulalemeen Mulla\'s Portfolio!', 'color: #64ffda; font-size: 20px; font-weight: bold;');
console.log('%c✨ Easter Eggs: G+R+I+D (AI Lab) | M+O+N+A+C+O (F1) | T+Y+P+E (Typing) | C+H+A+M+P+I+O+N (Stats)', 'color: #8892b0; font-size: 12px;');
