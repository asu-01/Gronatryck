
// Runs function when DOM content is loaded
document.addEventListener("DOMContentLoaded", changeData);

// Adds the correct data on the product page, depending on clicked produkt card.
function changeData(e) {
  let productId = new URLSearchParams(window.location.search).get("id");
  const retrievedData = localStorage.getItem("json-products");
  const parsedJSON = JSON.parse(retrievedData);
  // Get product image
  const largeImg = document.querySelector(".product-img-large");

  for (product of parsedJSON) {
    if (productId === product.articleId) {
      document.querySelector("h4").innerHTML = product.title;
      document.querySelector(
        ".card-dot-container p"
      ).innerHTML = `+${product.colors.length} färger`;
      largeImg.setAttribute("src", product.img);
      largeImg.setAttribute("alt", product.alt);

      const smallImg = document.querySelectorAll(".product-img-small");
      product.colors.forEach((colorImg, index) => {
        smallImg[index].setAttribute("src", colorImg.url);
        smallImg[index].setAttribute("alt", colorImg.alt);
      });
    }
  }
}
