// Fonction pour gérer le défilement entre les slides
function scrollSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const currentSlide = Math.floor(window.scrollY / window.innerHeight); // Calcul de la slide actuelle
    const nextSlide = currentSlide + direction;

    // On empêche de sortir des bornes
    if (nextSlide >= 0 && nextSlide < slides.length) {
        // Défilement fluide vers la slide suivante ou précédente
        window.scrollTo({
            top: nextSlide * window.innerHeight, // Position de la slide
            behavior: 'smooth' // Défilement fluide
        });
    }
}

// Fonction pour gérer les événements de touches fléchées
function handleKeyDown(event) {
    if (event.key === 'ArrowDown') {
        event.preventDefault();  // Empêche le défilement classique
        scrollSlide(1); // Descend d'une slide
    } else if (event.key === 'ArrowUp') {
        event.preventDefault();  // Empêche le défilement classique
        scrollSlide(-1); // Monte d'une slide
    }
}

// Ajouter un gestionnaire d'événements pour les touches fléchées
document.addEventListener('keydown', handleKeyDown);

// Gestion de la molette de la souris pour le défilement entre les slides
document.addEventListener('wheel', function(event) {
    event.preventDefault();  // Empêche le défilement par défaut de la page
    if (event.deltaY > 0) {
        scrollSlide(1); // Molette vers le bas (on descend à la slide suivante)
    } else if (event.deltaY < 0) {
        scrollSlide(-1); // Molette vers le haut (on monte à la slide précédente)
    }
}, { passive: false });

// Empêcher le comportement par défaut du défilement tactile sur les appareils mobiles (pad tactile)
let touchStartY = 0;
document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;  // Sauvegarde la position initiale
});

document.addEventListener('touchmove', (e) => {
    const touchEndY = e.changedTouches[0].screenY;
    const deltaY = touchStartY - touchEndY;

    if (Math.abs(deltaY) > 30) { // Seuil de déplacement pour le défilement
        e.preventDefault(); // Empêche le défilement classique
        if (deltaY > 0) {
            scrollSlide(1); // Défile vers la slide suivante
        } else {
            scrollSlide(-1); // Défile vers la slide précédente
        }
        touchStartY = touchEndY;  // Met à jour la position de départ
    }
}, { passive: false });

// Redimensionnement de la fenêtre
window.addEventListener('resize', function() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.style.height = window.innerHeight + 'px'; // Redéfinir la hauteur de chaque slide lors du redimensionnement
    });
});

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.style.height = window.innerHeight + 'px'; // Redéfinir la hauteur de chaque slide
    });
});
