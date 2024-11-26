// Fonction pour ouvrir le menu latéral
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.width = sidebar.style.width === '250px' ? '0' : '250px';
}

// Fonction pour fermer le menu latéral
function closeSidebar() {
    document.getElementById('sidebar').style.width = '0';
}

// Fonction pour naviguer entre les slides avec le clavier
function scrollToSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= 0 && index < slides.length) {
        const target = slides[index];
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth',
        });
    }
}

// Détection des flèches du clavier
document.addEventListener('keydown', (event) => {
    const slides = document.querySelectorAll('.slide');
    const currentIndex = Math.round(window.scrollY / window.innerHeight);
    if (event.key === "ArrowDown") {
        scrollToSlide(currentIndex + 1);
    } else if (event.key === "ArrowUp") {
        scrollToSlide(currentIndex - 1);
    }
});
