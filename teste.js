const hamburgerButton = document.getElementById('hamburgerButton');
const mobileMenu = document.getElementById('mobileMenu');
const closeButton = document.getElementById('closeButton');

// Abrir o menu mobile ao clicar no botão hamburguer
hamburgerButton.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
});

// Fechar o menu mobile ao clicar no botão de fechar
closeButton.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
});
