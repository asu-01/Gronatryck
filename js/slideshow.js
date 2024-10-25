// Slideshow hero section on home page //

let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("hero-slide");
  let dots = document.getElementsByClassName("pagination-bullet");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "block";
  }

  // Remove "active" class from all bullets
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the current slide and add "active" class to the corresponding bullet
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//-------- Slideshow popular cards ---------//

let currentCardIndex = 0; // Current index of the first visible card
const cardsPerSlide = 4; // Number of cards displayed at once

function changeCardSlide(n) {
  const cardContainer = document.querySelector(".card-container");
  const cards = document.querySelectorAll(".card");

  // Calculate the new index
  currentCardIndex += n;

  // Check boundaries
  if (currentCardIndex < 0) {
    currentCardIndex = 0; // Prevent moving before the first card
  }
  if (currentCardIndex > cards.length - cardsPerSlide) {
    currentCardIndex = cards.length - cardsPerSlide; // Prevent moving past the last set of cards
  }

  // Update the scroll position
  const cardWidth = document.querySelector(".card").offsetWidth; // Get the width of a single card
  cardContainer.scrollTo({
    left: cardWidth * currentCardIndex,
    behavior: "smooth", // Smooth scroll
  });
}
