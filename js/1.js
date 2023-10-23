const imagesRef = document.querySelectorAll('.image');
const galleryRef = document.querySelector('.gallery');


window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    showImage(currentImageIndex - 1);
  } else if (e.key === 'ArrowRight') {
    showImage(currentImageIndex + 1);
  }
});

images.forEach((imagesRef, index) => {
  imagesRef.addEventListener('click', () => {
    showImage(index);
  });
});

showImage(currentImageIndex);