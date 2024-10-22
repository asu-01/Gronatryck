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

/* Till för att toggla dropdown menyer */
for (let i = 0; i < dropdownBtn.length; i++) {
  dropdownBtn[i].addEventListener("click", () => {
    dropdownList[i].classList.toggle("open");
    // dropdownList[i].classList.remove("close");
  });

  dropdownList[i].addEventListener("click", () => {
    dropdownList[i].classList.remove("open");
  });
}

/* Dropdown för underkategori överdelar */

const expandBtn = document.getElementById("expand");
const subcategory = document.getElementById("subcategory");

function show() {}

expandBtn.addEventListener("click", (e) => {
  subcategory.classList.toggle("open");
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
