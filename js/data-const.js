// ============================================
// DATA CONSTANTS
// ============================================

const SITE_DATA = {
    nav: {
        name: "Muhammad Muzzamil",
        links: [
            { label: "Home", href: "#home" },
            { label: "About", href: "#about" },
            { label: "Skills", href: "#skills" },
            { label: "Experience", href: "#experience" },
            { label: "Services", href: "#services" },
            { label: "Projects", href: "#projects" },
            { label: "Testimonials", href: "#testimonials" },
            { label: "Blog", href: "#blog" },
            { label: "Contact", href: "#contact" }
        ]
    },

    hero: {
        greeting: "Hello, I'm",
        firstName: "Muhammad",
        lastName: "Muzzamil",
        typedStrings: [
            "Software Engineer",
            "Angular Developer",
            "Full-Stack Web Developer",
            "Healthcare Systems Specialist",
            "Performance Optimizer"
        ],
        description: "Dedicated Software Engineer with 2+ years of experience specializing in Angular-based front-end development for scalable web applications, particularly in healthcare systems. Building high-performance, user-centric dashboards and enterprise-grade platforms.",
        email: "mohammadmuzzamil7770@gmail.com",
        whatsapp: "+923068667770",
        linkedin: "mohammadmuzzamil7770",
        profileImage: "img/MUZZAMIL.png"
    },

    about: {
        title: "Software Engineer & Angular Developer",
        description1: "I'm Muhammad Muzzamil, a dedicated Software Engineer with 2+ years of experience specializing in Angular-based front-end development for scalable web applications, particularly in healthcare systems. Currently working as an Angular Developer at Anchors Tech, building high-performance, user-centric dashboards and enterprise-grade platforms.",
        description2: "My strong expertise spans TypeScript, modern UI architecture, REST API integration, with a focus on performance optimization, clean code, and seamless user experience. I'm experienced in integrating third-party services including Stripe, Firebase, and authentication systems.",
        stats: [
            { value: "20+", label: "Projects Completed" },
            { value: "2+", label: "Years Experience" },
            { value: "Healthcare", label: "Domain Expertise" },
            { value: "90%+", label: "Lighthouse Scores" }
        ],
        profileImage: "img/MUZZAMIL.png"
    },

    skills: [
        { name: "HTML/CSS", level: 100 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 85 },
        { name: "Angular", level: 95 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Bootstrap", level: 95 }
    ],

    experience: [
        {
            title: "Angular Developer",
            company: "Anchors Tech",
            location: "Johar Town, Lahore, Punjab, Pakistan",
            period: "Jul 2024 - Present",
            description: "Developed a healthcare management dashboard with appointment scheduling, patient records, multi-location booking, and insurance integration using Angular 19. Built real estate platforms with Figma-to-code conversion, interactive Mapbox maps, multi-step forms, and dynamic PDF generation. Implemented reusable components, Angular Material UI, JWT authentication, Firebase integration, and real-time notifications with Socket.io. Optimized application performance, achieving 90%+ Lighthouse scores and integrated AI chatbots with n8n automation workflows."
        },
        {
            title: "Angular Developer (3-month Internship)",
            company: "Anchors Tech",
            location: "Johar Town, Lahore, Punjab, Pakistan",
            period: "Mar 2024 - Jul 2024",
            description: "Developed responsive web applications using Angular, TypeScript, and Bootstrap with a focus on clean architecture and reusable components. Converted Figma wireframes into pixel-perfect UIs and integrated REST APIs for dynamic data handling. Collaborated in Agile workflows, performed unit testing, and used Git/GitHub for version control."
        },
        {
            title: "Front-End Developer",
            company: "AlphaNuix Technologies",
            location: "Layyah, Punjab, Pakistan",
            period: "Mar 2023 - Jul 2024",
            description: "Developed responsive web applications using React and TypeScript, focusing on modern UI patterns. Built reusable components and integrated REST APIs for seamless data flow. Collaborated with backend teams (PHP/MySQL) to deliver full-stack features. Performed debugging, testing, and cross-browser optimization."
        }
    ],

    education: [
        {
            degree: "Bachelor of Science in Information Technology (BS IT)",
            institution: "Government College University Faisalabad (GCUF)",
            grade: "CGPA: 3.4",
            period: "Sep 2020 - Sep 2024",
            description: "Comprehensive study in web development, software engineering, and modern programming paradigms. Specialized in frontend technologies, database management, and system design. Graduated with strong foundation in both theoretical concepts and practical application development, with focus on Angular, React, and full-stack development."
        }
    ],

    services: [
        {
            icon: "fas fa-code",
            title: "Responsive Web Development",
            description: "Creating fully responsive websites using HTML5, CSS3, and modern frameworks like Bootstrap and Tailwind CSS for optimal display across all devices and screen sizes."
        },
        {
            icon: "fab fa-react",
            title: "React & Angular Development",
            description: "Building dynamic single-page applications using React.js and Angular with component-based architecture, efficient state management, and seamless user experiences."
        },
        {
            icon: "fas fa-database",
            title: "API & Firebase Integration",
            description: "Integrating RESTful APIs and Firebase services including Authentication, Firestore, and Hosting to enhance app functionality and deliver real-time experiences."
        },
        {
            icon: "fas fa-paint-brush",
            title: "UI/UX Design Implementation",
            description: "Transforming design mockups into pixel-perfect, interactive interfaces that prioritize usability, accessibility, and visual appeal across all platforms."
        },
        {
            icon: "fas fa-rocket",
            title: "Performance Optimization",
            description: "Enhancing website performance through code optimization, lazy loading, image compression, and implementing SEO best practices for better search rankings."
        },
        {
            icon: "fab fa-git-alt",
            title: "Version Control & Collaboration",
            description: "Efficient code management using Git and GitHub for seamless collaboration, version tracking, and continuous integration workflows in team environments."
        }
    ],

    projects: [
        {
            id: "project1",
            title: "Stepping Stone Therapy | Pathways EHR",
            description: "Full-featured medical practice management system with clinician availability, appointment scheduling, patient records, multi-location booking, insurance integration, and real-time notifications.",
            image: "img/Stepping Stone Therapy (Case Study Design) n.png",
            techs: ["Angular 19", "TypeScript", "Firebase", "Socket.io"],
            detailTitle: "Stepping Stone Therapy",
            detailDescription: "A comprehensive HIPAA-compliant healthcare management system designed for therapy practices. Features include appointment scheduling, patient information management, clinical notes, ICD-10 diagnosis coding, and automated discharge summaries.",
            features: [
                "HIPAA-compliant data handling",
                "Appointment management system",
                "Patient information database",
                "Clinical notes and documentation",
                "ICD-10 diagnosis integration",
                "Automated discharge summaries"
            ],
            techStack: [
                { name: "Angular 19", color: "red" },
                { name: "TypeScript", color: "blue" },
                { name: "Laravel", color: "purple" },
                { name: "MySQL", color: "green" },
                { name: "RESTful APIs", color: "yellow" },
                { name: "Material Design", color: "pink" }
            ],
            images: [
                "img/Stepping Stone Therapy (Case Study Design) n.png",
                "img/Stepping Stone Therapy (Case Study Design) (1).png"
            ]
        },
        {
            id: "project2",
            title: "FirstCall | TeleHealth EHR",
            description: "Multi-role healthcare platform with patient management, appointments, encounters, analytics modules, role-based access control, and secure authentication with custom guards and interceptors.",
            image: "img/Telemedix.png",
            techs: ["Angular 19", "RxJS", "Chart.js", "Firebase"],
            detailTitle: "Comunitus Video Platform",
            detailDescription: "A comprehensive telemedicine platform enabling healthcare providers to upload educational videos, manage patient subscriptions, issue e-prescriptions, and maintain verified professional profiles with integrated payment processing.",
            features: [
                "Doctor video content management",
                "Patient subscription system",
                "E-prescription functionality",
                "Verified doctor profiles",
                "Stripe payment integration",
                "HIPAA compliance"
            ],
            techStack: [
                { name: "Angular", color: "red" },
                { name: "TypeScript", color: "blue" },
                { name: "Laravel", color: "purple" },
                { name: "MySQL", color: "green" },
                { name: "Stripe API", color: "yellow" },
                { name: "Video Processing", color: "pink" }
            ],
            images: [
                "img/com1.png",
                "img/com2.png",
                "img/com3.png",
                "img/com4.png",
                "img/com6.png",
                "img/com7.png",
                "img/com8.png"
            ]
        },
        {
            id: "project3",
            title: "SNF Wound Care – EMR & Telemedicine",
            description: "HIPAA-compliant EMR platform serving 12,000+ patients across 178 skilled nursing facilities with video consultation, wound image tracking, and PCC/MatrixCare EMR integration.",
            image: "img/SNF Wound Care (Case Study Design).png",
            techs: ["React", "Laravel", "MySQL", "HIPAA"],
            detailTitle: "Medical Athlete E-commerce",
            detailDescription: "A modern, responsive e-commerce website designed for medical and athletic products. Features interactive product galleries, smooth animations, mobile-first design, and optimized user experience across all devices.",
            features: [
                "Mobile-first responsive design",
                "Interactive product galleries",
                "Dynamic image sliders",
                "Intuitive shopping experience",
                "Advanced product filtering",
                "Optimized performance"
            ],
            techStack: [
                { name: "HTML5", color: "orange" },
                { name: "CSS3", color: "blue" },
                { name: "JavaScript", color: "yellow" },
                { name: "Bootstrap", color: "purple" },
                { name: "jQuery", color: "green" },
                { name: "Responsive Design", color: "red" }
            ],
            images: [
                "img/modav.jpeg"
            ]
        }
    ],

    testimonials: [
        {
            quote: "Mohammad delivered exceptional work with clean, fast, and responsive design. His attention to detail and professional approach exceeded our expectations.",
            initials: "SW",
            name: "Sarah Williams",
            role: "Healthcare Director",
            colorFrom: "#3b82f6",
            colorTo: "#8b5cf6"
        },
        {
            quote: "Outstanding design sense and lightning-fast delivery. Mohammad's technical expertise and communication skills make him a pleasure to work with.",
            initials: "DK",
            name: "David Kim",
            role: "Tech Startup CEO",
            colorFrom: "#22c55e",
            colorTo: "#3b82f6"
        },
        {
            quote: "Reliable, skilled, and professional. The website turned out perfect and our user engagement has increased significantly since the launch.",
            initials: "PN",
            name: "Priya Nair",
            role: "E-commerce Manager",
            colorFrom: "#a855f7",
            colorTo: "#ec4899"
        }
    ],

    blog: [
        {
            id: "blog-post1",
            title: "Tailwind CSS: Build Fast & Clean UIs in 2025",
            date: "August 1, 2025",
            category: "Tutorial",
            categoryColor: "bg-blue-500",
            image: "img/pngwing.com.png",
            excerpt: "Discover why Tailwind CSS remains the fastest way to build responsive, maintainable user interfaces with modern development practices.",
            readTime: "5 min read",
            content: [
                "Tailwind CSS continues to revolutionize how developers approach styling in 2025. Its utility-first methodology has proven to be not just a trend, but a fundamental shift in how we think about CSS architecture and maintainability.",
                "### Why Tailwind Still Dominates",
                "The utility-first approach reduces custom CSS bloat and keeps your codebase clean and predictable. With Tailwind, you're writing less custom CSS and more semantic, reusable utility classes that scale beautifully across large applications.",
                "### Best Practices for 2025",
                "Combine Tailwind with modern frameworks like React or Angular to build scalable component libraries. Use PostCSS plugins and PurgeCSS to keep build sizes minimal while maintaining design consistency across your entire application.",
                "If you're prioritizing development speed, design consistency, and long-term maintainability—Tailwind CSS remains the unmatched choice for modern web development."
            ]
        },
        {
            id: "blog-post2",
            title: "React or Angular in 2025? A Developer's Guide",
            date: "July 15, 2025",
            category: "Comparison",
            categoryColor: "bg-purple-500",
            image: "img/angular-react.png",
            excerpt: "A comprehensive comparison to help developers choose the right frontend framework for their next project based on real-world scenarios.",
            readTime: "8 min read",
            content: [
                "The eternal debate continues: React or Angular? In 2025, both frameworks have evolved significantly, each offering unique advantages for different project requirements and team dynamics.",
                "### React: Flexibility and Ecosystem",
                "React's strength lies in its flexibility and massive ecosystem. With its component-based architecture and virtual DOM, React excels in rapid prototyping, startup environments, and projects requiring custom solutions. The learning curve is gentler, making it ideal for teams transitioning to modern frameworks.",
                "### Angular: Structure and Enterprise Features",
                "Angular provides a complete toolkit with built-in features like routing, forms, HTTP client, and dependency injection. It's perfect for large-scale enterprise applications where structure, type safety, and comprehensive tooling are priorities.",
                "### Making the Right Choice",
                "Choose React for flexibility, rapid development, and smaller to medium-sized projects. Choose Angular for enterprise applications, large teams, and projects requiring comprehensive built-in features. The best choice ultimately depends on your team's expertise, project scale, and long-term maintenance requirements."
            ]
        },
        {
            id: "blog-post3",
            title: "Web Performance: Speed Matters More Than Ever",
            date: "June 30, 2025",
            category: "Performance",
            categoryColor: "bg-green-500",
            image: "img/download.png",
            excerpt: "Essential techniques for optimizing website performance, improving Core Web Vitals, and delivering exceptional user experiences.",
            readTime: "6 min read",
            content: [
                "In 2025, web performance isn't just about user experience—it's a critical factor for SEO rankings, conversion rates, and overall business success. Users expect lightning-fast experiences, and search engines reward sites that deliver them.",
                "### Core Web Vitals and Beyond",
                "Focus on optimizing Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS). Use tools like Lighthouse, PageSpeed Insights, and Web Vitals extension to monitor and improve these metrics continuously.",
                "### Modern Optimization Techniques",
                "Implement lazy loading for images and components, use code splitting to reduce initial bundle sizes, and leverage modern image formats like WebP and AVIF. Consider using CDNs and edge computing for global performance improvements.",
                "### The Business Impact",
                "Better performance directly translates to improved user engagement, higher conversion rates, and better search engine rankings. In today's competitive digital landscape, performance optimization isn't optional—it's essential for business success."
            ]
        }
    ],

    contact: {
        title: "Let's Work Together",
        subtitle: "Ready to bring your ideas to life? Let's discuss your project and create something amazing together.",
        email: "mohammadmuzzamil7770@gmail.com",
        whatsapp: "+92 306 8667770",
        whatsappLink: "+923068667770",
        linkedin: "Muhammad Muzzamil",
        linkedinUrl: "muzzamil-dev"
    },

    footer: {
        name: "Muhammad Muzzamil",
        description: "Software Engineer specializing in Angular-based front-end development for scalable web applications, particularly in healthcare systems. Building high-performance, user-centric dashboards and enterprise-grade platforms.",
        github: "muzzamil7770",
        linkedin: "muzzamil-dev",
        whatsapp: "+923068667770",
        email: "mohammadmuzzamil7770@gmail.com"
    }
};