// ---------  Hamburger icon and navigation links ------ //
 
const hamburgerIcon = document.querySelector(".hamburger-icon");
const navLinks = document.querySelector(".nav-links");

/* Toggle navLinks visibility when hamburgerIcon is clicked */
hamburgerIcon.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent interference with other click events
  navLinks.classList.toggle("open");
});

/* Select dropdown buttons and links */
const dropdownBtn = document.querySelectorAll(".dropdown-btn");
const dropdownLists = document.querySelectorAll(".dropdown");

// Function to determine if the screen is mobile
function isMobile() {
  return window.innerWidth <= 768;
}

// Add event listeners for toggling dropdown menus
dropdownBtn.forEach((btn, index) => {
  btn.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent interference with other events

    // If on mobile
    if (isMobile()) {
      const dropdown = dropdownLists[index];
      dropdown.classList.toggle("open");

      const dropdownLinksSections = dropdown.querySelectorAll(".dropdown-links");
      dropdownLinksSections.forEach((section) => {
        section.classList.toggle("open"); // Toggle visibility of all links
      });

      // Rotate arrow icon for mobile
      const arrowIcon = btn.querySelector(".arrow");
      if (arrowIcon) {
        arrowIcon.classList.toggle("rotated");
      }

      // Adjust the height of the nav container if dropdown is opened
      const nav = document.querySelector(".nav");
      if (dropdown.classList.contains("open")) {
        nav.style.height = `${nav.scrollHeight}px`; // Expand to fit content
      } else {
        nav.style.height = ""; // Reset height to auto
      }

      // Close other dropdowns
      closeOtherDropdowns(index);
    } else {
      // Handle desktop dropdown toggle
      const dropdown = dropdownLists[index];
      dropdown.classList.toggle("open");
    }
  });
});

// Close other dropdowns when one is opened
function closeOtherDropdowns(openIndex) {
  dropdownBtn.forEach((btn, index) => {
    if (index !== openIndex) {
      const dropdown = dropdownLists[index];
      dropdown.classList.remove("open");

      const dropdownLinksSections = dropdown.querySelectorAll(".dropdown-links");
      dropdownLinksSections.forEach((section) => {
        section.classList.remove("open"); // Hide all dropdown links for closed dropdowns
      });

      // Reset arrow rotation for closed dropdowns
      const arrowIcon = btn.querySelector(".arrow");
      if (arrowIcon) {
        arrowIcon.classList.remove("rotated");
      }
    }
  });
}

// Close all dropdowns when clicking outside
document.addEventListener("click", (event) => {
  if (!navLinks.contains(event.target) && !hamburgerIcon.contains(event.target)) {
    dropdownLists.forEach((dropdown) => {
      dropdown.classList.remove("open");
      const dropdownLinks = dropdown.querySelectorAll(".dropdown-links");
      dropdownLinks.forEach((section) => {
        section.classList.remove("open");
      });
    });
  }
});




// ---------   Mobile footer menu --------------------//

function toggleLinks(linkId) {
  const links = document.getElementById(linkId);
  const arrow = links.previousElementSibling.querySelector('.arrow'); // Get the arrow icon

  if (links.style.display === "none" || links.style.display === "") {
    links.style.display = "flex"; // Show the links
    arrow.classList.add('rotated'); // Rotate the arrow
  } else {
    links.style.display = "none"; // Hide the links
    arrow.classList.remove('rotated'); // Reset the rotation
  }
}





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


