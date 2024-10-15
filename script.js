document.addEventListener('DOMContentLoaded', function() {
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
