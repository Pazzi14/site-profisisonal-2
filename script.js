// Arquivo: script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Menu Mobile Toggle
    const menuButton = document.querySelector('.menu-mobile-btn');
    const menu = document.querySelector('.menu-desktop');

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('open');
        const isExpanded = menu.classList.contains('open');
        menuButton.setAttribute('aria-expanded', isExpanded);
    });

    // 2. Lógica do Banner de Cookies
    const cookieBanner = document.getElementById('cookie-banner');
    const cookieAccepted = localStorage.getItem('cookieAccepted');

    if (!cookieAccepted) {
        // Exibe o banner após um pequeno atraso para não atrapalhar o carregamento inicial
        setTimeout(() => {
            cookieBanner.style.display = 'flex';
        }, 1000);
    }

    window.aceitarCookies = function() {
        localStorage.setItem('cookieAccepted', 'true');
        cookieBanner.style.display = 'none';

        // Opcional: Aqui você pode iniciar scripts de tracking que dependem de consentimento (ex: Google Analytics)
        console.log("Cookies aceitos. Rastreamento habilitado.");
    }
});
