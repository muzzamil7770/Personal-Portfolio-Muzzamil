// ============================================
// RENDER FUNCTIONS
// ============================================

function renderNavigation() {
    const navContainer = document.getElementById('nav-links');
    if (!navContainer) return;

    const navLinks = SITE_DATA.nav.links.map((link) => {
        return `<a href="${link.href}" class="nav-link">${link.label}</a>`;
    }).join('');

    navContainer.innerHTML = navLinks + `
        <a href="#hire" class="nav-link" id="hire-me-nav" style="background: var(--primary); color: #ffffff; font-weight: 600;" onclick="openHireMeModal(); return false;">
            ${SITE_DATA.nav.hireMe.label}
        </a>
    `;
}

function renderHero() {
    const container = document.getElementById('hero-content');
    if (!container) return;

    container.innerHTML = `
        <div class="hero-image-wrapper" data-aos="zoom-in-right">
            <img src="${SITE_DATA.hero.profileImage}" alt="Muhammad Muzzamil - Professional Developer"
                class="hero-image" />
        </div>

        <div class="hero-text" data-aos="fade-left">
            <p class="hero-greeting">${SITE_DATA.hero.greeting}</p>
            <h1 class="hero-name">
                Muhammad <span class="text-accent">Muzzamil</span>
            </h1>
            <h2 class="hero-title">
                <span id="typed"></span>
            </h2>
            <p class="hero-description">
                ${SITE_DATA.hero.description}
            </p>

            <div class="hero-buttons">
                <a href="mailto:${SITE_DATA.hero.email}" class="btn btn-primary">
                    <i class="fas fa-envelope"></i>
                    <span>Get In Touch</span>
                </a>
                <a href="/doc/MUZZAMIL Full Stack Web Developer.pdf" download class="btn btn-cv">
                    <i class="fas fa-download"></i>
                    <span>Download CV</span>
                </a>
                <a href="https://wa.me/${SITE_DATA.hero.whatsapp}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
                    <i class="fab fa-whatsapp"></i>
                    <span>WhatsApp</span>
                </a>
                <a href="https://www.linkedin.com/in/${SITE_DATA.hero.linkedin}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
                    <i class="fab fa-linkedin"></i>
                    <span>LinkedIn</span>
                </a>
            </div>
        </div>
    `;
}

function renderAbout() {
    const container = document.getElementById('about-content');
    if (!container) return;

    container.innerHTML = `
        <div class="card card-accent" data-aos="fade-up">
            <div style="display: grid; gap: 1.5rem; align-items: center;">
                <div style="display: flex; justify-content: center;">
                    <img src="${SITE_DATA.about.profileImage}" alt="Muhammad Muzzamil"
                        style="width: 180px; height: 180px;  object-fit: cover;" />
                </div>
                <div>
                    <h3 style="margin-bottom: 1rem; color: var(--text-primary);">${SITE_DATA.about.title}</h3>
                    <p style="margin-bottom: 1rem;">${SITE_DATA.about.description1}</p>
                    <p style="margin-bottom: 1.5rem;">${SITE_DATA.about.description2}</p>
                    
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                        ${SITE_DATA.about.stats.map(stat => `
                            <div style="text-align: center;">
                                <div style="font-size: 1.75rem; font-weight: 700; color: var(--primary);">${stat.value}</div>
                                <div style="font-size: 0.8125rem; color: var(--text-muted);">${stat.label}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderSkills() {
    const container = document.getElementById('skills-content');
    if (!container) return;

    container.innerHTML = SITE_DATA.skills.map((skill, index) => `
        <div class="skill-card" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="skill-header">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-percent">${skill.level}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-fill" data-width="${skill.level}" style="width: 0%;"></div>
            </div>
        </div>
    `).join('');
}

function renderExperience() {
    const container = document.getElementById('experience-content');
    if (!container) return;

    container.innerHTML = SITE_DATA.experience.map((exp, index) => `
        <div class="experience-card" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="experience-header">
                <h3 class="experience-title">${exp.title}</h3>
                <span class="experience-period">${exp.period}</span>
            </div>
            <p class="experience-company">${exp.company} - ${exp.location}</p>
            <p class="experience-description">${exp.description}</p>
        </div>
    `).join('');
}

function renderEducation() {
    const container = document.getElementById('education-content');
    if (!container) return;

    container.innerHTML = SITE_DATA.education.map((edu, index) => `
        <div class="experience-card" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="experience-header">
                <h3 class="experience-title">${edu.degree}</h3>
                <span class="experience-period">${edu.period}</span>
            </div>
            <p class="experience-company">${edu.institution} - ${edu.grade}</p>
            <p class="experience-description">${edu.description}</p>
        </div>
    `).join('');
}

function renderServices() {
    const container = document.getElementById('services-content');
    if (!container) return;

    container.innerHTML = SITE_DATA.services.map((service, index) => `
        <div class="service-card" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
        </div>
    `).join('');
}

function renderProjects() {
    const container = document.getElementById('projects-content');
    if (!container) return;

    container.innerHTML = SITE_DATA.projects.map((project, index) => `
        <div class="project-card" data-aos="fade-up" data-aos-delay="${index * 100}" data-project-id="${project.id}" onclick="openProjectPreview('${project.id}')">
            <div class="project-image-wrapper">
                <img src="${project.image}" alt="${project.title}" class="project-image" />
                <div class="project-image-overlay">
                    <div class="project-preview-icon">
                        <i class="fas fa-expand"></i>
                    </div>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.techs.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <button class="project-link" onclick="event.stopPropagation(); openProjectModal('${project.id}')">
                    View Details <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `).join('');
}

function renderTestimonials() {
    const container = document.getElementById('testimonials-content');
    if (!container) return;

    container.innerHTML = SITE_DATA.testimonials.map((testimonial, index) => `
        <div class="testimonial-card" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="testimonial-quote">"</div>
            <p class="testimonial-text">${testimonial.quote}</p>
            <div class="testimonial-author">
                <div class="testimonial-avatar" style="background: linear-gradient(135deg, ${testimonial.colorFrom}, ${testimonial.colorTo});">
                    ${testimonial.initials}
                </div>
                <div style="text-align: left;">
                    <div class="testimonial-name">${testimonial.name}</div>
                    <div class="testimonial-role">${testimonial.role}</div>
                </div>
            </div>
        </div>
    `).join('');
}

function renderBlog() {
    const container = document.getElementById('blog-content');
    if (!container) return;

    container.innerHTML = SITE_DATA.blog.map((post, index) => `
        <div class="blog-card" data-aos="fade-up" data-aos-delay="${index * 100}" data-blog-id="${post.id}">
            <img src="${post.image}" alt="${post.title}" class="blog-image" />
            <div class="blog-content">
                <p class="blog-date">${post.date}</p>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <button class="blog-link" onclick="openBlogModal('${post.id}')">
                    Read More <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `).join('');
}

function renderContact() {
    const container = document.getElementById('contact-content');
    if (!container) return;

    container.innerHTML = `
        <div class="contact-info" data-aos="fade-right">
            <h3 class="contact-info-title">Get In Touch</h3>
            <p class="contact-info-text">
                I'm always excited to work on new projects and collaborate with amazing people.
                Whether you need a complete website, want to improve your existing application,
                or just have questions about web development, I'm here to help.
            </p>

            <div class="contact-items">
                <div class="contact-item">
                    <div class="contact-item-icon">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <div>
                        <div class="contact-item-label">Email</div>
                        <a href="mailto:${SITE_DATA.contact.email}" class="contact-item-value">${SITE_DATA.contact.email}</a>
                    </div>
                </div>

                <div class="contact-item">
                    <div class="contact-item-icon" style="background: rgba(34, 197, 94, 0.1); color: #22c55e;">
                        <i class="fab fa-whatsapp"></i>
                    </div>
                    <div>
                        <div class="contact-item-label">WhatsApp</div>
                        <a href="https://wa.me/${SITE_DATA.contact.whatsappLink}" class="contact-item-value">${SITE_DATA.contact.whatsapp}</a>
                    </div>
                </div>

                <div class="contact-item">
                    <div class="contact-item-icon">
                        <i class="fab fa-linkedin"></i>
                    </div>
                    <div>
                        <div class="contact-item-label">LinkedIn</div>
                        <a href="https://www.linkedin.com/in/${SITE_DATA.contact.linkedinUrl}" class="contact-item-value">${SITE_DATA.contact.linkedin}</a>
                    </div>
                </div>
            </div>
        </div>

        <form class="contact-form" id="contact-form" data-aos="fade-left">
            <input type="hidden" name="access_key" value="e9545f8c-ee5c-47ff-bc2f-47a2eeec15ff" />
            <input type="hidden" name="subject" value="New Contact Form Submission - Portfolio" />
            <input type="checkbox" name="botcheck" style="display: none;" />
            
            <div class="form-group">
                <label for="name" class="form-label">Your Name</label>
                <input type="text" id="name" name="name" required class="form-input" placeholder="Enter your full name" />
            </div>

            <div class="form-group">
                <label for="email" class="form-label">Email Address</label>
                <input type="email" id="email" name="email" required class="form-input" placeholder="your.email@example.com" />
            </div>

            <div class="form-group">
                <label for="subject" class="form-label">Subject</label>
                <input type="text" id="subject" name="subject" required class="form-input" placeholder="Project inquiry, collaboration, etc." />
            </div>

            <div class="form-group">
                <label for="message" class="form-label">Message</label>
                <textarea id="message" name="message" required class="form-input" placeholder="Tell me about your project, timeline, and requirements..."></textarea>
            </div>

            <button type="submit" class="btn btn-primary" id="contact-submit-btn" style="width: 100%;">
                <i class="fas fa-paper-plane"></i>
                <span>Send Message</span>
            </button>

            <div id="contact-form-success" style="display: none; margin-top: 1rem; padding: 1rem; background: rgba(34, 197, 94, 0.1); border: 1px solid #22c55e; border-radius: var(--radius-md); color: #22c55e; text-align: center;">
                <i class="fas fa-check-circle"></i> Message sent successfully! I'll get back to you soon.
            </div>

            <div id="contact-form-error" style="display: none; margin-top: 1rem; padding: 1rem; background: rgba(239, 68, 68, 0.1); border: 1px solid #ef4444; border-radius: var(--radius-md); color: #ef4444; text-align: center;">
                <i class="fas fa-exclamation-circle"></i> Oops! Something went wrong. Please try again.
            </div>
        </form>
    `;
}

function renderFooter() {
    const container = document.getElementById('footer-content');
    if (!container) return;

    container.innerHTML = `
        <div class="footer-brand">${SITE_DATA.footer.name}</div>
        <p class="footer-description">${SITE_DATA.footer.description}</p>

        <div class="footer-social">
            <a href="https://github.com/${SITE_DATA.footer.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i class="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/${SITE_DATA.footer.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://wa.me/${SITE_DATA.footer.whatsapp}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i class="fab fa-whatsapp"></i>
            </a>
            <a href="mailto:${SITE_DATA.footer.email}" aria-label="Email">
                <i class="fas fa-envelope"></i>
            </a>
        </div>

        <p class="footer-copyright">
            &copy; 2026 ${SITE_DATA.footer.name}. All rights reserved.
        </p>
    `;
}

// ============================================
// MODAL FUNCTIONS
// ============================================

function openProjectModal(projectId) {
    const project = SITE_DATA.projects.find(p => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById('project-modal');
    const titleEl = document.getElementById('modal-project-title');
    const bodyEl = document.getElementById('modal-project-body');

    titleEl.textContent = project.detailTitle;

    const screenshotsHTML = project.images.length > 0 ? `
        <div class="modal-section">
            <h3 class="modal-section-title"><i class="fas fa-images" style="margin-right: 8px; color: var(--primary);"></i>Project Screenshots</h3>
            <div class="modal-screenshots">
                ${project.images.map(img => `
                    <div class="modal-screenshot">
                        <img src="${img}" alt="${project.detailTitle}" loading="lazy" />
                    </div>
                `).join('')}
            </div>
        </div>
    ` : '';

    bodyEl.innerHTML = `
        <img src="${project.image}" alt="${project.detailTitle}" class="modal-image" style="cursor: pointer;" onclick="closeProjectModal(); setTimeout(() => openProjectPreview('${project.id}'), 300);" />

        <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
            <button class="btn btn-primary" onclick="closeProjectModal(); setTimeout(() => openProjectPreview('${project.id}'), 300);">
                <i class="fas fa-expand"></i>
                <span>Fullscreen Preview</span>
            </button>
        </div>

        <p class="modal-description">${project.detailDescription}</p>

        <div class="modal-section">
            <h3 class="modal-section-title"><i class="fas fa-project-diagram" style="margin-right: 8px; color: var(--primary);"></i>Project Flow</h3>
            <ol class="modal-features" style="list-style: none; counter-reset: item;">
                ${project.projectFlow.map((step, i) => `
                    <li style="counter-increment: item; position: relative; padding-left: 32px;">
                        <span style="position: absolute; left: 0; top: 2px; width: 24px; height: 24px; background: var(--primary-100); color: var(--primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700;">${i + 1}</span>
                        <span>${step}</span>
                    </li>
                `).join('')}
            </ol>
        </div>

        <div class="modal-section">
            <h3 class="modal-section-title"><i class="fas fa-star" style="margin-right: 8px; color: var(--primary);"></i>Key Features</h3>
            <ul class="modal-features">
                ${project.features.map(feature => `
                    <li>
                        <i class="fas fa-check-circle"></i>
                        <span>${feature}</span>
                    </li>
                `).join('')}
            </ul>
        </div>

        <div class="modal-section">
            <h3 class="modal-section-title"><i class="fas fa-cogs" style="margin-right: 8px; color: var(--primary);"></i>How It Works</h3>
            <p style="color: var(--text-secondary); line-height: 1.75; font-size: 0.9375rem;">${project.howItWorks}</p>
        </div>

        <div class="modal-section">
            <h3 class="modal-section-title"><i class="fas fa-code" style="margin-right: 8px; color: var(--primary);"></i>Methods & Technologies Used</h3>
            <ul class="modal-features">
                ${project.methodsUsed.map(method => `
                    <li>
                        <i class="fas fa-angle-right"></i>
                        <span>${method}</span>
                    </li>
                `).join('')}
            </ul>
        </div>

        <div class="modal-section">
            <h3 class="modal-section-title"><i class="fas fa-trophy" style="margin-right: 8px; color: var(--primary);"></i>Developer Strengths Demonstrated</h3>
            <ul class="modal-features">
                ${project.strengths.map(strength => `
                    <li>
                        <i class="fas fa-bolt"></i>
                        <span>${strength}</span>
                    </li>
                `).join('')}
            </ul>
        </div>

        <div class="modal-section">
            <h3 class="modal-section-title"><i class="fas fa-layer-group" style="margin-right: 8px; color: var(--primary);"></i>Technologies Used</h3>
            <div class="modal-tech-stack">
                ${project.techStack.map(tech => `<span>${tech.name}</span>`).join('')}
            </div>
        </div>

        ${screenshotsHTML}
    `;

    modal.classList.add('active');
    document.body.classList.add('modal-open');
}

function openBlogModal(blogId) {
    const post = SITE_DATA.blog.find(p => p.id === blogId);
    if (!post) return;

    const modal = document.getElementById('blog-modal');
    const titleEl = document.getElementById('modal-blog-title');
    const bodyEl = document.getElementById('modal-blog-body');

    titleEl.textContent = post.title;

    const contentHTML = post.content.map(para => {
        if (para.startsWith('###')) {
            return `<h3>${para.replace('### ', '')}</h3>`;
        }
        return `<p>${para}</p>`;
    }).join('');

    bodyEl.innerHTML = `
        <img src="${post.image}" alt="${post.title}" class="modal-image" />
        
        <div class="modal-blog-meta">
            <span><i class="fas fa-calendar"></i> ${post.date}</span>
            <span><i class="fas fa-tag"></i> ${post.category}</span>
            <span><i class="fas fa-clock"></i> ${post.readTime}</span>
        </div>

        <div class="modal-blog-content">
            ${contentHTML}
        </div>
    `;

    modal.classList.add('active');
    document.body.classList.add('modal-open');
}

function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
}

function closeBlogModal() {
    const modal = document.getElementById('blog-modal');
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.remove('active');
        document.body.classList.remove('modal-open');
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active').forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.classList.remove('modal-open');
    }
});

// ============================================
// MAIN RENDER FUNCTION
// ============================================

function renderAll() {
    renderNavigation();
    renderHero();
    renderAbout();
    renderSkills();
    renderExperience();
    renderEducation();
    renderServices();
    renderProjects();
    renderTestimonials();
    renderBlog();
    renderContact();
    renderFooter();
}
