// Fonction pour gérer le défilement entre les slides
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideshowContainer = document.querySelector('.slideshow-container');

function goToSlide(index) {
    if (index >= 0 && index < slides.length) {
        currentSlide = index;
        slideshowContainer.style.transform = `translateY(-${currentSlide * 100}vh)`;
    }
}

// Navigation par clavier (flèches haut et bas)
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        goToSlide(currentSlide + 1);
    } else if (e.key === 'ArrowUp') {
        goToSlide(currentSlide - 1);
    }
});
