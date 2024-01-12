// GSAP Timeline
const tl = gsap.timeline();

// Get the slides and calculate the total number of slides
const slides = document.querySelectorAll('.slide');
const crsl = document.querySelectorAll('.crsl-item');
const totalSlides = slides.length;
const totalCrsl = crsl.length;

// Set the initial active slide index
let activeSlide = 0;

// Function to go to the next slide
function nextSlide() {
  // Increment the active slide index
  // Animate the slider to the next slide
  tl.to(slides[activeSlide], { 
      // x: `-${activeSlide * 100}%`,
      opacity: 0,
    //   zIndex: 0,
      duration: 0.2,
      ease: 'power2.inOut' 
    });
    
    crsl[activeSlide].classList.remove("active");

      activeSlide = (activeSlide + 1) % totalSlides;

      tl.to(slides[activeSlide], { 
        opacity: 1,
        duration: 0.1,
        ease: 'power2.inOut' 
    });

    crsl[activeSlide].classList.add("active");
}

// Function to go to the previous slide
function prevSlide() {
    tl.to(slides[activeSlide], { 
        // x: `-${activeSlide * 100}%`,
        opacity: 0,
      //   zIndex: 0,
        duration: 0.2,
        ease: 'power2.inOut' 
      });
      crsl[activeSlide].classList.remove("active");
      // Decrement the active slide index
      activeSlide = (activeSlide - 1 + totalSlides) % totalSlides;
      tl.to(slides[activeSlide], { 
          opacity: 1,
          duration: 0.1,
          ease: 'power2.inOut' 
        });
        crsl[activeSlide].classList.add("active");
        
  // Animate the slider to the previous slide
//   tl.to('.slider', { x: `-${activeSlide * 100}%`, duration: 0.8, ease: 'power2.inOut' });
}

// Event listeners for next and previous buttons
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// setInterval(() => {
//     nextSlide();
// }, 5000);