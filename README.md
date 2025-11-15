# 🚀 Ruhan Mulla | Portfolio Website

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live-Demo-64ffda?style=for-the-badge&logo=github)](https://mruhan17.github.io/portfolio/)
[![GitHub](https://img.shields.io/badge/GitHub-MRuhan17-181717?style=for-the-badge&logo=github)](https://github.com/MRuhan17)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/ruhulalemeen-mulla)

### Building intelligent systems and breaking limits.

</div>

---

## ✨ Features

This portfolio website showcases modern web development techniques and interactive elements:

### 🎨 Visual Effects
- **Interactive Particle System** - 150+ particles with mouse interaction and connection lines
- **3D Tilt Effects** - Project cards with perspective transforms on hover
- **Smooth Scroll Animations** - Intersection Observer API for fade-in effects
- **Cursor Trail** - Custom cursor with animated trailing circles
- **Typing Effect** - Dynamic text animation on hero title
- **Glassmorphism** - Modern translucent navbar with backdrop blur

### ⚡ Performance
- **Optimized Animations** - RequestAnimationFrame for 60fps
- **Lazy Loading** - Content loads as you scroll
- **Fast Loading** - Minimal dependencies, pure JavaScript
- **Responsive Design** - Mobile-first approach

### 🎯 Sections
- **Hero** - Bold introduction with animated particles background
- **Projects** - Featured work with tech stack tags
- **Skills** - Organized tech stack categories
- **About** - Professional background and achievements
- **Contact** - Interactive form with validation

### 🥚 Easter Eggs
- **Konami Code** - Try the classic cheat code! ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️BA
- **Console Messages** - Check the browser console for surprises

---

## 🛠️ Tech Stack

```text
Languages:     HTML5, CSS3, JavaScript (ES6+)
Styling:       Custom CSS, Animations, Transitions
Fonts:         Inter (Google Fonts)
Hosting:       GitHub Pages
Version:       Git
```

---

## 📂 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   ├── main.css           # Core styles
│   └── animations.css     # Animation definitions
├── js/
│   ├── particles.js       # Interactive particle system
│   └── main.js           # Main JavaScript (3D effects, scroll, etc.)
├── projects/              # Individual project pages
│   ├── f1.html
│   ├── premierleague.html
│   └── medication.html
├── components/            # Reusable components
│   └── footer.html
├── assets/                # Images and static files
└── icons/                 # Favicon and icons
```

---

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/MRuhan17/portfolio.git
   cd portfolio
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server (recommended):
   python -m http.server 8000
   # Then visit: http://localhost:8000
   ```

3. **Customization**
   - Edit `index.html` for content
   - Modify `css/main.css` for styling
   - Adjust `js/main.js` and `js/particles.js` for interactions

---

## 🎨 Customization Guide

### Change Colors

Edit the color variables in `css/main.css`:
```css
--primary-color: #64ffda;    /* Accent color */
--bg-color: #0a0a0a;         /* Background */
--text-color: #ffffff;        /* Text */
```

### Adjust Particle Count

In `js/particles.js`, line 76:
```javascript
for (let i = 0; i < 150; i++) {  // Change 150 to desired count
    particles.push(new Particle());
}
```

### Modify Animations

Edit animation speeds in `js/main.js`:
```javascript
el.style.transition = 'opacity 0.6s ease';  // Adjust timing
```

---

## 📋 Features Breakdown

### Particles.js
- **Mouse Interaction**: Particles move away from cursor
- **Connections**: Lines drawn between nearby particles
- **Smooth Animation**: Uses canvas and requestAnimationFrame
- **Responsive**: Adapts to window resize

### Main.js
- **Smooth Scrolling**: Navigation links scroll smoothly
- **Intersection Observer**: Fade-in animations on scroll
- **3D Tilt**: Perspective transforms on project cards
- **Dynamic Navbar**: Background appears on scroll
- **Form Handling**: Contact form with feedback
- **Cursor Trail**: Custom cursor effect
- **Easter Eggs**: Hidden surprises

---

## 🌟 Highlights

- ✅ **No Framework Dependencies** - Pure vanilla JavaScript
- ✅ **Modern ES6+ Syntax** - Clean and maintainable code
- ✅ **Responsive Design** - Works on all devices
- ✅ **Smooth Animations** - 60fps performance
- ✅ **Interactive Elements** - Engaging user experience
- ✅ **Clean Code** - Well-documented and organized

---

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- 📱 Mobile devices (320px+)
- 💻 Tablets (768px+)
- 🖥️ Desktops (1024px+)
- 📺 Large screens (1920px+)

---

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📧 Contact

**Ruhan Mulla**
- Portfolio: [mruhan17.github.io/portfolio](https://mruhan17.github.io/portfolio/)
- GitHub: [@MRuhan17](https://github.com/MRuhan17)
- LinkedIn: [Ruhulalemeen Mulla](https://linkedin.com/in/ruhulalemeen-mulla)
- Email: ruhanmulla07@gmail.com

---

## 🙏 Acknowledgments

- Inspired by modern portfolio designs
- Built with passion and curiosity
- Powered by ☕ and 🎵

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

**Made with ❤️ by Ruhan Mulla**

</div>
