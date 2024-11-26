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
    const currentSlide = Math.floor(window.scrollY / window.innerHeight);
    const nextSlide = currentSlide + direction;

    // On empêche de sortir des bornes
    if (nextSlide >= 0 && nextSlide < slides.length) {
        window.scrollTo({
            top: nextSlide * window.innerHeight,
            behavior: 'smooth'
        });
    }
}

// Événements pour les touches fléchées
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowDown') {
        scrollSlide(1); // Descend à la slide suivante
    } else if (event.key === 'ArrowUp') {
        scrollSlide(-1); // Remonte à la slide précédente
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
