

const gallery = document.querySelector('.gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const fullscreenBtn = document.querySelector('.fullscreen');
let currentIndex;
let isFullScreen = false;

gallery.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    lightbox.style.display = 'block';
    lightboxImg.src = e.target.src;
    lightboxImg.style.width = '80%'; // Adjust to a uniform size
    lightboxImg.style.height = 'auto'; // Maintain aspect ratio
    caption.innerText = e.target.getAttribute('data-caption');
    currentIndex = Array.from(gallery.children).indexOf(e.target.parentElement);
  }
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateLightbox();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < gallery.children.length - 1) {
    currentIndex++;
    updateLightbox();
  }
});

function updateLightbox() {
  const img = gallery.children[currentIndex].querySelector('img');
  lightboxImg.src = img.src;
  caption.innerText = img.getAttribute('data-caption');
  if (isFullScreen) {
    lightboxImg.style.width = '100%';
    lightboxImg.style.height = '100%';
  } else {
    lightboxImg.style.width = '80%';
    lightboxImg.style.height = 'auto';
  }
}

document.addEventListener('keydown', (e) => {
  if (lightbox.style.display === 'block') {
    if (e.key === 'ArrowLeft') {
      prevBtn.click();
    } else if (e.key === 'ArrowRight') {
      nextBtn.click();
    } else if (e.key === 'Escape') {
      closeBtn.click();
    }
  }
});

function toggleFullScreen() {
  const elem = document.getElementById('lightbox-img');
  const lightbox = document.getElementById('lightbox');

  if (!document.fullscreenElement) {
    elem.requestFullscreen().catch(err => {
      alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
    });
    isFullScreen = true;
    lightbox.style.padding = '0'; // Remove padding in fullscreen
    lightboxImg.style.width = '100%';
    lightboxImg.style.height = '100%';
  } else {
    document.exitFullscreen();
    isFullScreen = false;
    lightbox.style.padding = '100px'; // Reset padding when not in fullscreen
    lightboxImg.style.width = '80%';
    lightboxImg.style.height = 'auto';
  }
}

