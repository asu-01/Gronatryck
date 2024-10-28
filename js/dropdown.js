/* Dropdown sortiment */
// const dropdownBtn = document.getElementById("dropdownContainer");
// const dropdownList = document.getElementById("dropdownList");

// dropdownBtn.addEventListener("mouseenter", () => {
//   dropdownList.style.display = "block";
// });

// dropdownBtn.addEventListener("mouseleave", () => {
//   dropdownList.style.display = "none";
// });

// ----------------    toggle functionality for desktop navigation --------------------//
const dropdownBtn = document.getElementsByClassName("dropdown-btn");
const dropdownList = document.getElementsByClassName("dropdown");

console.log(dropdownList);
console.log(dropdownBtn);

/* Function to determine if the screen is mobile */
function isMobile() {
  return window.innerWidth <= 768;
}

/* Add event listeners for toggling dropdown menus */
for (let i = 0; i < dropdownBtn.length; i++) {
  dropdownBtn[i].addEventListener("click", () => {
    if (!isMobile()) {
      // Check if not on mobile
      dropdownList[i].classList.toggle("open");
    }
  });

  dropdownList[i].addEventListener("click", () => {
    dropdownList[i].classList.remove("open");
  });
}

/* Dropdown for subcategory */
const expandBtn = document.getElementById("expand");
const subcategory = document.getElementById("subcategory");

expandBtn.addEventListener("click", (e) => {
  if (!isMobile()) {
    // Check if not on mobile
    subcategory.classList.toggle("open");
  }
});

// ----------------    toggle functionality for mobile footer --------------------//

function toggleLinks(linkId) {
  const links = document.getElementById(linkId);
  if (links.style.display === "none" || links.style.display === "") {
    links.style.display = "flex"; // Show the links
  } else {
    links.style.display = "none"; // Hide the links
  }
}

// ----------------    toggle functionality for mobile navbar--------------------//
//   // Toggle mobile menu (hamburger icon)
const mobileIcon = document.querySelector(".mobile-icon");
const navLinks = document.querySelector(".nav-links");

mobileIcon.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Toggle dropdown content for mobile
const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const dropdownContent = toggle.nextElementSibling;

    // Close other open dropdowns
    document.querySelectorAll(".dropdown-content").forEach((content) => {
      if (content !== dropdownContent) {
        content.classList.remove("open");
      }
    });

    // Toggle the clicked dropdown content
    dropdownContent.classList.toggle("open");
  });
});

// Toggle for menu on product page
function toggleInfo(arrowElement) {
  const infoDiv = arrowElement.nextElementSibling;
  infoDiv.classList.toggle("show");

  // Optionally rotate the arrow
  arrowElement.classList.toggle("rotated");
}
