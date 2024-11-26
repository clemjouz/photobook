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

        // Ajouter la classe 'show' pour l'animation d'apparition
        slides.forEach((slide, index) => {
            if (index === nextSlide) {
                slide.classList.add('show');
            } else {
                slide.classList.remove('show');
            }
        });
    }
}

// Activer l'animation lors du chargement des slides
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    slides[0].classList.add('show'); // Afficher la première slide
});

// Ajouter les événements pour les touches fléchées
document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowDown") {
        scrollSlide(1); // Descendre d'une slide
    } else if (event.key === "ArrowUp") {
        scrollSlide(-1); // Monter d'une slide
    }
});
