/* Dropdown sortiment */
// const dropdownBtn = document.getElementById("dropdownContainer");
// const dropdownList = document.getElementById("dropdownList");

// dropdownBtn.addEventListener("mouseenter", () => {
//   dropdownList.style.display = "block";
// });

// dropdownBtn.addEventListener("mouseleave", () => {
//   dropdownList.style.display = "none";
// });

// ---------- toggle functionality for desktop navigation --------------------//
// const dropdownBtn = document.getElementsByClassName("dropdown-btn");
// const dropdownList = document.getElementsByClassName("dropdown");

// console.log(dropdownList);
// console.log(dropdownBtn);

// /* Function to determine if the screen is mobile */
// function isMobile() {
//   return window.innerWidth <= 768;
// }

// /* Add event listeners for toggling dropdown menus */
// for (let i = 0; i < dropdownBtn.length; i++) {
//   dropdownBtn[i].addEventListener("click", () => {
//     if (!isMobile()) {
//       // Check if not on mobile
//       dropdownList[i].classList.toggle("open");
//     }
//   });

//   dropdownList[i].addEventListener("click", () => {
//     dropdownList[i].classList.remove("open");
//   });
// }

// /* Dropdown for subcategory */
// const expandBtn = document.getElementById("expand");
// const subcategory = document.getElementById("subcategory");

// expandBtn.addEventListener("click", (e) => {
//   if (!isMobile()) {
//     // Check if not on mobile
//     subcategory.classList.toggle("open");
//   }
// });

// Mobile icon and navigation links
// Existing mobile icon and navigation links
const mobileIcon = document.querySelector(".mobile-icon");
const navLinks = document.querySelector(".nav-links");

/* Toggle navLinks visibility when mobileIcon is clicked */
mobileIcon.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent interference with other click events
  navLinks.classList.toggle("open");
});

/* Select dropdown buttons and links */
const dropdownBtn = document.querySelectorAll(".dropdown-btn");
const dropdownList = document.querySelectorAll(".dropdown");

/* Function to determine if the screen is mobile */
function isMobile() {
  return window.innerWidth <= 768;
}

/* Add event listeners for toggling dropdown menus */
dropdownBtn.forEach((btn, index) => {
  btn.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent interference with other events

    // Only apply mobile dropdown toggle
    if (isMobile()) {
      const dropdownLinks = dropdownList[index].querySelector(".dropdown-links");

      // Toggle visibility of dropdown-links in mobile
      dropdownLinks.classList.toggle("open");

      // Rotate arrow icon for mobile
      const arrowIcon = btn.querySelector(".arrow");
      if (arrowIcon) {
        arrowIcon.classList.toggle("rotated");
      }

      // Close other dropdowns if any are open
      closeOtherDropdowns(dropdownLinks);
    } else {
      // Desktop behavior
      dropdownList[index].classList.toggle("open");
    }
  });
});

/* Mobile-specific function to toggle dropdowns */
function toggleInfo(arrowElement) {
  // Determine if we are on mobile
  if (!isMobile()) return; // Only run in mobile view

  const dropdownContent = arrowElement.nextElementSibling.querySelector(".dropdown-links");

  // Toggle the dropdown visibility
  dropdownContent.classList.toggle("open");

  // Toggle the arrow rotation
  const arrowIcon = arrowElement.querySelector(".arrow");
  if (arrowIcon) {
    arrowIcon.classList.toggle("rotated");
  }

  // Close other dropdowns if any are open
  closeOtherDropdowns(dropdownContent);
}

/* Updated closeOtherDropdowns to accept dropdown to keep open */
function closeOtherDropdowns(except) {
  document.querySelectorAll(".dropdown-links").forEach((dropdown) => {
    if (dropdown !== except) {
      dropdown.classList.remove("open");
    }
  });
}

/* Close all dropdowns when clicking outside */
document.addEventListener("click", () => {
  dropdownList.forEach((dropdown) => {
    const dropdownLinks = dropdown.querySelector(".dropdown-links");
    dropdownLinks.classList.remove("open");
  });
});



// ---------   toggle functionality for mobile footer --------------------//

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
// const mobileIcon = document.querySelector(".mobile-icon");
// const navLinks = document.querySelector(".nav-links");

// mobileIcon.addEventListener("click", () => {
//   navLinks.classList.toggle("open");
// });

// // Toggle dropdown content for mobile
// const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

// dropdownToggles.forEach((toggle) => {
//   toggle.addEventListener("click", () => {
//     const dropdownContent = toggle.nextElementSibling;

//     // Close other open dropdowns
//     document.querySelectorAll(".dropdown-content").forEach((content) => {
//       if (content !== dropdownContent) {
//         content.classList.remove("open");
//       }
//     });

//     // Toggle the clicked dropdown content
//     dropdownContent.classList.toggle("open");
//   });
// });




//-------- Toggle for menu on product page ------------//

function toggleInfo(arrowElement) {
  // Locate the next sibling element of the parent, which should be the product-info--hidden div
  const infoDiv = arrowElement.parentElement.nextElementSibling;
  const menuItem = arrowElement.parentElement;

  // Toggle the "show" class to reveal or hide the info section
  if (infoDiv && infoDiv.classList.contains("product-info--hidden")) {
    infoDiv.classList.toggle("show");
  }
  // Toggle the expanded border effect on the product-menu-item div
  menuItem.classList.toggle("expanded");

  // Optionally rotate the arrow icon to indicate the expanded/collapsed state
  arrowElement.classList.toggle("rotated");
}


