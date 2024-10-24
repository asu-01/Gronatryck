// // slideshow.js

// var slideIndex = 1; // Initialize the slide index

// // Show the first slide when the page loads
// window.onload = function () {
//   showSlides(slideIndex);
// };

// // Function to show the specific slide when a bullet is clicked
// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// // Function to display the slides
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("hero-slides"); // Get all slide elements
//   var dots = document.getElementsByClassName("pagination-bullet"); // Get all bullet elements

//   // Wrap around the slide index if it's out of bounds
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }

//   // Hide all slides
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   // Remove the active class from all bullets
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", ""); // Ensure all bullets are inactive
//   }

//   // Show the current slide and set the corresponding bullet as active
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active"; // Add active class to the current bullet
// }

//-------- version 2 ---------//
// var slideIndex = 0; // Start with the first slide

// // Function to show the specific slide
// function showSlide(n) {
//   var slides = document.getElementsByClassName("hero-slide");
//   var dots = document.getElementsByClassName("pagination-bullet");

//   // Loop through all slides and hide them
//   for (var i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   // Reset the slideIndex if out of bounds
//   if (n >= slides.length) {
//     slideIndex = 0;
//   }
//   if (n < 0) {
//     slideIndex = slides.length - 1;
//   }

//   // Display the current slide
//   slides[slideIndex].style.display = "block";

//   // Update the dots to indicate the current slide
//   for (var j = 0; j < dots.length; j++) {
//     dots[j].classList.remove("active");
//   }
//   dots[slideIndex].classList.add("active");
// }

// // Function to show the specific slide based on the bullet clicked
// function currentSlide(n) {
//   slideIndex = n - 1; // Adjust index for zero-based array
//   showSlide(slideIndex);
// }

// // Initialize by showing the first slide
// showSlide(slideIndex);

let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
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
        slides[i].style.display = "none";
    }

    // Remove "active" class from all bullets
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide and add "active" class to the corresponding bullet
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

