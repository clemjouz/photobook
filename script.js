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
    const currentSlide = Math.floor(window.scrollY / window.innerHeight);
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

// Gestion du défilement avec les touches fléchées (flèche haut et flèche bas)
document.addEventListener('keydown', function(event) {
    // Si la flèche bas est pressée, défile vers la slide suivante
    if (event.key === 'ArrowDown') {
        event.preventDefault();  // Empêche le défilement de la page
        scrollSlide(1); // Descend d'une slide
    }
    // Si la flèche haut est pressée, défile vers la slide précédente
    else if (event.key === 'ArrowUp') {
        event.preventDefault();  // Empêche le défilement de la page
        scrollSlide(-1); // Monte d'une slide
    }
});

// Corrige les problèmes de rendu sur Chrome
window.addEventListener('resize', function () {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.style.height = window.innerHeight + 'px'; // Ajuste la hauteur en fonction de l'écran
    });
});

// Initialiser les hauteurs au chargement
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.style.height = window.innerHeight + 'px'; // Définit la hauteur initiale
    });
});
