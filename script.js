// DOM Elements
const loadingScreen = document.getElementById('loading-screen');
const header = document.getElementById('header');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const backToTopBtn = document.getElementById('back-to-top');
const contactForm = document.getElementById('contact-form');

// Services Data
const servicesData = [
    {
        icon: 'fas fa-share-alt',
        title: 'Gerenciamento de Redes Sociais',
        description: 'Criação de conteúdo, estratégias de engajamento e crescimento orgânico nas principais plataformas sociais.',
        features: ['Criação de conteúdo', 'Estratégia de posting', 'Análise de métricas', 'Gestão de comunidade']
    },
    {
        icon: 'fas fa-bullseye',
        title: 'Tráfego Pago',
        description: 'Campanhas publicitárias otimizadas no Google Ads, Facebook Ads e outras plataformas para maximizar ROI.',
        features: ['Google Ads', 'Facebook/Instagram Ads', 'Otimização de ROI', 'Remarketing']
    },
    {
        icon: 'fas fa-camera',
        title: 'Fotos e Vídeos Profissionais',
        description: 'Produção audiovisual completa para elevar a qualidade visual da sua marca e engajar sua audiência.',
        features: ['Fotografia profissional', 'Vídeos institucionais', 'Conteúdo para redes', 'Edição avançada']
    },
    {
        icon: 'fas fa-desktop',
        title: 'Landing Pages',
        description: 'Páginas de conversão otimizadas para maximizar seus resultados e transformar visitantes em clientes.',
        features: ['Design responsivo', 'Alta conversão', 'A/B testing', 'Analytics integrado']
    },
    {
        icon: 'fas fa-file-alt',
        title: 'Sites Catálogos',
        description: 'Sites profissionais que apresentam seus produtos e serviços de forma atrativa e organizada.',
        features: ['Design moderno', 'Catálogo digital', 'Sistema de busca', 'Mobile-first']
    },
    {
        icon: 'fas fa-map-marker-alt',
        title: 'Posicionamento Estratégico',
        description: 'Definição da identidade única da sua marca e posicionamento competitivo no mercado.',
        features: ['Análise de mercado', 'Identidade de marca', 'Diferenciação', 'Estratégia competitiva']
    },
    {
        icon: 'fas fa-palette',
        title: 'Criativos Digitais',
        description: 'Peças gráficas impactantes para suas campanhas digitais e redes sociais.',
        features: ['Identidade visual', 'Posts para redes', 'Banners digitais', 'Animações']
    },
    {
        icon: 'fas fa-credit-card',
        title: 'Cartões de Visita',
        description: 'Cartões de visita elegantes e profissionais que causam uma primeira impressão marcante.',
        features: ['Design exclusivo', 'Impressão premium', 'QR Code', 'Acabamento especial']
    },
    {
        icon: 'fas fa-bullhorn',
        title: 'Panfletos e Flyers',
        description: 'Material gráfico impresso para suas campanhas offline e eventos promocionais.',
        features: ['Design criativo', 'Impressão de qualidade', 'Formatos variados', 'Entrega rápida']
    }
];

// Portfolio Data
const portfolioData = [
    {
        title: 'E-commerce Fashion',
        category: 'Landing Page',
        description: 'Página de conversão para loja de moda online com aumento de 150% nas vendas.',
        image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg'
    },
    {
        title: 'Restaurante Gourmet',
        category: 'Redes Sociais',
        description: 'Gestão completa das redes sociais com crescimento de 300% no engajamento.',
        image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg'
    },
    {
        title: 'Clínica Médica',
        category: 'Site Catálogo',
        description: 'Site institucional moderno com sistema de agendamento online integrado.',
        image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg'
    },
    {
        title: 'Startup Tech',
        category: 'Tráfego Pago',
        description: 'Campanha de Google Ads que gerou 200% de ROI em 3 meses.',
        image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg'
    },
    {
        title: 'Academia Fitness',
        category: 'Identidade Visual',
        description: 'Criação completa de identidade visual e materiais promocionais.',
        image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg'
    },
    {
        title: 'Consultoria Empresarial',
        category: 'Consultoria Digital',
        description: 'Estratégia digital completa que triplicou a geração de leads qualificados.',
        image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg'
    }
];

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1500);
    
    // Initialize components
    initNavigation();
    initScrollEffects();
    initAnimations();
    initCounters();
    initServices();
    initPortfolio();
    initContactForm();
    initBackToTop();
});

// Navigation
function initNavigation() {
    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Scroll Effects
function initScrollEffects() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        // Header background on scroll
        if (scrolled > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Update active navigation link
        updateActiveNavLink();
        
        // Animate elements on scroll
        animateOnScroll();
    });
}

// Update Active Navigation Link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Animate on Scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .portfolio-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
}

// Initialize Animations
function initAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements
    const elementsToAnimate = document.querySelectorAll('.section-header, .about-content, .contact-content');
    elementsToAnimate.forEach(el => observer.observe(el));
}

// Initialize Counters
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    const countUp = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(() => countUp(counter), 1);
        } else {
            counter.innerText = target;
        }
    };
    
    // Start counters when hero section is visible
    const heroObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => {
                    counter.innerText = '0';
                    countUp(counter);
                });
                heroObserver.disconnect();
            }
        });
    });
    
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroObserver.observe(heroSection);
    }
}

// Initialize Services
function initServices() {
    const servicesGrid = document.getElementById('services-grid');
    
    servicesData.forEach((service, index) => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.style.animationDelay = `${index * 0.1}s`;
        
        serviceCard.innerHTML = `
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3 class="service-title">${service.title}</h3>
            <p class="service-description">${service.description}</p>
            <ul class="service-features">
                ${service.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <a href="#contato" class="service-link">
                Saiba mais <i class="fas fa-arrow-right"></i>
            </a>
        `;
        
        servicesGrid.appendChild(serviceCard);
    });
}

// Initialize Portfolio
function initPortfolio() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    
    portfolioData.forEach((item, index) => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.style.animationDelay = `${index * 0.1}s`;
        
        portfolioItem.innerHTML = `
            <div class="portfolio-image">
                <img src="${item.image}" alt="${item.title}" loading="lazy">
                <div class="portfolio-overlay">
                    <i class="fas fa-eye"></i>
                </div>
            </div>
            <div class="portfolio-content">
                <div class="portfolio-category">${item.category}</div>
                <h3 class="portfolio-title">${item.title}</h3>
                <p class="portfolio-description">${item.description}</p>
            </div>
        `;
        
        portfolioGrid.appendChild(portfolioItem);
    });
}

// Initialize Contact Form
function initContactForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                // Show success message
                showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                
                // Reset labels
                const labels = contactForm.querySelectorAll('label');
                labels.forEach(label => {
                    label.style.top = '1rem';
                    label.style.fontSize = '1rem';
                    label.style.color = 'rgba(255, 255, 255, 0.7)';
                });
            }, 2000);
        });
        
        // Form field animations
        const formInputs = contactForm.querySelectorAll('input, select, textarea');
        formInputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                if (!this.value) {
                    this.parentElement.classList.remove('focused');
                }
            });
        });
    }
}

// Initialize Back to Top Button
function initBackToTop() {
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Utility Functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = header.offsetHeight;
        const sectionTop = section.offsetTop - headerHeight;
        
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#6366f1'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
        font-weight: 500;
    `;
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetTop = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // Escape key closes mobile menu
    if (e.key === 'Escape') {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounced scroll handler
const debouncedScrollHandler = debounce(function() {
    updateActiveNavLink();
    animateOnScroll();
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', initLazyLoading);

// Error handling for images
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.style.display = 'none';
        console.warn('Image failed to load:', e.target.src);
    }
}, true);

// Service worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment if you want to add PWA capabilities
        // navigator.serviceWorker.register('/sw.js');
    });
}