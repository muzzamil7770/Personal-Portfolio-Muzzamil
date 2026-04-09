// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 800,
        once: true,
        offset: 80,
        easing: 'ease-out-cubic'
    });

    // Render all content
    renderAll();

    // Initialize Typed.js
    const typedElement = document.getElementById('typed');
    if (typedElement) {
        new Typed('#typed', {
            strings: SITE_DATA.hero.typedStrings,
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }

    // Theme toggle
    initTheme();
    
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    
    themeToggle?.addEventListener('click', toggleTheme);
    themeToggleMobile?.addEventListener('click', toggleTheme);
    
    // Keyboard support for theme toggle
    themeToggle?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleTheme();
        }
    });
    
    themeToggleMobile?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleTheme();
        }
    });

    // Mobile menu toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuBtn?.addEventListener('click', () => {
        mobileMenu?.classList.toggle('active');
    });

    // Close mobile menu on link click
    mobileMenu?.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // Scroll progress indicator
    const scrollProgress = document.getElementById('scroll-progress');
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        scrollProgress.style.width = scrolled + '%';
    }, { passive: true });

    // Navigation active state
    const sections = document.querySelectorAll('section[id]');
    const mainSectionIds = ['home', 'about', 'services', 'projects', 'testimonials', 'blog', 'contact'];
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    const href = link.getAttribute('href')?.substring(1);
                    if (href === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Navigation arrows
    const prevBtn = document.getElementById('prev-section');
    const nextBtn = document.getElementById('next-section');

    const navigateSection = (direction) => {
        const activeLink = document.querySelector('.nav-link.active');
        if (!activeLink) return;

        const currentId = activeLink.getAttribute('href').substring(1);
        const currentIndex = mainSectionIds.indexOf(currentId);

        if (direction === 'prev' && currentIndex > 0) {
            document.getElementById(mainSectionIds[currentIndex - 1])?.scrollIntoView({ behavior: 'smooth' });
        } else if (direction === 'next' && currentIndex < mainSectionIds.length - 1) {
            document.getElementById(mainSectionIds[currentIndex + 1])?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    prevBtn?.addEventListener('click', () => navigateSection('prev'));
    nextBtn?.addEventListener('click', () => navigateSection('next'));

    // Scroll to top button
    const scrollTopBtn = document.getElementById('scroll-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollTopBtn?.classList.add('visible');
        } else {
            scrollTopBtn?.classList.remove('visible');
        }
    }, { passive: true });

    scrollTopBtn?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Progress bars animation
    const animateProgressBars = () => {
        const progressBars = document.querySelectorAll('.skill-fill');
        progressBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const width = bar.getAttribute('data-width');
                bar.style.width = width + '%';
            }
        });
    };

    window.addEventListener('scroll', animateProgressBars, { passive: true });
    // Initial check
    setTimeout(animateProgressBars, 500);

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        const mailtoLink = `mailto:${SITE_DATA.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        window.location.href = mailtoLink;
        alert('Thank you for your message! Your email client should open now.');
        contactForm.reset();
    });

    // Button loading animation
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('click', function () {
            if (this.type !== 'submit') return;
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            this.disabled = true;
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
            }, 2000);
        });
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = 'var(--shadow-md)';
            } else {
                navbar.style.boxShadow = 'none';
            }
        }
    }, { passive: true });

    // Modal close buttons
    const projectModalClose = document.getElementById('modal-project-close');
    const blogModalClose = document.getElementById('modal-blog-close');
    
    projectModalClose?.addEventListener('click', closeProjectModal);
    blogModalClose?.addEventListener('click', closeBlogModal);
});
