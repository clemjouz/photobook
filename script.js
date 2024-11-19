// Fonction pour déplacer l'utilisateur à la slide suivante/précédente
function scrollSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const currentSlide = Math.floor(window.scrollY / window.innerHeight);

    // On empêche de sortir des bornes
    const nextSlide = currentSlide + direction;
    if (nextSlide >= 0 && nextSlide < slides.length) {
        window.scrollTo({
            top: nextSlide * window.innerHeight,
            behavior: 'smooth'
        });
    }
}

// Ajout des événements pour les touches fléchées
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        scrollSlide(1); // Vers la slide suivante
    } else if (e.key === 'ArrowUp') {
        scrollSlide(-1); // Vers la slide précédente
    }
});
