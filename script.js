// Fonction pour gérer le défilement entre les slides avec les flèches du clavier
function handleKeyDown(event) {
    const container = document.querySelector('.slides-container');
    if (event.key === 'ArrowDown') {
        event.preventDefault();
        container.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        container.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
    }
}

// Empêche le défilement par défaut sur la page entière
document.addEventListener('keydown', handleKeyDown);

// Fonction pour ouvrir et fermer le menu latéral
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0';
    } else {
        sidebar.style.width = '250px';
    }
}

function closeSidebar() {
    document.getElementById('sidebar').style.width = '0';
}
