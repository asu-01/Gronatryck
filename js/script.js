// Artikel nummer generator som börjar på 1000
let nextId = 1000;
function articleIdGenerator() {
  return nextId++;
}

// JavaScript med produktinformation
const JSONdata = [
  {
    article: `${articleIdGenerator()}`,
    category: "T-shirt",
    title: "Classic Bomull",
    // desc: "",
    img: {
      Röd: "visuals/img/grona_tryck_card_2.jpg",
      Beige: "visuals/img/t-shirt/gronatryck_product_2.jpg",
      Vit: "visuals/img/t-shirt/gronatryck_product_3.jpg",
    },
    color: ["Röd", "Beige", "Vit", "Rosa"],
    prices: [
      {
        minAmount: 50,
        maxAmount: 99,
        price: 200,
      },
      {
        minAmount: 100,
        maxAmount: 249,
        price: 200,
      },
      {
        minAmount: 250,
        maxAmount: 499,
        price: 200,
      },
      {
        minAmount: 500,
        price: 200,
      },
    ],
  },
  {
    article: `${articleIdGenerator()}`,
    category: "Västar",
    title: "Test",
    // desc: "",
    img: {
      Röd: "visuals/img/grona_tryck_card_4.jpg",
      Beige: "visuals/img/t-shirt/gronatryck_product_2.jpg",
      Vit: "visuals/img/t-shirt/gronatryck_product_3.jpg",
    },
    color: ["Röd", "Beige", "Vit"],
    prices: [
      {
        minAmount: 50,
        maxAmount: 99,
        price: 200,
      },
      {
        minAmount: 100,
        maxAmount: 249,
        price: 300,
      },
      {
        minAmount: 250,
        maxAmount: 499,
        price: 400,
      },
      {
        minAmount: 500,
        maxAmount: 1000,
        price: 500,
      },
    ],
  },
];

// JavaScript objektet konverteras till en JSON sträng och sparas ned localStorage som json-products.
localStorage.setItem("json-products", JSON.stringify(JSONdata));

// Skriver ut cards med produktdata på hemsidan när den laddas
window.onload = function printData() {
  const cardContainer = document.querySelector(".catalogue-products");
  const retrievedData = localStorage.getItem("json-products");
  const parsedJSON = JSON.parse(retrievedData);

  parsedJSON.forEach((result) => {
    const content = `<div id="${result.article}" class="card">
          <a href="product.html?id=${result.article}">
            <img
              src="${Object.values(result.img)[0]}"
              class="card-img-top"
              title="Vit t-shirt i bomull"
              alt="En tjej klädd i en vit t-shirt"
            />
            <img
              class="card-news-icon"
              src="/visuals/icons/product_news_icon.svg"
              alt="Klädnyhet!"
            />
            <div class="card-body card__body--popular">
              <p class="text-color-dark text-sm">${result.category}</p>
              <h5 class="text-color-primary">${result.title}</h5>
              <div class="card-dot-container">
                <button
                  class="dot dot-color-1"
                  type="button"
                  aria-label="Färg 1"
                ></button>
                <button
                  class="dot dot-color-2"
                  type="button"
                  aria-label="Färg 2"
                ></button>
                <button
                  class="dot dot-color-3"
                  type="button"
                  aria-label="Färg 3"
                ></button>
                <p class="text-color-dark text-xs">+${
                  result.color.length
                } färger</p>
              </div>
              <div class="card-price-container">
                <p class="text-color-medium text-sm">minimum 25 st.</p>
                <p class="text-color-dark text-sm">från ${
                  result.prices[0].price
                } kr/st</p>
              </div>
            </div>
          </a>
        </div>`;

    cardContainer.innerHTML += content;
  });
};

// let minAmount = prices.map((a) => a.minAmount);
// let maxAmount = prices.map((a) => a.maxAmount);

const retrievedData = localStorage.getItem("json-products");
const parsedJSON = JSON.parse(retrievedData);

const amountBtn = document.querySelectorAll(".button-quantity button");
console.log(amountBtn);

const amountInput = document.querySelector(".input-box");

amountInput.addEventListener("input", getPrice);

amountBtn.forEach((btn) => {
  btn.addEventListener("click", getPrice);
});

// console.log(amount);

// Hämtar rätt pris beroende på antal produkter (WIP)
function getPrice() {
  parsedJSON.forEach((product) => {
    const priceList = product.prices;
    for (const priceItem of priceList) {
      let amount = amountInput.value;
      if (priceItem.minAmount < amount && amount < priceItem.maxAmount) {
        document.querySelector(
          "h5"
        ).innerHTML = `Estimerat pris: ${priceItem.price}kr`;
      }
    }
  });
}

// const largeImg = document.querySelector(".product-img--large");
// const smallImg = document.querySelectorAll(".product-img--small");
// const dot = document.querySelectorAll(".dot-color");
// const priceDisplay = document.querySelector("h5");

/* Lägger till rätt data på produktsida beroende på klickat card */

document.addEventListener("DOMContentLoaded", changeData);

function changeData(e) {
  for (product of parsedJSON) {
    let productId = new URLSearchParams(window.location.search).get("id");
    if (productId === product.article) {
      document.querySelector("h4").innerHTML = product.title;
      document.querySelector(
        ".card-dot-container p"
      ).innerHTML = `+${product.color.length} färger`;
    }
  }
}

/* Lägg till i produktlista */
function addToCart() {
  let productId = new URLSearchParams(window.location.search).get("id");
}

/* Sparar ner tillagda produkter i localstorage */
function saveCartData() {}

// Gör JSON-objekt till modul för att kunnas användas på andra sidor.
// module.exports = JSONdata;

// JSON data hämtas från localStorage.

/*
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

*/

// for (const product of productArray) {
//   const valueArray = Object.values(product);
//   for (const value of valueArray) {
//     const dataPlaceHolder = document.createElement("p");
//     dataPlaceHolder.innerHTML = value;
//     // document.getElementById("body").appendChild(dataPlaceHolder);
//   }
// }

// const amountTest = 32;
// const articleIdTest = 1000;

// // Funktion för att hämta ut rätt pris baserat på mängd, WIP.
// function getPrice() {
//   for (product of productArray) {
//     console.log(product.article);
//   }
// }

// Jag vill ha ut priset för en specifik artikel baserad på antalet produkter som en användare klickar i.

// getPrice();
