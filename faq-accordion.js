// Arquivo: faq-accordion.js

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const button = item.querySelector('.faq-pergunta');
        const answer = item.querySelector('.faq-resposta');

        button.addEventListener('click', () => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true' || false;

            // Fechar todos os outros
            faqItems.forEach(otherItem => {
                const otherButton = otherItem.querySelector('.faq-pergunta');
                const otherAnswer = otherItem.querySelector('.faq-resposta');
                if (otherButton !== button && otherButton.getAttribute('aria-expanded') === 'true') {
                    otherButton.setAttribute('aria-expanded', 'false');
                    otherAnswer.setAttribute('aria-hidden', 'true');
                }
            });
            
            // Abrir ou fechar o item clicado
            button.setAttribute('aria-expanded', !isExpanded);
            answer.setAttribute('aria-hidden', isExpanded);
        });
    });

    if (faqItems.length > 0) {
        console.log("FAQ Accordion: Lógica de acordeão inicializada.");
    }
});
