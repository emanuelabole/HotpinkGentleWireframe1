document.addEventListener('DOMContentLoaded', function () {
  // Bilžu klikšķu piesaiste
  const thumbnails = document.querySelectorAll('.thumbnail img');
  thumbnails.forEach(img => {
    img.addEventListener('click', function () {
      openLightbox(this.src);
    });
  });

  // Lightbox aizvēršana
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }
});

function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightbox.style.display = 'flex';
  lightboxImg.src = src;
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none';
}

