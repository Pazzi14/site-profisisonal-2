// Arquivo: scroll-animations.js

// Inicialização e Propriedades Padrão do ScrollReveal
if (typeof ScrollReveal !== 'undefined') {
    const defaultProps = {
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        distance: '60px',
        duration: 800,
        delay: 0,
        opacity: 0,
        mobile: false // Desabilitado em mobile para otimizar desempenho
    };

    // Aplica as animações para a HOME (index.html)
    ScrollReveal().reveal('.hero-titulo, .hero-subtitulo', { ...defaultProps, origin: 'top', delay: 200, interval: 100 });
    ScrollReveal().reveal('.hero-tag, .btn-hero', { ...defaultProps, origin: 'bottom', delay: 400, interval: 100 });

    ScrollReveal().reveal('.secao-titulo, .secao-subtitulo', { ...defaultProps, origin: 'bottom', distance: '30px', delay: 100, viewFactor: 0.1 });
    ScrollReveal().reveal('.card', { ...defaultProps, origin: 'bottom', distance: '30px', interval: 150, viewFactor: 0.1 });

    ScrollReveal().reveal('.cta-secundario-content', { ...defaultProps, origin: 'left', distance: '40px', delay: 100, viewFactor: 0.2 });
    ScrollReveal().reveal('.cta-beneficios li', { ...defaultProps, origin: 'right', interval: 100, delay: 300, viewFactor: 0.2 });

    ScrollReveal().reveal('.form-layout .form-text-content', { ...defaultProps, origin: 'left', distance: '40px', delay: 100, viewFactor: 0.2 });
    ScrollReveal().reveal('.form-interesse-home', { ...defaultProps, origin: 'right', distance: '40px', delay: 300, viewFactor: 0.2 });

    ScrollReveal().reveal('.depoimento-card', { ...defaultProps, origin: 'bottom', distance: '30px', interval: 150, viewFactor: 0.1 });

    ScrollReveal().reveal('.cta-final-content', { ...defaultProps, origin: 'bottom', distance: '50px', delay: 100, viewFactor: 0.1 });


    // --- Animações da Página Tratamentos (tratamentos.html) ---
    ScrollReveal().reveal('.tratamento-layout > div', { ...defaultProps, origin: 'left', distance: '50px', delay: 100, interval: 200, viewFactor: 0.1 });

    // --- Animações da Página Quem Somos (quem-somos.html) ---
    ScrollReveal().reveal('.bio-image-container', { ...defaultProps, origin: 'left', distance: '50px', delay: 200, viewFactor: 0.1 });
    ScrollReveal().reveal('.bio-text-content', { ...defaultProps, origin: 'right', distance: '50px', delay: 300, viewFactor: 0.1 });
    ScrollReveal().reveal('.diferencial-item', { ...defaultProps, origin: 'bottom', distance: '30px', interval: 150, viewFactor: 0.1 });
    
    // --- Animações da Página FAQ (faq.html) ---
    ScrollReveal().reveal('.faq-item', { ...defaultProps, origin: 'bottom', distance: '20px', interval: 100, viewFactor: 0.1 });

    // --- Animações da Página Contato (contato.html) ---
    ScrollReveal().reveal('.info-card', { 
        ...defaultProps, 
        origin: 'bottom', 
        distance: '30px', 
        interval: 100,
        viewFactor: 0.1
    });
    ScrollReveal().reveal('.form-container', { ...defaultProps, origin: 'left', distance: '50px', delay: 200, viewFactor: 0.1 });
    ScrollReveal().reveal('.mapa-container', { ...defaultProps, origin: 'right', distance: '50px', delay: 300, viewFactor: 0.1 });

    // --- Animações da Página Política de Privacidade (politica-privacidade.html) ---
    ScrollReveal().reveal('.politica-content h2, .politica-content h3', { 
        ...defaultProps, 
        origin: 'left', 
        distance: '30px',
        delay: 150, 
        viewFactor: 0.1 
    });
    ScrollReveal().reveal('.politica-content p, .politica-content ul', { 
        ...defaultProps, 
        origin: 'bottom', 
        distance: '20px', 
        delay: 200, 
        interval: 50, 
        viewFactor: 0.1
    });

    console.log("ScrollReveal: Animações inicializadas.");
}
