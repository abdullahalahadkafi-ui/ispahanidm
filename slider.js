let slidesData = [
  { 
    id: 1, 
    desktopImg: "Images/desktop_cover.png", 
    mobileImg: "Images/mobile_cover.png",   
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
  
  // আগের সব স্লাইড থেকে শাইন ক্লাস সরিয়ে নেওয়া
  document.querySelectorAll('.slide').forEach(slide => {
    slide.classList.remove('shine-active');
  });

  // নতুন অ্যাক্টিভ স্লাইডে গ্লাস শাইন অ্যানিমেশন ট্রিগার করা
  const activeSlide = document.querySelectorAll('.slide')[currentIndex];
  if (activeSlide) {
    // স্লাইড অ্যানিমেশন শেষ হওয়ার পর শাইন হবে
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

// বাটন ইভেন্ট
document.getElementById('nextBtn')?.addEventListener('click', nextSlide);
document.getElementById('prevBtn')?.addEventListener('click', prevSlide);

sliderContainer.addEventListener('mouseenter', stopAutoSlide);
sliderContainer.addEventListener('mouseleave', startAutoSlide);

/* ================= মোবাইল সওয়াইপ (Touch/Swipe Logic) ================= */
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
  const threshold = 40; // কত পিক্সেল ড্র্যাগ করলে স্লাইড চেঞ্জ হবে
  if (startX - endX > threshold) {
    nextSlide(); // বামে সওয়াইপ করলে পরের স্লাইড
  } else if (endX - startX > threshold) {
    prevSlide(); // ডানে সওয়াইপ করলে আগের স্লাইড
  }
}

// ইনিশিয়ালাইজেশন
renderSlides();
startAutoSlide();