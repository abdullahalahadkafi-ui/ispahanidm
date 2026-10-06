let slidesData = [
  { 
    id: 1, 
    desktopImg: "assets/images/desktop_cover.png", 
    mobileImg: "assets/images/mobile_cover.png",   
    link: "#" 
  },
  { 
    id: 1, 
    desktopImg: "assets/images/desktop_main.png", 
    mobileImg: "assets/images/mobile_main.png",   
    link: "#" 
  },
  { 
    id: 1, 
    desktopImg: "assets/images/desktop_activites.jpg", 
    mobileImg: "assets/images/mobile_activites.jpg",   
    link: "#" 
  },
  { 
    id: 1, 
    desktopImg: "assets/images/desktop_ceramony.jpg",
      mobileImg: "assets/images/mobile_ceramony.jpg",
    link: "#" 
  },
   
];

let currentIndex = 0;
let slideInterval;
const wrapper = document.getElementById('sliderWrapper');
const sliderContainer = document.getElementById('heroSlider');

function renderSlides() {
  wrapper.innerHTML = '';
  slidesData.forEach((slide, index) => {
    const slideDiv = document.createElement('div');
    slideDiv.classList.add('slide');
    slideDiv.innerHTML = `
      <a href="${slide.link}">
        <img src="${slide.desktopImg}" class="desktop-banner" alt="Banner ${index+1}">
        <img src="${slide.mobileImg}" class="mobile-banner" alt="Banner ${index+1}">
      </a>
    `;
    wrapper.appendChild(slideDiv);
  });
}

function updateSlider() {
  wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    document.querySelectorAll('.slide').forEach(slide => {
    slide.classList.remove('shine-active');
  });

  const activeSlide = document.querySelectorAll('.slide')[currentIndex];
  if (activeSlide) {
    setTimeout(() => {
      activeSlide.classList.add('shine-active');
    }, 300);
  }
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slidesData.length;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slidesData.length) % slidesData.length;
  updateSlider();
}

function startAutoSlide() {
  slideInterval = setInterval(nextSlide, 3000);
}

function stopAutoSlide() {
  clearInterval(slideInterval);
}

document.getElementById('nextBtn')?.addEventListener('click', nextSlide);
document.getElementById('prevBtn')?.addEventListener('click', prevSlide);

sliderContainer.addEventListener('mouseenter', stopAutoSlide);
sliderContainer.addEventListener('mouseleave', startAutoSlide);

let startX = 0;
let endX = 0;

sliderContainer.addEventListener('touchstart', (e) => {
  stopAutoSlide();
  startX = e.touches[0].clientX;
}, { passive: true });

sliderContainer.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
  startAutoSlide();
}, { passive: true });

function handleSwipe() {
  const threshold = 40;
  if (startX - endX > threshold) {
    nextSlide();
  } else if (endX - startX > threshold) {
    prevSlide();
  }
}
renderSlides();
startAutoSlide();