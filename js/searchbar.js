// Toggle search bar visibility
document.getElementById("search-icon").addEventListener("click", function() {
    document.querySelector(".search-bar").classList.toggle("show");
  });
  
  // Close search bar if clicking outside the form
  document.querySelector(".search-bar").addEventListener("click", function(e) {
    if (e.target === this) {
      this.classList.remove("show");
    }
  });
  