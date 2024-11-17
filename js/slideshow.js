// Slideshow hero section on home page, three images 

let slideIndex = 1; // Start from the first slide
showSlides(slideIndex); 

// Change slide by n (e.g., -1 for previous, +1 for next)
function changeSlide(n) {
  showSlides((slideIndex += n)); // Update slide index
}

// Set slide to the current index
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("hero-slide");
  let dots = document.getElementsByClassName("pagination-bullet"); 

  // Loop through slides and hide them
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Hide all slides
  }

  // Loop through dots and remove "active" class
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", ""); 
  }

  // Check if n exceeds the number of slides
  if (n > slides.length) {
    slideIndex = 1; 
  }
  // Check if n is less than 1
  if (n < 1) {
    slideIndex = slides.length; 
  }

  // Show the current slide and add "active" class to the corresponding bullet
  slides[slideIndex - 1].style.display = "block"; 
  if (dots[slideIndex - 1]) {
    // Ensure the bullet exists
    dots[slideIndex - 1].className += " active"; 
  }
}

// Add keyboard navigation
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    changeSlide(1); 
  } else if (event.key === "ArrowLeft") {
    changeSlide(-1);
  }
});

// Test which image is being shown in the console
window.addEventListener('load', () => {
  const picture = document.querySelector('picture');
  const source = picture.querySelector('source');
  console.log('Image src: ', source.srcset);
});









