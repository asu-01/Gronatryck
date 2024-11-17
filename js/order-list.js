

// Funcion runs on DOMContentLoaded
document.addEventListener("DOMContentLoaded", runFunctions);

// Loops through added products and prints the order list on the page.
function loadListData() {
  // Retrieve object with added products from Localstorage.
  const JsonData = localStorage.getItem("cart-products");
  const productListData = JSON.parse(JsonData);

  // Loop through added products
  for (product of productListData) {
    const productListContainer = document.querySelector(".order-list");

    let listItem = document.createElement("article");
    let line = document.createElement("hr");
    listItem.classList.add("order-list-item");

    const productContent = ` 
        <div class="item-wrapper">
            <div class="item-image ">
                <img class="round-corner" src="${product.img}" alt="" />
            </div>
            <div class="item-group-1">
                <h6 class="bold">${product.title}</h6>
                <p>Färg: ${product.color}</p> <!-- Ensure product.color reflects the chosen color -->
                <div class="button-quantity">
                    <button class="minus" onclick="decreaseAmount()" aria-label="Minska">&minus;</button>
                    <input
                    id="quantityInput"
                    class="input-box"
                    type="number"
                    aria-label="Markera fältet, skriv in eller använd tangenter för att ändra mängd"
                    value="${product.amount}"
                    min="10"
                    max="100"
                    name="amount"
                    />
                    <button class="plus" onclick="increaseAmount()" aria-label="Öka">&plus;</button>
                </div>
            </div>
        </div>
        <div class="item-group-2">
            <button id="${product.id}" class="item-delete" onclick="removeFromList(this.id)">Ta bort</button>
            <p class="bold">${product.price} kr</p>
        </div>
    `;

    listItem.innerHTML = productContent;
    productListContainer.prepend(listItem);
    listItem.after(line);
  }
}

// Save products added to the orderlist to localstorage
function addToList() {
  let productId = new URLSearchParams(window.location.search).get("id");
  let productColor = localStorage.getItem("selectedColor"); // Retrieve the selected color

  // Retrieve all user choiches from the product page.
  let productAmount = amountInput.value;
  let productTitle = document.getElementById("articleName").textContent;
  let productPrice = document
    .querySelector(".product-text-container h5")
    .textContent.match(/(\d+)/)[0];

  let productImg = document
    .querySelector(".product-img-container img")
    .getAttribute("src");

  console.log(productColor);

  // Choosen values are added to a object.
  let product = {
    id: productId,
    img: productImg,
    title: productTitle,
    color: productColor || "Unknown Color",
    amount: productAmount,
    price: productPrice,
  };

  console.log(product);

  // Already existing JSON data in the orderlist is retrieved and converted.
  let currentCartData = localStorage.getItem("cart-products");
  currentCartData = JSON.parse(currentCartData);

  cartProducts = [];
    
  /* if the orderlist contains anything from earlier, then the old one is kept, if not 
  a new empty array is created.*/
  cartProducts = currentCartData ? currentCartData : [];

  console.log(cartProducts);

  // The added product is placed in the empty array or the previous order list.
  cartProducts.push(product);
  localStorage.setItem("cart-products", JSON.stringify(cartProducts));
}

// Function used to remove specific product from orderlist.
function removeFromList(id) {
  const JsonData = localStorage.getItem("cart-products");
  const productListData = JSON.parse(JsonData);
  console.log(id);

  const index = productListData.findIndex((articleId) => articleId.id === id);
  productListData.splice(index, 1);

  // Filtrera ut produkten som har tagits bort.
  //   let updatedList = productListData.filter(function (array) {
  //     return array.id !== id;
  //   });

  console.log(productListData);
  document.querySelector(".order-list").innerHTML = "";

  // Uppdatera cart-products med lista
  localStorage.setItem("cart-products", JSON.stringify(productListData));
  loadListData();
}

function calculatePrice() {
  let currentCartData = localStorage.getItem("cart-products");
  currentCartData = JSON.parse(currentCartData);
  let totalPrice = 0;

  currentCartData.forEach((product) => {
    totalPrice += Number(product.price);
  });

  const totalPriceContainer = document.getElementById("totalPrice");
  totalPriceContainer.innerHTML = `${totalPrice} kr`;
}

function runFunctions() {
  loadListData();
  calculatePrice();
}
