// Hämta produktbild
const productImg = document.querySelector(".product-img--large");

const cardDotContainer = document.querySelector(".card-dot-container");
const cardDotText = document.querySelector(".card-dot-container p");

// console.log(cardDotContainer);

// Hämta färg-knappar
const colorBtn = document.querySelectorAll(".dot");

window.onload = function printColor() {
  const retrievedData = localStorage.getItem("json-products");
  const parsedJSON = JSON.parse(retrievedData);

  const colorBtn = document.querySelectorAll(".dot");

  for (product of parsedJSON) {
    let productId = new URLSearchParams(window.location.search).get("id");
    if (productId === product.articleId) {
      for (color of product.colors) {
        let inputElement = document.createElement("input");
        Object.assign(inputElement, {
          className: "dot dot-color dot--large",
          type: "button",
          value: `${color.colorName}`,
          ariaLabel: "färg",
          style: `background-color: ${color.colorCode} ;`,
        });

        inputElement.setAttribute("onclick", "changeColorImg(this.value)");

        cardDotContainer.prepend(inputElement);
      }
    }
  }
};

// Hämta bild-knappar
const imgBtn = document.querySelectorAll(".product-img--small");
// console.log(imgBtn);

// Eventlyssnare
imgBtn.forEach((img) => {
  img.addEventListener("click", changeImg);
});

// colorBtn.forEach((btn) => {
//   btn.addEventListener("click", active);
// });

// Byter den stora produktbilden beroende på vilken liten produktbild som klickas på
function changeImg(e) {
  console.log(e.target);

  let imgSrc = e.target.getAttribute("src");
  productImg.setAttribute("src", imgSrc);
  console.log(imgSrc);
}

function changeColorImg(value) {
  const retrievedData = localStorage.getItem("json-products");
  const parsedJSON = JSON.parse(retrievedData);
  let productId = new URLSearchParams(window.location.search).get("id");

  //   console.log("Hej", parsedJSON);
  for (product of parsedJSON) {
    if (productId === product.articleId) {
      for (color of product.colors) {
        if (value === color.colorName) {
          //   let currentColor = localStorage.getItem("color");
          //   let colorArray = [];
          //   colorArray = currentColor ? currentColor : [];
          //   colorArray.push(value);
          //   let colorName = localStorage.setItem("color", value);
          productImg.setAttribute("src", color.url);
        }
      }
    }
  }
}

//   let found = false;

//   for (product of parsedJSON) {
//     for (color of product.colors) {
//       if (value === color.colorName) {
//         productImg.setAttribute("src", color.url);
//         found = true;
//         break;
//       }
//     }
//     if (found) {
//       break;
//     }
//   }
//   console.log(value);
// }

// Sätter styling på den aktivt valda färgen
function active(e) {
  colorBtn.forEach((btn) => {
    // btn.classList.remove("dot-active");'
    btn.focus();
  });
  //   e.target.classList.add("dot-active");
}
