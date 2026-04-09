// ============================================
// ANIMATED BACKGROUND (Desktop Only)
// ============================================

function initAnimatedBackground() {
    // Only enable on desktop (>= 1024px)
    if (window.innerWidth < 1024) return;

    const container = document.getElementById('animated-bg');
    if (!container) return;

    // Clear existing elements
    container.innerHTML = '';

    // Developer-themed symbols and code snippets
    const symbols = [
        '</>', '{ }', '( )', '=>', 'const', 'function',
        'return', 'import', 'export', 'async', 'await',
        'class', 'extends', 'interface', 'type', 'enum',
        '<div>', '</div>', '<Component />', 'useState',
        'useEffect', 'ngOnInit', '@Component', '[ngFor]',
        '*ngIf', '[(ngModel)]', 'RxJS', 'Observable',
        'subscribe', 'pipe', 'map', 'filter', 'switchMap',
        'Promise', '.then()', 'try {}', 'catch (e)',
        'console.log()', 'debugger', 'npm install',
        'git commit', 'git push', 'docker run',
        'SELECT *', 'WHERE', 'JOIN', 'INSERT INTO',
        'HTTP', 'REST', 'API', 'JSON', 'GraphQL',
        'CSS', 'HTML', 'JS', 'TS', 'SCSS',
        '0', '1', 'true', 'false', 'null', 'undefined',
        '===', '!==', '&&', '||', '?.', '??',
        '...', '=>', '()', '{}', '[]', '<>'
    ];

    const elementCount = 15;

    for (let i = 0; i < elementCount; i++) {
        const element = document.createElement('div');
        element.className = 'animated-bg-element';
        element.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        
        // Random horizontal position
        element.style.left = Math.random() * 100 + '%';
        element.style.fontSize = (Math.random() * 10 + 12) + 'px';
        
        // Start at random vertical positions (spread across viewport)
        const startY = Math.random() * 100;
        element.style.bottom = startY + 'vh';
        
        // Animation duration (20-35 seconds for smooth movement)
        const duration = Math.random() * 15 + 20;
        element.style.animationDuration = duration + 's';
        
        // Negative delay so elements are already in motion on page load
        element.style.animationDelay = '-' + (Math.random() * duration) + 's';

        container.appendChild(element);
    }

    // Re-initialize on resize if crossing breakpoint
    let isDesktop = window.innerWidth >= 1024;
    
    window.addEventListener('resize', () => {
        const nowDesktop = window.innerWidth >= 1024;
        
        if (nowDesktop && !isDesktop) {
            isDesktop = true;
            initAnimatedBackground();
        } else if (!nowDesktop && isDesktop) {
            isDesktop = false;
            container.innerHTML = '';
        }
    }, { passive: true });
}

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

    // Setup form handlers (MUST be after renderAll)
    setupFormHandlers();

    // Initialize Animated Background (Desktop only)
    initAnimatedBackground();

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

    // ============================================
    // FORM EVENT LISTENERS - SETUP FUNCTION
    // ============================================
    
    function setupFormHandlers() {
        console.log('🔧 Setting up form handlers with Web3Forms...');
        
        // ============================================
        // CONTACT FORM - WEB3FORMS INTEGRATION
        // ============================================
        
        const contactForm = document.getElementById('contact-form');
        const contactSubmitBtn = document.getElementById('contact-submit-btn');
        const contactSuccess = document.getElementById('contact-form-success');
        const contactError = document.getElementById('contact-form-error');

        console.log('📋 Contact form found:', contactForm ? 'YES ✓' : 'NO ✗');

        if (!contactForm) {
            console.error('❌ Contact form not found in DOM!');
            return;
        }

        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            console.log('📤 Contact form submit triggered!');
            
            // Show loading state
            const originalBtnText = contactSubmitBtn.innerHTML;
            contactSubmitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            contactSubmitBtn.disabled = true;
            
            // Hide previous messages
            contactSuccess.style.display = 'none';
            contactError.style.display = 'none';

            try {
                const formData = new FormData(contactForm);
                const object = Object.fromEntries(formData);
                const json = JSON.stringify(object);
                
                console.log('📤 Sending to Web3Forms API...');
                
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: json
                });

                const data = await response.json();
                console.log('✅ Web3Forms response:', data);
                
                if (response.ok && data.success) {
                    // Show success message
                    console.log('✅ Form submitted successfully!');
                    contactSuccess.style.display = 'block';
                    contactForm.reset();
                    
                    // Close any open modals
                    window.closeHireMeModal();
                    
                    // Wait 2 seconds then redirect
                    setTimeout(() => {
                        console.log('🔄 Redirecting to thanks.html');
                        window.location.href = 'thanks.html';
                    }, 2000);
                } else {
                    // Error from Web3Forms
                    const errorMessage = data.message || 'Unknown error occurred';
                    console.error('❌ Web3Forms error:', data);
                    contactError.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${errorMessage}`;
                    contactError.style.display = 'block';
                }
            } catch (error) {
                console.error('❌ Network error:', error);
                contactError.innerHTML = `<i class="fas fa-exclamation-circle"></i> Network error: ${error.message}`;
                contactError.style.display = 'block';
            } finally {
                // Restore button
                contactSubmitBtn.innerHTML = originalBtnText;
                contactSubmitBtn.disabled = false;
            }
        });

        // ============================================
        // HIRE ME FORM
        // ============================================
        
        const hireForm = document.getElementById('hire-form');
        const hireSubmitBtn = document.getElementById('hire-submit-btn');
        const hireSuccess = document.getElementById('hire-form-success');
        const hireError = document.getElementById('hire-form-error');
        const hireServicesInput = document.getElementById('hire-services');

        console.log('💼 Hire form found:', hireForm ? 'YES ✓' : 'NO ✗');

        if (hireForm) {
            hireForm.addEventListener('submit', async function(e) {
                e.preventDefault();
                console.log('📤 Hire form submit triggered!');
                
                // Update hidden services field
                hireServicesInput.value = selectedServices.join(', ');
                
                // Show loading state
                const originalBtnText = hireSubmitBtn.innerHTML;
                hireSubmitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                hireSubmitBtn.disabled = true;
                
                // Hide previous messages
                hireSuccess.style.display = 'none';
                hireError.style.display = 'none';

                try {
                    const formData = new FormData(hireForm);
                    const object = Object.fromEntries(formData);
                    const json = JSON.stringify(object);
                    
                    console.log('📤 Sending to Web3Forms API...');
                    
                    const response = await fetch('https://api.web3forms.com/submit', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: json
                    });

                    const data = await response.json();
                    console.log('✅ Web3Forms response:', data);
                    
                    if (response.ok && data.success) {
                        console.log('✅ Hire form submitted successfully!');
                        hireSuccess.style.display = 'block';
                        hireForm.reset();
                        selectedServices = [];
                        document.querySelectorAll('.hire-service-item').forEach(item => {
                            item.classList.remove('selected');
                        });
                        
                        // Wait 2 seconds then redirect
                        setTimeout(() => {
                            console.log('🔄 Redirecting to thanks.html');
                            window.location.href = 'thanks.html';
                        }, 2000);
                    } else {
                        const errorMessage = data.message || 'Unknown error occurred';
                        console.error('❌ Web3Forms error:', data);
                        hireError.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${errorMessage}`;
                        hireError.style.display = 'block';
                    }
                } catch (error) {
                    console.error('❌ Network error:', error);
                    hireError.innerHTML = `<i class="fas fa-exclamation-circle"></i> Network error: ${error.message}`;
                    hireError.style.display = 'block';
                } finally {
                    hireSubmitBtn.innerHTML = originalBtnText;
                    hireSubmitBtn.disabled = false;
                }
            });
        }
    }

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

    // ============================================
    // FULL-SCREEN PROJECT PREVIEW
    // ============================================
    
    const previewModal = document.getElementById('project-preview-modal');
    const previewClose = document.getElementById('preview-close');
    const previewImage = document.getElementById('preview-image');
    const zoomIn = document.getElementById('zoom-in');
    const zoomOut = document.getElementById('zoom-out');
    const zoomReset = document.getElementById('zoom-reset');

    let currentZoom = 1;

    window.openProjectPreview = function(projectId) {
        const project = SITE_DATA.projects.find(p => p.id === projectId);
        if (!project) return;

        window.currentPreviewProject = projectId;
        previewImage.src = project.image;
        previewImage.alt = project.title;
        document.getElementById('preview-title').textContent = project.title;
        document.getElementById('preview-description').textContent = project.description;
        
        const techContainer = document.getElementById('preview-tech');
        techContainer.innerHTML = project.techs.map(tech => `<span>${tech}</span>`).join('');

        currentZoom = 1;
        previewImage.classList.remove('zoomed');
        previewImage.style.transform = 'scale(1)';

        previewModal.classList.add('active');
        document.body.classList.add('modal-open');
    };

    window.closeProjectPreview = function() {
        previewModal.classList.remove('active');
        document.body.classList.remove('modal-open');
        currentZoom = 1;
        previewImage.classList.remove('zoomed');
        previewImage.style.transform = 'scale(1)';
    };

    previewClose?.addEventListener('click', window.closeProjectPreview);

    previewImage?.addEventListener('click', function() {
        currentZoom = currentZoom === 1 ? 1.5 : 1;
        this.classList.toggle('zoomed');
        this.style.transform = `scale(${currentZoom})`;
    });

    zoomIn?.addEventListener('click', function() {
        currentZoom = Math.min(currentZoom + 0.25, 3);
        previewImage.style.transform = `scale(${currentZoom})`;
        if (currentZoom > 1) {
            previewImage.classList.add('zoomed');
        }
    });

    zoomOut?.addEventListener('click', function() {
        currentZoom = Math.max(currentZoom - 0.25, 0.5);
        previewImage.style.transform = `scale(${currentZoom})`;
        if (currentZoom <= 1) {
            previewImage.classList.remove('zoomed');
        }
    });

    zoomReset?.addEventListener('click', function() {
        currentZoom = 1;
        previewImage.style.transform = 'scale(1)';
        previewImage.classList.remove('zoomed');
    });

    // Close preview on background click
    previewModal?.addEventListener('click', function(e) {
        if (e.target === previewModal) {
            window.closeProjectPreview();
        }
    });

    // ============================================
    // HIRE ME MODAL
    // ============================================
    
    const hireMeModal = document.getElementById('hire-me-modal');
    const hireMeClose = document.getElementById('hire-me-close');
    const hireForm = document.getElementById('hire-form');
    const hireServicesGrid = document.getElementById('hire-services-grid');
    let selectedServices = [];

    window.openHireMeModal = function() {
        hireMeModal.classList.add('active');
        document.body.classList.add('modal-open');
    };

    window.closeHireMeModal = function() {
        if (hireMeModal) {
            hireMeModal.classList.remove('active');
        }
        document.body.classList.remove('modal-open');
        if (hireForm) hireForm.reset();
        selectedServices = [];
        document.querySelectorAll('.hire-service-item').forEach(item => {
            item.classList.remove('selected');
        });
    };

    hireMeClose?.addEventListener('click', window.closeHireMeModal);

    hireMeModal?.addEventListener('click', function(e) {
        if (e.target === hireMeModal) {
            window.closeHireMeModal();
        }
    });

    // Service selection
    hireServicesGrid?.addEventListener('click', function(e) {
        const item = e.target.closest('.hire-service-item');
        if (!item) return;

        item.classList.toggle('selected');
        const service = item.dataset.service;
        
        if (selectedServices.includes(service)) {
            selectedServices = selectedServices.filter(s => s !== service);
        } else {
            selectedServices.push(service);
        }
    });

    // ============================================
    // UPWORK WIDGET
    // ============================================

    const upworkToggle = document.getElementById('upwork-toggle');
    const upworkPopup = document.getElementById('upwork-popup');

    upworkToggle?.addEventListener('click', function() {
        this.classList.toggle('active');
        upworkPopup.classList.toggle('active');
    });

    // Close Upwork popup when clicking outside
    document.addEventListener('click', function(e) {
        const upworkWidget = document.getElementById('upwork-widget');
        if (upworkWidget && !upworkWidget.contains(e.target)) {
            upworkToggle?.classList.remove('active');
            upworkPopup?.classList.remove('active');
        }
    });
});
