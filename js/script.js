// Artikel nummer generator som börjar på 1000
let nextId = 1000;
function articleIdGenerator() {
  return nextId++;
}

// JavaScript med produktinformation
const JSONdata = {
  products: [
    {
      article: `${articleIdGenerator()}`,
      title: "Fleecetröja",
      color: "Röd",
      size: "S",
      prices: {
        25: 563,
        50: 570,
        100: 563,
        250: 478,
        500: 450,
      },
    },
    {
      article: `${articleIdGenerator()}`,
      title: "T-shirt",
      color: "Vit",
      size: "L",
      prices: {
        25: 563,
        50: 570,
        100: 563,
        250: 478,
        500: 450,
      },
    },
    {
      article: `${articleIdGenerator()}`,
      title: "Keps",
      color: "Svart",
      size: "M",
      prices: {
        25: 563,
        50: 570,
        100: 563,
        250: 478,
        500: 450,
      },
    },
  ],
};

// JavaScript objektet konverteras till en JSON sträng och sparas ned localStorage som json-products.
localStorage.setItem("json-products", JSON.stringify(JSONdata));

// JSON data hämtas från localStorage.
const retrievedData = localStorage.getItem("json-products");
console.log(retrievedData);

// Lägg till data
function add(value) {
  var retrievedData = localStorage.getItem("json-products");

  retrievedData = retrievedData ? JSON.parse(retrievedData) : {};

  retrievedData.products.push(value);

  localStorage.setItem("json-products", JSON.stringify(retrievedData));
}

// Test för att se om det går att lägga till data.
add({
  article: `${articleIdGenerator()}`,
  title: "Byxor",
  color: "Beige",
  size: "L",
  prices: {
    25: 563,
    50: 570,
    100: 563,
    250: 478,
    500: 450,
  },
});

// Kontrollerar lista efter produkt har lagts till
const UpdatedList = localStorage.getItem("json-products");
console.log(UpdatedList);

// JSON sträng konverteras till JavaScript objekt för att kunna komma åt datan.
const parsedJSON = JSON.parse(UpdatedList);

// Hämtar element
const p = document.getElementById("productInfo");

// Array med produkter, återanvänds på flera ställen därav variabeln.
const productArray = parsedJSON.products;

const amountTest = 32;
const articleIdTest = 1000;

// Funktion för att hämta ut rätt pris baserat på mängd, WIP.
function getPrice() {
  for (product of productArray) {
    console.log(product.article);
  }
}

// Jag vill ha ut priset för en specifik artikel baserad på antalet produkter som en användare klickar i.

getPrice();

// Skriver ut data på hemsidan

for (const product of productArray) {
  const valueArray = Object.values(product);
  for (const value of valueArray) {
    const dataPlaceHolder = document.createElement("p");
    dataPlaceHolder.innerHTML = value;
    // document.getElementById("body").appendChild(dataPlaceHolder);
  }
}

// for (let i = 0; i < productArray.length; i++) {}

// Ta bort data
// localStorage.removeItem() ta bort utifrån key.

// Uppdatera data
// localStorage.setItem()

/* Dropdown sortiment */
const dropdownBtn = document.getElementById("dropdownContainer");
const dropdownList = document.getElementById("dropdownList");

dropdownBtn.addEventListener("mouseenter", () => {
  dropdownList.style.display = "block";
});

dropdownBtn.addEventListener("mouseleave", () => {
  dropdownList.style.display = "none";
});

/* Dropdown överdelar */

const expandBtn = document.getElementById("expand");
const subcategory = document.getElementById("subcategory");

function show() {}

expandBtn.addEventListener("click", (e) => {
  subcategory.classList.toggle("open");
});

// ----------------    animation grid css 'vilka är vi' --------------------//

// document.addEventListener("DOMContentLoaded", () => {
//   // Get all thumbnail images
//   const thumbnails = document.querySelectorAll(".thumbnail-image");
//   const container = document.querySelector(".thumbnail-container");

//   thumbnails.forEach((thumbnail) => {
//     thumbnail.addEventListener("click", function () {
//       // Remove the "large" class from all images
//       thumbnails.forEach((img) =>
//         img.classList.remove("thumbnail-image--large")
//       );

//       // Add the "large" class to the clicked image
//       this.classList.add("thumbnail-image--large");

//       // Reorder images: move clicked image to the first position
//       container.prepend(this);
//     });
//   });
// });
// ----------------    toggle functionality for mobile footer --------------------//

function toggleLinks(linkId) {
  const links = document.getElementById(linkId);
  if (links.style.display === "none" || links.style.display === "") {
    links.style.display = "flex"; // Show the links
  } else {
    links.style.display = "none"; // Hide the links
  }
}

