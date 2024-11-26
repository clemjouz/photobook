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

// Empêcher le défilement par la molette de la souris
document.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
        // Si la molette défile vers le bas
        scrollSlide(1);
    } else if (event.deltaY < 0) {
        // Si la molette défile vers le haut
        scrollSlide(-1);
    }
    event.preventDefault();  // Empêche le défilement de la page
}, { passive: false });

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
