const carousel = document.getElementById('carousel');

const images = carousel.getElementsByTagName('img');

let activeIndex = 0;

function showImage() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
  }
  images[activeIndex].classList.add('active');
}

function nextImage() {
  activeIndex++;
  if (activeIndex >= images.length) {
    activeIndex = 0;
  }
  showImage();
}

function prevImage() {
  activeIndex--;
  if (activeIndex < 0) {
    activeIndex = images.length - 1;
  }
  showImage();
}

showImage();

setInterval(nextImage, 3000);