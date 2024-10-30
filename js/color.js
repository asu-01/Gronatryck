// Hämta produktbild
const productImg = document.querySelector(".product-img--large");

// Hämta färg-knappar
const colorBtn = document.querySelectorAll(".dot");
console.log(colorBtn);

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
function active(e) {
  colorBtn.forEach((btn) => {
    btn.classList.remove("dot-active");
  });
  e.target.classList.add("dot-active");
}
