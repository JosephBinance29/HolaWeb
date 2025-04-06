// form.js - Manejo de formularios

document.addEventListener('DOMContentLoaded', function() {
    // Formulario de contacto
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación de campos
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            const nameError = document.getElementById('name-error');
            const emailError = document.getElementById('email-error');
            const messageError = document.getElementById('message-error');
            const successMessage = document.getElementById('form-success');
            
            let isValid = true;
            
            // Validar nombre
            if (!nameInput.value.trim()) {
                nameError.classList.remove('hidden');
                isValid = false;
            } else {
                nameError.classList.add('hidden');
            }
            
            // Validar email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                emailError.classList.remove('hidden');
                isValid = false;
            } else {
                emailError.classList.add('hidden');
            }
            
            // Validar mensaje
            if (!messageInput.value.trim()) {
                messageError.classList.remove('hidden');
                isValid = false;
            } else {
                messageError.classList.add('hidden');
            }
            
            // Si el formulario es válido, enviar datos (simulado)
            if (isValid) {
                // Aquí iría la lógica para enviar el formulario a un servidor
                // Por ahora simulamos el envío con un setTimeout
                
                // Mostrar mensaje de éxito
                successMessage.classList.remove('hidden');
                
                // Resetear formulario
                contactForm.reset();
                
                // Ocultar mensaje después de 5 segundos
                setTimeout(() => {
                    successMessage.classList.add('hidden');
                }, 5000);
            }
        });
    }
    
    // Formulario de newsletter (footer)
    const newsletterForms = document.querySelectorAll('form[data-newsletter]');
    
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = form.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            
            if (email) {
                // Aquí iría la lógica para suscribir al newsletter
                // Por ahora simulamos el envío con un alert
                alert(`¡Gracias por suscribirte con el email: ${email}!`);
                form.reset();
            }
        });
    });
    
    // Formulario de búsqueda en el blog
    const searchForm = document.querySelector('form[data-search]');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const searchInput = searchForm.querySelector('input[type="text"]');
            const searchTerm = searchInput.value.trim();
            
            if (searchTerm) {
                // Aquí iría la lógica para realizar la búsqueda
                // Por ahora simulamos la búsqueda con un alert
                alert(`Buscando: ${searchTerm}`);
            }
        });
    }
});