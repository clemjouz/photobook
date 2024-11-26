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
    const currentSlide = Math.round(window.scrollY / window.innerHeight);
    const nextSlide = currentSlide + direction;

    // On empêche de sortir des bornes
    if (nextSlide >= 0 && nextSlide < slides.length) {
        window.scrollTo({
            top: nextSlide * window.innerHeight,
            behavior: 'smooth'
        });
    }
}

// Activer l'animation lors du chargement des slides
document.addEventListener('DOMContentLoaded', function () {
    // Aucune animation nécessaire, toutes les slides sont empilées verticalement.
});

// Ajouter les événements pour les touches fléchées
document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowDown") {
        scrollSlide(1); // Descendre d'une slide
    } else if (event.key === "ArrowUp") {
        scrollSlide(-1); // Monter d'une slide
    }
});
