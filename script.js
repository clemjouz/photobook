document.addEventListener('DOMContentLoaded', function() {
    const galleryLinks = document.querySelectorAll('.gallery a'); // Sélectionne les liens autour des images
    galleryLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Empêche le comportement par défaut du lien

            // Ouvre le lien dans un nouvel onglet
            window.open(link.href, '_blank'); 
        });
    });

    // Si tu veux garder le comportement de l'overlay pour voir les images agrandies, garde le code existant ici
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            const overlay = document.createElement('div');
            overlay.id = 'overlay';
            document.body.appendChild(overlay);

            const largeImage = document.createElement('img');
            largeImage.src = image.src;
            largeImage.id = 'largeImage';
            overlay.appendChild(largeImage);

            overlay.addEventListener('click', () => {
                document.body.removeChild(overlay);
            });
        });
    });
});
