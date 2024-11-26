// Fonction pour gérer le défilement entre les slides
function handleKeyDown(event) {
    if (event.key === 'ArrowDown') {
        event.preventDefault();  // Empêche le défilement classique
        document.querySelector('.slides-container').scrollBy({
            top: window.innerHeight, // Scroll vers le bas (une slide)
            behavior: 'smooth'       // Défilement fluide
        });
    } else if (event.key === 'ArrowUp') {
        event.preventDefault();  // Empêche le défilement classique
        document.querySelector('.slides-container').scrollBy({
            top: -window.innerHeight, // Scroll vers le haut (une slide)
            behavior: 'smooth'        // Défilement fluide
        });
    }
}

// Ajouter un gestionnaire d'événements pour les touches fléchées
document.addEventListener('keydown', handleKeyDown);

// Ajouter les événements pour la molette de la souris
document.addEventListener('wheel', function(event) {
    event.preventDefault();  // Empêche le défilement classique de la page
    const container = document.querySelector('.slides-container');
    if (event.deltaY > 0) {
        container.scrollBy({
            top: window.innerHeight, // Scroll vers le bas (une slide)
            behavior: 'smooth'       // Défilement fluide
        });
    } else if (event.deltaY < 0) {
        container.scrollBy({
            top: -window.innerHeight, // Scroll vers le haut (une slide)
            behavior: 'smooth'        // Défilement fluide
        });
    }
}, { passive: false });
