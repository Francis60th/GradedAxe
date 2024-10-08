document.addEventListener('DOMContentLoaded', function () {
    const albumContainer = document.querySelector('.album-container');
    const albums = document.querySelectorAll('.album');
    const fullscreenView = document.getElementById('fullscreenView');
    const fullscreenImage = document.getElementById('fullscreenImage');
    let currentIndex = 0;
    let currentAlbumImages = [];

    // Calculate the width of one album and the gap
    const albumWidth = document.querySelector('.album').offsetWidth;
    const containerStyle = getComputedStyle(albumContainer);
    const gap = parseFloat(containerStyle.gap); // Gap between albums in pixels
    
    // Calculate the width to scroll (album width + 2 * gap)
    const scrollAmount = albumWidth + gap;

    // Scroll buttons
    document.querySelector('.scroll-btn.left').addEventListener('click', () => {
        albumContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    document.querySelector('.scroll-btn.right').addEventListener('click', () => {
        albumContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
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
                    '../images/album2/oblock2.png',
                    '../images/album2/oblock3.png',
                    '../images/album2/oblock4.png',
                    '../images/album2/oblock5.png',
                ];
            } else if (albumName === 'album3') {
                currentAlbumImages = [
                    '../images/album3/history.png',
                    '../images/album3/history2.png',
                    '../images/album3/history3.png',
                    '../images/album3/history4.png',
                ];
            } else if (albumName === 'album4') {
                currentAlbumImages = [
                    '../images/album4/gay rockets 1.png',
                    '../images/album4/gay rockets 2.png',
                    '../images/album4/gay rockets 3.png',
                    '../images/album4/gay rockets 4.png',
                    '../images/album4/gay rockets 5.png',
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
