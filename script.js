// --- 1. LÓGICA DE UI (Menu Mobile e Cookies) ---

document.addEventListener('DOMContentLoaded', function() {
    // Lógica de Menu Mobile
    const menuBtn = document.querySelector('.menu-mobile-btn');
    const menu = document.querySelector('.menu-desktop');

    if (menuBtn && menu) {
        menuBtn.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }

    // Lógica de Cookies
    const cookieBanner = document.getElementById('cookie-banner');
    
    // Verifica o estado do consentimento no carregamento
    if (cookieBanner) {
        if (localStorage.getItem('cookieConsent') !== 'true') {
            cookieBanner.style.display = 'flex';
        } else {
            cookieBanner.style.display = 'none';
        }
    }
});

// Função global para aceitar cookies (chamada pelo botão no HTML)
window.aceitarCookies = function() {
    localStorage.setItem('cookieConsent', 'true');
    const cookieBanner = document.getElementById('cookie-banner');
    if (cookieBanner) cookieBanner.style.display = 'none';
}

// --- 2. LÓGICA DO ACORDEÃO FAQ ---
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.faq-pergunta');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);
            const isExpanded = button.getAttribute('aria-expanded') === 'true';

            // Fecha todos os outros itens (efeito acordeão)
            document.querySelectorAll('.faq-pergunta').forEach(btn => {
                if (btn !== button) {
                    btn.setAttribute('aria-expanded', 'false');
                    const otherTarget = document.getElementById(btn.getAttribute('data-target'));
                    if (otherTarget) {
                        otherTarget.style.maxHeight = '0';
                        otherTarget.style.paddingTop = '0';
                        otherTarget.style.paddingBottom = '0';
                    }
                }
            });

            // Alterna o estado do item clicado
            button.setAttribute('aria-expanded', !isExpanded);
            
            if (!isExpanded && targetElement) {
                // Abre o item
                targetElement.style.maxHeight = targetElement.scrollHeight + "px";
                targetElement.style.paddingTop = "10px"; // Aplica padding ao abrir
                targetElement.style.paddingBottom = "10px";
            } else if (targetElement) {
                // Fecha o item
                targetElement.style.maxHeight = '0';
                targetElement.style.paddingTop = '0';
                targetElement.style.paddingBottom = '0';
            }
        });
    });
});

// --- 3. LÓGICA DE RASTREAMENTO (TRACKING) ---
document.addEventListener('DOMContentLoaded', function() {
    const ctaFixo = document.getElementById('ctaFixo'); 

    if (ctaFixo) {
        ctaFixo.addEventListener('click', function() {
            console.log("Evento de rastreamento de clique no WhatsApp disparado...");
            
            // 1. Envia o evento de conversão para o GOOGLE ADS/GA4
            if (typeof gtag === 'function') { 
                gtag('event', 'clique_whatsapp', {
                    'event_category': 'contato',
                    'event_label': 'cta_fixo',
                    'value': 1
                });
                console.log("Rastreamento Google: Evento 'clique_whatsapp' enviado.");
            } 

            // 2. Envia o evento de conversão para o META PIXEL (Facebook/Instagram)
            if (typeof fbq === 'function') { 
                fbq('track', 'Contact'); 
                console.log("Rastreamento Meta/Facebook: Evento 'Contact' enviado.");
            }
        });
    }
});

// --- 4. ANIMAÇÕES DE SCROLL (ScrollReveal) ---
document.addEventListener('DOMContentLoaded', function() {
    if (typeof ScrollReveal === 'undefined') {
        console.error("ScrollReveal não está carregado. A funcionalidade de animação não funcionará.");
        return;
    }

    const defaultProps = {
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        distance: '50px',
        duration: 1000,
        delay: 0,
        scale: 1,
        viewFactor: 0.1
    };

    // Animação para a Home Page
    ScrollReveal().reveal('.hero-content h1', { ...defaultProps, origin: 'bottom', delay: 100 });
    ScrollReveal().reveal('.hero-content p', { ...defaultProps, origin: 'bottom', delay: 300 });
    ScrollReveal().reveal('#diferenciais-secao h2', { ...defaultProps, origin: 'top' });
    ScrollReveal().reveal('.diferencial-item', { ...defaultProps, origin: 'bottom', interval: 150 });
    ScrollReveal().reveal('#depoimentos-secao h2', { ...defaultProps, origin: 'top' });
    ScrollReveal().reveal('.depoimento-card', { ...defaultProps, origin: 'left', interval: 200, delay: 100 });
    ScrollReveal().reveal('.faq-resumido-secao h2', { ...defaultProps, origin: 'top' });
    ScrollReveal().reveal('.faq-item', { ...defaultProps, origin: 'bottom', interval: 100 });

    console.log("ScrollReveal: Animações configuradas.");
});

// --- 5. LÓGICA 3D (THREE.JS) ---

const PRIMARY_COLOR = 0x004c6d; // Azul Profundo
const ACCENT_COLOR = 0x66b8a7;  // Verde Menta

let scene, camera, renderer, particles, particleSystem, lineSegments;
const particleCount = 200;
const particlePositions = new Float32Array(particleCount * 3);
const maxDistance = 1.5;

function init() {
    const container = document.getElementById('hero-3d-background');
    if (!container || typeof THREE === 'undefined') return;

    // Cena
    scene = new THREE.Scene();

    // Câmera
    camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.z = 5;

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Criação das Partículas
    const particleGeometry = new THREE.BufferGeometry();
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
        particlePositions[i * 3] = (Math.random() - 0.5) * 8;
        particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 8;
        particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 8;

        const color = new THREE.Color(PRIMARY_COLOR);
        particleColors[i * 3] = color.r;
        particleColors[i * 3 + 1] = color.g;
        particleColors[i * 3 + 2] = color.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });

    particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // Criação dos Segmentos de Linha (Conexões)
    const lineGeometry = new THREE.BufferGeometry();
    const lineMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending
    });
    lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineSegments);
}

function animate() {
    if (!renderer) return;
    requestAnimationFrame(animate);

    const positions = particleSystem.geometry.attributes.position.array;
    const time = Date.now() * 0.0001;

    // Movimento sutil das partículas
    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += Math.sin(time + i * 0.1) * 0.005;
        positions[i * 3 + 1] += Math.cos(time + i * 0.15) * 0.005;
        positions[i * 3 + 2] += Math.sin(time + i * 0.2) * 0.005;

        // "Empurra" as partículas de volta quando saem dos limites (movimento de caixa)
        if (positions[i * 3] > 4 || positions[i * 3] < -4) positions[i * 3] *= -0.99;
    }
    particleSystem.geometry.attributes.position.needsUpdate = true;

    updateLines();

    // Rotação suave da câmera
    camera.rotation.y += 0.0005;
    camera.rotation.x += 0.0002;

    renderer.render(scene, camera);
}

function updateLines() {
    const positions = particleSystem.geometry.attributes.position.array;
    const points = [];
    const colors = [];
    const colorA = new THREE.Color(PRIMARY_COLOR);
    const colorB = new THREE.Color(ACCENT_COLOR);

    for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
            const dx = positions[i * 3] - positions[j * 3];
            const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
            const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
            const distanceSq = dx * dx + dy * dy + dz * dz;

            if (distanceSq < maxDistance * maxDistance) {
                points.push(
                    new THREE.Vector3(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]),
                    new THREE.Vector3(positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2])
                );

                const alpha = distanceSq / (maxDistance * maxDistance);
                const color = colorA.clone().lerp(colorB, 1 - alpha);

                colors.push(color.r, color.g, color.b);
                colors.push(color.r, color.g, color.b);
            }
        }
    }

    lineSegments.geometry.setFromPoints(points);
    lineSegments.geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    lineSegments.geometry.attributes.position.needsUpdate = true;
    lineSegments.geometry.attributes.color.needsUpdate = true;
}

function onWindowResize() {
    const container = document.getElementById('hero-3d-background');
    if (!container || !camera || !renderer) return;

    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
}

// Inicia o processo no carregamento da janela
window.addEventListener('load', () => {
    if (document.getElementById('hero-3d-background')) {
        init();
        // Apenas inicia a animação se o init foi bem-sucedido (renderer existe)
        if (renderer) {
            animate();
            window.addEventListener('resize', onWindowResize);
        }
    }
});
