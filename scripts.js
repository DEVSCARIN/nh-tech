// scripts.js

// Ativando ScrollReveal para as seções com animações
document.addEventListener("DOMContentLoaded", () => {
  ScrollReveal().reveal('.fade-section', {
    duration: 1000,
    origin: 'bottom',
    distance: '40px',
    easing: 'ease-in-out',
    reset: true
  });

  ScrollReveal().reveal('.slide-section', {
    duration: 1000,
    origin: 'left',
    distance: '60px',
    easing: 'ease-in-out',
    reset: true
  });
});

// Se futuramente quiser adicionar menu mobile toggler, aqui um exemplo básico:
// const navLinks = document.querySelector('.navbar-links');
// const toggleButton = document.querySelector('.navbar-toggler');
// if(toggleButton && navLinks) {
//   toggleButton.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
//   });
// }
