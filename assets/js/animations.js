// animations.js - Animaciones con GSAP

document.addEventListener('DOMContentLoaded', function() {
  // Verificar si GSAP está cargado
  if (typeof gsap !== 'undefined') {
      // Animación de entrada para el hero
      gsap.from('#hero h1, #hero p, #hero a', {
          duration: 1,
          y: 50,
          opacity: 0,
          stagger: 0.2,
          ease: 'power3.out'
      });
      
      gsap.from('#hero img', {
          duration: 1,
          x: 50,
          opacity: 0,
          delay: 0.5,
          ease: 'power3.out'
      });
      
      // Animación para las secciones
      const sections = document.querySelectorAll('section');
      
      sections.forEach(section => {
          if (section.id !== 'hero') {
              gsap.from(section, {
                  scrollTrigger: {
                      trigger: section,
                      start: 'top 80%',
                      toggleActions: 'play none none none'
                  },
                  y: 50,
                  opacity: 0,
                  duration: 1,
                  ease: 'power3.out'
              });
          }
      });
      
      // Animación para las tarjetas de servicios
      const serviceCards = document.querySelectorAll('#servicios .grid > div');
      
      serviceCards.forEach((card, index) => {
          gsap.from(card, {
              scrollTrigger: {
                  trigger: card,
                  start: 'top 80%',
                  toggleActions: 'play none none none'
              },
              y: 50,
              opacity: 0,
              duration: 0.5,
              delay: index * 0.1,
              ease: 'power3.out'
          });
      });
      
      // Animación para los testimonios
      const testimonials = document.querySelectorAll('#testimonios .grid > div');
      
      testimonials.forEach((testimonial, index) => {
          gsap.from(testimonial, {
              scrollTrigger: {
                  trigger: testimonial,
                  start: 'top 80%',
                  toggleActions: 'play none none none'
              },
              y: 50,
              opacity: 0,
              duration: 0.5,
              delay: index * 0.15,
              ease: 'power3.out'
          });
      });
      
      // Animación para los artículos del blog
      const blogArticles = document.querySelectorAll('#blog .grid > article');
      
      blogArticles.forEach((article, index) => {
          gsap.from(article, {
              scrollTrigger: {
                  trigger: article,
                  start: 'top 80%',
                  toggleActions: 'play none none none'
              },
              y: 50,
              opacity: 0,
              duration: 0.5,
              delay: index * 0.1,
              ease: 'power3.out'
          });
      });
      
      // Efecto parallax para imágenes
      const parallaxImages = document.querySelectorAll('[data-parallax]');
      
      parallaxImages.forEach(image => {
          gsap.to(image, {
              scrollTrigger: {
                  trigger: image,
                  scrub: true
              },
              y: 100,
              ease: 'none'
          });
      });
  }
  
  // Animación para elementos con clase fade-in
  const fadeElements = document.querySelectorAll('.fade-in');
  
  fadeElements.forEach(element => {
      element.style.opacity = '0';
      
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  element.style.animation = 'fadeIn 1s ease-in-out forwards';
                  observer.unobserve(element);
              }
          });
      }, { threshold: 0.1 });
      
      observer.observe(element);
  });
});