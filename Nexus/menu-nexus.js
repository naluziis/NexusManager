let carouselIndex = 0;
const images = document.querySelectorAll('.carousel-images img');

function showSlides() {
  carouselIndex++;
  if (carouselIndex >= images.length) {
    carouselIndex = 0;
  }
  document.querySelector('.carousel-images').style.transform = `translateX(-${carouselIndex * 100}%)`;
}

setInterval(showSlides, 3000); // Muda de imagem a cada 3 segundos
