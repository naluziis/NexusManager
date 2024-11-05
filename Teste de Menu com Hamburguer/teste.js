// Script para menu hamburguer
const hamburgerButton = document.getElementById('hamburgerButton');
const mobileMenu = document.getElementById('mobileMenu');
const closeButton = document.getElementById('closeButton');

hamburgerButton.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

closeButton.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});
