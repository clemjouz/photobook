// Fonction pour ouvrir le menu latéral
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.width = sidebar.style.width === '250px' ? '0' : '250px';
}

// Fonction pour fermer le menu latéral
function closeSidebar() {
    document.getElementById('sidebar').style.width = '0';
}

// Fonction pour gérer le défilement rapide entre les slides
function scrollSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const currentSlide = Math.floor(window.scrollY / window.innerHeight); // Calcul de la slide actuelle
    const nextSlide = currentSlide + direction;

    // On empêche de sortir des bornes
    if (nextSlide >= 0 && nextSlide < slides.length) {
        // Défilement rapide vers la slide suivante ou précédente
        window.scrollTo({
            top: nextSlide * window.innerHeight, // On va à la position de la slide
            behavior: 'smooth' // Défilement fluide
        });
    }
}

// Fonction pour gérer l'événement de pression des touches fléchées
function handleKeyDown(event) {
    if (event.key === 'ArrowDown') {
        event.preventDefault();  // Empêche le défilement de la page
        scrollSlide(1); // Descend d'une slide
    } else if (event.key === 'ArrowUp') {
        event.preventDefault();  // Empêche le défilement de la page
        scrollSlide(-1); // Monte d'une slide
    }
}

// Ajouter un gestionnaire d'événements pour les touches fléchées
document.addEventListener('keydown', handleKeyDown);

// Ajouter des événements pour la molette de la souris (rouler vers le bas ou vers le haut)
document.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
        scrollSlide(1); // Molette vers le bas (on descend à la slide suivante)
    } else if (event.deltaY < 0) {
        scrollSlide(-1); // Molette vers le haut (on monte à la slide précédente)
    }
    event.preventDefault();  // Empêche le défilement de la page
}, { passive: false }); // Empêche la propagation passive

// Correction pour ajuster la hauteur des slides lors du redimensionnement de la fenêtre
window.addEventListener('resize', function() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.style.height = window.innerHeight + 'px'; // Définit la hauteur de chaque slide
    });
});

// Initialisation des slides au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.style.height = window.innerHeight + 'px'; // Définit la hauteur de chaque slide
    });
});
