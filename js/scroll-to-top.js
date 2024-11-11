// Get the button
var scrollButton = document.getElementById("scroll-to-top");

// Show the button when scrolling past 200px
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

// Scroll smoothly to the top when the button is clicked
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Works on most modern browsers
}
