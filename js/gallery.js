(() => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const galleryImage = document.querySelector('#gallery-image');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const imageSrc = thumbnail.getAttribute('data-image');
            
            galleryImage.src = imageSrc;
        });
    });
})();
