document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlEl.setAttribute('data-theme', savedTheme);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlEl.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            htmlEl.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // Fixed Navbar Hide/Show on Scroll
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > 120) {
            navbar.classList.add('nav-hidden');
        } else {
            navbar.classList.remove('nav-hidden');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, { passive: true });

    // Scroll Reveal Observer
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    revealElements.forEach(el => revealObserver.observe(el));

    // Sticky INDEX Active Section Scrollspy
    const indexItems = document.querySelectorAll('.index-item');
    const sections = document.querySelectorAll('section[id]');

    function updateActiveIndex() {
        let currentSectionId = '';
        const scrollPosition = window.pageYOffset + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        indexItems.forEach(item => {
            item.classList.remove('active');
            const href = item.getAttribute('href');
            if (href === `#${currentSectionId}`) {
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveIndex, { passive: true });
    updateActiveIndex();

    // Floating Cursor-Following Character (Tiny Astronaut Companion)
    const companion = document.getElementById('cursor-companion');
    if (companion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let companionX = mouseX;
        let companionY = mouseY;
        let rotation = 0;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCompanion() {
            // Trailing target offset (18px behind cursor)
            const targetX = mouseX + 18;
            const targetY = mouseY + 18;

            const dx = targetX - companionX;
            const dy = targetY - companionY;

            // Lerp interpolation (smooth follow delay)
            companionX += dx * 0.08;
            companionY += dy * 0.08;

            // Velocity-based rotation calculation
            const speed = Math.sqrt(dx * dx + dy * dy);
            const targetRotation = speed > 1.5 ? (dx > 0 ? 12 : -12) : 0;
            rotation += (targetRotation - rotation) * 0.1;

            // Idle floating bobbing motion
            const bobbing = Math.sin(Date.now() / 350) * 3;

            companion.style.transform = `translate3d(${companionX}px, ${companionY + bobbing}px, 0) rotate(${rotation}deg)`;
            requestAnimationFrame(animateCompanion);
        }

        requestAnimationFrame(animateCompanion);
    }

    // Projects Filtering
    const projectFilterBtns = document.querySelectorAll('.project-filters .filter-btn');
    const projectCards = document.querySelectorAll('.projects-grid .project-card');

    projectFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            projectFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-filter');
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (category === 'all' || cardCategory === category || (category === 'ai' && cardCategory.includes('ai')) || (category === 'systems' && cardCategory.includes('systems'))) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Tech Stack Filtering
    const techFilterBtns = document.querySelectorAll('.tech-tabs .filter-btn');
    const techPills = document.querySelectorAll('.tech-grid .tech-pill');

    techFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            techFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-tech-category');
            techPills.forEach(pill => {
                const pillCategory = pill.getAttribute('data-category');
                if (category === 'all' || pillCategory === category) {
                    pill.style.display = 'inline-flex';
                } else {
                    pill.style.display = 'none';
                }
            });
        });
    });
});
