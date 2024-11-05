console.log(productImg);

// Lägger till rätt data på produktsida beroende på valt produktcard (WIP)

document.addEventListener("DOMContentLoaded", changeData);

function changeData(e) {
  let productId = new URLSearchParams(window.location.search).get("id");
  const retrievedData = localStorage.getItem("json-products");
  const parsedJSON = JSON.parse(retrievedData);
  // Hämta produktbild
  const largeImg = document.querySelector(".product-img--large");

  for (product of parsedJSON) {
    if (productId === product.articleId) {
      document.querySelector("h4").innerHTML = product.title;
      document.querySelector(
        ".card-dot-container p"
      ).innerHTML = `+${product.colors.length} färger`;
      largeImg.setAttribute("src", product.img);

      const smallImg = document.querySelectorAll(".product-img--small");

      for (color of product.colors) {
        console.log(color.url);

        smallImg.forEach((img) => {
          img.src = color.url;
        });
      }
    }
  }
}

// function changeSmallImg() {
//   let productId = new URLSearchParams(window.location.search).get("id");
//   const retrievedData = localStorage.getItem("json-products");
//   const parsedJSON = JSON.parse(retrievedData);
//   const smallImg = document.querySelectorAll(".product-img--small");

//   for (product of parsedJSON) {
//     if (productId === product.articleId) {
//       for (color of product.colors) {
//         for (img of smallImg) {
//           img.setAttribute("src", color.url);
//         }
//       }
//     }
//   }

//   product.colors.forEach((color) => {
//     const smallImg = document.querySelectorAll(".product-img--small");
//     for (let i = 0; i < smallImg.length; i++) {
//       smallImg[i].setAttribute("src", color.url);
//     }
//   });
// }
