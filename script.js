// Fonction pour ouvrir le menu latéral
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.width = sidebar.style.width === '250px' ? '0' : '250px';
}

// Fonction pour fermer le menu latéral
function closeSidebar() {
    document.getElementById('sidebar').style.width = '0';
}

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
    if (event.deltaY > 0) {
        scrollSlide(1); // Molette vers le bas (on descend à la slide suivante)
    } else if (event.deltaY < 0) {
        scrollSlide(-1); // Molette vers le haut (on monte à la slide précédente)
    }
    event.preventDefault();  // Empêche le défilement par défaut de la page
}, { passive: false });

// Gestion du redimensionnement de la fenêtre
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
