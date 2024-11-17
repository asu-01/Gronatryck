// Get product image
const productImg = document.querySelector(".product-img-large");

// Get img buttons
const imgBtn = document.querySelectorAll(".product-img-small");

// Add eventlistener on each small product image.
imgBtn.forEach((img) => {
  img.addEventListener("click", changeImg);
});

modelImage = productImg.getAttribute("src");

// Change the product image depending on what small product image is clicked.
function changeImg(e) {
  console.log(e.target);

  let modelImage = productImg.getAttribute("src");
  let targetImgSrc = e.target.getAttribute("src");

  productImg.setAttribute("src", targetImgSrc);
  e.target.setAttribute("src", modelImage);
  e.target.classList.add("product-display-img");
}

/* For changing img based on selected color and saving the 
selected color to display in alertbox */
function changeColorImg(value) {
  const retrievedData = localStorage.getItem("json-products");
  const parsedJSON = JSON.parse(retrievedData);
  let productId = new URLSearchParams(window.location.search).get("id");

  for (const product of parsedJSON) {
    if (productId === product.articleId) {
      for (const color of product.colors) {
        if (value === color.colorName) {
          let modelImg = productImg.getAttribute("src");
          productImg.setAttribute("src", color.url);

          imgBtn.forEach((img) => {
            if (img.getAttribute("src") === color.url) {
              img.setAttribute("src", modelImg);
              img.classList.add("product-display-img");
            }
          });

          // Save the selected color to localStorage without calling showAlertBox
          localStorage.setItem("selectedColor", color.colorName);
        }
      }
    }
  }
}

function printColor() {
  const retrievedData = localStorage.getItem("json-products");
  const parsedJSON = JSON.parse(retrievedData);
  const cardDotContainer = document.querySelector(
    ".product-container .card-dot-container"
  );

  // Find the current product based on the URL `id` parameter
  let productId = new URLSearchParams(window.location.search).get("id");
  const product = parsedJSON.find((item) => item.articleId === productId);

  if (product && cardDotContainer) {
    // Add color dots dynamically
    product.colors.forEach((color, index) => {
      let inputElement = document.createElement("input");
      Object.assign(inputElement, {
        className: "dot dot-color dot-large",
        type: "button",
        ariaLabel: `färg ${index + 1}`,
        style: `background-color: ${color.colorCode};`,
      });
      inputElement.addEventListener("click", () =>
        changeColorImg(color.colorName)
      );
      cardDotContainer.prepend(inputElement);
    });
  }
}

function changeColorImg(value) {
  const retrievedData = localStorage.getItem("json-products");
  const parsedJSON = JSON.parse(retrievedData);
  let productId = new URLSearchParams(window.location.search).get("id");
  const productImg = document.querySelector(".product-img-large");

  const product = parsedJSON.find((item) => item.articleId === productId);
  if (product) {
    const selectedColor = product.colors.find(
      (color) => color.colorName === value
    );
    if (selectedColor) {
      productImg.setAttribute("src", selectedColor.url);
      localStorage.setItem("selectedColor", selectedColor.colorName);
    }
  }
}

// Call printColor directly
printColor();
