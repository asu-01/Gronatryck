// Kontroll av beställningsobjekt
// console.log(productListData);

// Loopar igenom tillagda produkter och skriver ut i beställningslista

document.addEventListener("DOMContentLoaded", runFunctions);

function loadListData() {
  // Hämtar tillagda produkter
  const JsonData = localStorage.getItem("cart-products");
  const productListData = JSON.parse(JsonData);

  for (product of productListData) {
    const productListContainer = document.querySelector(".order-list");

    const productItem = ` 
      <div class="order-list-item">
          <div class="item-wrapper">
              <div class="item-image ">
                  <img class="round-corner" src="${product.img}" />
              </div>
              <div class="item-group-1">
                  <h6 class="bold">${product.title}</h6>
                  <p>Färg: Ljusgrå</p>
                  <div class="button-quantity">
                      <button class="minus" aria-label="Decrease">&minus;</button>
                      <input
                      type="number"
                      class="input-box"
                      value="${product.amount}"
                      min="10"
                      max="100"
                      name="amount"
                      />
                      <button class="plus" aria-label="Increase">&plus;</button>
                  </div>
                  <!-- <form class="amount">
                      <div class="amount-decrease"><img src="/visuals/icons/gronatryck_icon_minus (1).svg" /></div>
                      <input type="text" class="amount-input" value="0"></input>
                      <div class="amount-increase"><img src="/visuals/icons/gronatryck_icon_plus (1).svg" /></div>
                  </form> -->
              </div>
          </div>
          <div class="item-group-2">
              <button id="${product.id}" class="item-delete" onclick="removeFromList(this.id)">Ta bort</button>
              <p class="bold">${product.price} kr</p>
          </div>
      </div> 
      <hr class=""></hr>
      `;

    productListContainer.innerHTML += productItem;
  }
}

// Spara ner produkter som är tillagda i beställningslista i localstorage (WIP)
function addToList() {
  let productId = new URLSearchParams(window.location.search).get("id");

  // Hämtar alla produktval som användaren matat in på produktsidan
  let productAmount = amountInput.value;
  // let productColor = document.querySelector(".dot-color").style.backgroundColor;
  let productTitle = document.getElementById("articleName").textContent;
  let productPrice = document
    .querySelector(".product-text-container h5")
    .textContent.match(/(\d+)/)[0];

  let productImg = document
    .querySelector(".product-img-container img")
    .getAttribute("src");

  // Valda värden samlas ihop till ett objekt
  let product = {
    id: productId,
    img: productImg,
    title: productTitle,
    // color: productColor,
    amount: productAmount,
    price: productPrice,
  };

  // Redan existerande JSON data i beställningslista hämtas och konverteras
  let currentCartData = localStorage.getItem("cart-products");
  currentCartData = JSON.parse(currentCartData);

  cartProducts = [];

  console.log(cartProducts);

  /* Kontrollerar om beställningslistan innehåller något sen tidigare, 
    om sant ersätts behålls den gamla, om falskt skapas en ny tom array. */
  cartProducts = currentCartData ? currentCartData : [];

  // Den tillagda produkten läggs till i en ny tom lista eller i den föregående.
  cartProducts.push(product);
  localStorage.setItem("cart-products", JSON.stringify(cartProducts));
  //   loadListData();
}

// Funktion till för att ta bort specifik produkt från lista
function removeFromList(id) {
  const JsonData = localStorage.getItem("cart-products");
  const productListData = JSON.parse(JsonData);
  console.log(id);

  // Filtrera ut produkten som har tagits bort.
  let updatedList = productListData.filter(function (array) {
    return array.id !== id;
  });

  console.log(updatedList);

  // Uppdatera cart-products med lista
  localStorage.setItem("cart-products", JSON.stringify(updatedList));
  //   loadListData();
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
