document.addEventListener('DOMContentLoaded', function () {
    const albumContainer = document.querySelector('.album-container');
    const albums = document.querySelectorAll('.album');
    const fullscreenView = document.getElementById('fullscreenView');
    const fullscreenImage = document.getElementById('fullscreenImage');
    let currentIndex = 0;
    let currentAlbumImages = [];

    // Scroll buttons
    document.querySelector('.scroll-btn.left').addEventListener('click', () => {
        albumContainer.scrollBy({ left: -200, behavior: 'smooth' });
    });

    document.querySelector('.scroll-btn.right').addEventListener('click', () => {
        albumContainer.scrollBy({ left: 200, behavior: 'smooth' });
    });

    // Album click event
    albums.forEach((album) => {
        album.addEventListener('click', () => {
            const albumName = album.getAttribute('data-album');
            
            if (albumName === 'album1') {
                currentAlbumImages = [
                    '../images/album1/china.png',
                    '../images/album1/gat.png',
                    '../images/album1/O block prep.png'
                ];
            } else if (albumName === 'album2') {
                currentAlbumImages = [
                    '../images/album2/oblock1.png',
                    '../images/album2/oblock2.png'
                ];
            }

            fullscreenView.style.display = 'flex';
            fullscreenImage.src = currentAlbumImages[0]; // Show the first image
            currentIndex = 0;
        });
    });

    // Close button
    document.querySelector('.close-btn').addEventListener('click', () => {
        fullscreenView.style.display = 'none';
    });

    // Navigation buttons
    document.querySelector('.nav-btn.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + currentAlbumImages.length) % currentAlbumImages.length;
        fullscreenImage.src = currentAlbumImages[currentIndex];
    });

    document.querySelector('.nav-btn.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % currentAlbumImages.length;
        fullscreenImage.src = currentAlbumImages[currentIndex];
    });
});
