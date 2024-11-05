// Hämta produktbild
const productImg = document.querySelector(".product-img--large");

// Hämta färg-knappar
const colorBtn = document.querySelectorAll(".dot");

window.onload = function printColor() {
  const retrievedData = localStorage.getItem("json-products");
  const parsedJSON = JSON.parse(retrievedData);

  const cardDotContainer = document.querySelector(".card-dot-container");
  const colorBtn = document.querySelectorAll(".dot");

  for (product of parsedJSON) {
    let productId = new URLSearchParams(window.location.search).get("id");
    for (color of product.colors) {
      const dot = ` <input
        class="dot dot-color dot--large"
        type="button"
        aria-label="Färg 1"
        style="background-color: ${color.colorCode};"
      ></input>`;

      cardDotContainer.insertAdjacentHTML("afterbegin", dot);
    }
  }
};

// Hämta bild-knappar
const imgBtn = document.querySelectorAll(".product-img--small");
console.log(imgBtn);

// Eventlyssnare
imgBtn.forEach((img) => {
  img.addEventListener("click", changeImg);
});

colorBtn.forEach((btn) => {
  btn.addEventListener("click", active);
});

// Byter den stora produktbilden beroende på vilken liten produktbild som klickas på
function changeImg(e) {
  console.log(e.target);

  let imgSrc = e.target.getAttribute("src");
  productImg.setAttribute("src", imgSrc);
  console.log(imgSrc);
}

// Sätter styling på den aktivt valda färgen
// function active(e) {
//   colorBtn.forEach((btn) => {
//     btn.classList.remove("dot-active");
//   });
//   e.target.classList.add("dot-active");
// }
