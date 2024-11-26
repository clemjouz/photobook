// Fonction pour gérer le défilement entre les slides avec les flèches du clavier
function handleKeyDown(event) {
    const container = document.querySelector('.slides-container');
    
    if (event.key === 'ArrowDown') {
        event.preventDefault();  // Empêche le défilement classique
        container.scrollBy({
            top: window.innerHeight, // Scroll d'une slide
            behavior: 'smooth'       // Défilement fluide
        });
    } else if (event.key === 'ArrowUp') {
        event.preventDefault();  // Empêche le défilement classique
        container.scrollBy({
            top: -window.innerHeight, // Scroll vers le haut (une slide)
            behavior: 'smooth'        // Défilement fluide
        });
    }
}

// Fonction pour gérer le défilement via la molette
function handleWheel(event) {
    event.preventDefault();  // Empêche le défilement classique de la page

    const container = document.querySelector('.slides-container');
    if (event.deltaY > 0) {
        container.scrollBy({
            top: window.innerHeight, // Scroll d'une slide
            behavior: 'smooth'       // Défilement fluide
        });
    } else if (event.deltaY < 0) {
        container.scrollBy({
            top: -window.innerHeight, // Scroll vers le haut (une slide)
            behavior: 'smooth'        // Défilement fluide
        });
    }
}

// Ajouter les événements pour les touches fléchées et la molette de la souris
document.addEventListener('keydown', handleKeyDown);
document.addEventListener('wheel', handleWheel, { passive: false });
