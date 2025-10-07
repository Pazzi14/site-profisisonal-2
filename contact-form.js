// Arquivo: contact-form.js

document.addEventListener('DOMContentLoaded', function() {
    /**
     * Simula o envio de qualquer formulário no site e mostra feedback.
     * Em um ambiente real, este código seria substituído por uma chamada de API (Fetch)
     * para um backend (serviço de email ou CRM).
     */
    window.handleFormSubmit = function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        
        const form = event.target;
        // Determina qual feedback mostrar (para home ou contato)
        const feedbackElementId = form.id === 'contactForm' ? 'form-feedback' : 'form-feedback-home';
        const feedbackElement = document.getElementById(feedbackElementId);
        
        // Coleta de dados (apenas para exibição no console)
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => data[key] = value);
        
        feedbackElement.style.display = 'block';
        feedbackElement.style.color = 'var(--azul-profundo)';
        feedbackElement.textContent = 'Enviando...';

        console.log(`Dados do Formulário (${form.id} - Simulação):`, data);

        // Simulação de atraso de rede
        setTimeout(() => {
            // Simulação de sucesso
            feedbackElement.style.color = 'var(--verde-menta)';
            feedbackElement.innerHTML = '<i class="fas fa-check-circle"></i> Mensagem enviada com sucesso! Entraremos em contato em breve.';
            
            form.reset(); // Limpa o formulário após o "envio"

            // Rastreamento de conversão (Exemplo)
            if (typeof gtag === 'function') { 
                gtag('event', 'envio_formulario', {'event_category': 'contato','event_label': form.id});
            }
            if (typeof fbq === 'function') { 
                fbq('track', 'Lead'); 
            }

        }, 2000); 
    }
    
    console.log("Contact Form: Lógica de simulação de envio inicializada.");
});
