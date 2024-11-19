// Fonction pour gérer le défilement entre les slides
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function goToSlide(index) {
    if (index >= 0 && index < slides.length) {
        currentSlide = index;
        document.querySelector('.slideshow-container').style.transform = `translateY(-${currentSlide * 100}vh)`;
    }
}

// Écouteur pour la navigation par clavier
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        goToSlide(currentSlide + 1);
    } else if (e.key === 'ArrowUp') {
        goToSlide(currentSlide - 1);
    }
});

