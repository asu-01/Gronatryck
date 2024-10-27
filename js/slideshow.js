// Slideshow hero section on home page

let slideIndex = 1; // Start from the first slide
showSlides(slideIndex); // Display the first slide

// Change slide by n (e.g., -1 for previous, +1 for next)
function changeSlide(n) {
  showSlides((slideIndex += n)); // Update slide index
}

// Set slide to the current index
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("hero-slide"); // Get all slides
  let dots = document.getElementsByClassName("pagination-bullet"); // Get all pagination bullets

  // Loop through slides and hide them
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Hide all slides
  }

  // Loop through dots and remove "active" class
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); // Remove active class from all bullets
  }

  // Check if n exceeds the number of slides
  if (n > slides.length) {
    slideIndex = 1; // Wrap to first slide
  }
  // Check if n is less than 1
  if (n < 1) {
    slideIndex = slides.length; // Wrap to last slide
  }

  // Show the current slide and add "active" class to the corresponding bullet
  slides[slideIndex - 1].style.display = "block"; // Show current slide
  if (dots[slideIndex - 1]) { // Ensure the bullet exists
    dots[slideIndex - 1].className += " active"; // Add active class to the current bullet
  }
}

// Cards


