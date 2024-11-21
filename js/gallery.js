(() => {
    // Select all thumbnails and the gallery image
    const thumbnails = document.querySelectorAll('.thumbnail');
    const galleryImage = document.querySelector('#gallery-image');

    // Event listener for each thumbnail to change the gallery image
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // Get the image URL from the thumbnail's data-image attribute
            const imageSrc = thumbnail.getAttribute('data-image');
            
            // Change the gallery image's source
            galleryImage.src = imageSrc;
        });
    });
})();
