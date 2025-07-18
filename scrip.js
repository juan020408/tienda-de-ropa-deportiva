document.addEventListener('DOMContentLoaded', () => {
  // 🎞️ Carrusel
  let currentSlide = 0;
  const track = document.getElementById('carouselTrack');
  const slides = document.querySelectorAll('.carousel-slide');
  const totalSlides = slides.length;
  const videoSlideIndex = Array.from(slides).findIndex(slide => slide.classList.contains('video-slide'));
  const promoVideo = document.getElementById('promoVideo');
  const sonidoBtn = document.getElementById('activarSonido');

  // 🎵 Música de fondo
  const music = document.getElementById('backgroundMusic');
  const playBtn = document.getElementById('playBtn');
  const pauseBtn = document.getElementById('pauseBtn');

  // 🔁 Actualiza el carrusel
  function updateCarousel() {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    if (currentSlide === videoSlideIndex) {
      promoVideo.muted = true;
      promoVideo.play();
      sonidoBtn.style.display = 'block';
    } else {
      promoVideo.pause();
      promoVideo.muted = true;
      promoVideo.currentTime = 0;
      sonidoBtn.style.display = 'none';
    }
  }

  // ⏩ Mueve el carrusel
  function moveSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    updateCarousel();
  }

  // 🎯 Eventos de botones del carrusel
  document.getElementById('prevBtn').addEventListener('click', () => moveSlide(-1));
  document.getElementById('nextBtn').addEventListener('click', () => moveSlide(1));

  // 🔊 Activar sonido del video
  sonidoBtn.addEventListener('click', () => {
    promoVideo.muted = false;
    promoVideo.play();
    sonidoBtn.style.display = 'none';
  });

  // 🎵 Control de música de fondo
  playBtn.addEventListener('click', () => music.play());
  pauseBtn.addEventListener('click', () => music.pause());

  // ⏱️ Auto-slide (pausa si es video)
  setInterval(() => {
    if (currentSlide !== videoSlideIndex) {
      moveSlide(1);
    }
  }, 5000);

  // 🚀 Inicializa
  updateCarousel();
});
