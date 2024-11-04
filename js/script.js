// Artikel nummer generator som börjar på 1000
let nextId = 1000;
function articleIdGenerator() {
  return nextId++;
}

// JavaScript med produktinformation
const JSONdata = [
  {
    articleId: `${articleIdGenerator()}`,
    category: "T-shirts",
    title: "Classic Bomull",
    desc: "",
    img: "visuals/img/grona_tryck_card_2.jpg",
    colors: [
      {
        colorName: "Tegelröd",
        colorCode: "#9c441f",
        url: "visuals/img/grona_tryck_card_2.jpg",
      },
      {
        colorName: "Beige",
        colorCode: "#a6927e",
        url: "visuals/img/grona_tryck_card_2.jpg",
      },
    ],
    priceList: [
      {
        minAmount: 25,
        maxAmount: 49,
        price: 100,
      },
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
        price: 500,
      },
    ],
  },
  {
    articleId: `${articleIdGenerator()}`,
    category: "Västar",
    title: "Test",
    desc: "",
    img: "visuals/img/grona_tryck_card_4.jpg",
    colors: [
      {
        colorName: "Tegelröd",
        colorCode: "#9c541f",
        url: "visuals/img/grona_tryck_card_2.jpg",
      },
      {
        colorName: "Beige",
        colorCode: "#a6987e",
        url: "visuals/img/grona_tryck_card_2.jpg",
      },
    ],
    priceList: [
      {
        minAmount: 25,
        maxAmount: 49,
        price: 100,
      },
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
    // const item = result["color"].forEach((item) => item.url);

    const content = `<div id="${result.articleId}" class="card">
          <a href="product.html?id=${result.articleId}">
            <img
              src="${result.img}"
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
              <div id="colorContainer" class="card-dot-container"> 
                <input
                  class="dot dot-color"
                  type="button"
                  aria-label="Färg 1"
                ></input>
                <input
                  class="dot dot-color"
                  type="button"
                  aria-label="Färg 2"
                ></input>
                <input
                  class="dot dot-color"
                  type="button"
                  aria-label="Färg 3"
                ></input>
                <p class="text-color-dark text-xs">+${result.colors.length} färger</p>
              </div>
              <div class="card-price-container">
                <p class="text-color-medium text-sm">minimum 25 st.</p>
                <p class="text-color-dark text-sm">från ${result.priceList[0].price} kr/st</p>
              </div>
            </div>
          </a>
        </div>`;

    cardContainer.innerHTML += content;

    // for (color of result.colors) {
    //   console.log(color);
    //   const colorDot = (document.querySelector(
    //     ".dot-color"
    //   ).style.backgroundColor = color.colorCode);

    //   console.log(colorDot);
    // }
  });
};

const retrievedData = localStorage.getItem("json-products");
const parsedJSON = JSON.parse(retrievedData);

// Eventlyssnare för input i mängdfunktion
const amountInput = document.querySelector(".input-box");
amountInput.addEventListener("input", getPrice);

// Eventlyssnare för +/- knappar i mängdfunktion
const amountBtn = document.querySelectorAll(".button-quantity button");
console.log(amountBtn);

amountBtn.forEach((btn) => {
  btn.addEventListener("click", getPrice);
});

// Hämtar rätt pris beroende på antal produkter (WIP)
function getPrice() {
  // Loopar igenom alla produkter i objekt och loopar igenom pris arrayen.
  parsedJSON.forEach((product) => {
    const prices = product.priceList;
    for (const priceItem of prices) {
      let amount = amountInput.value;
      // Antal produkter jämförs gentemot prismängds intervallet som finns i objektet och läggs in på sidan.
      if (priceItem.minAmount <= amount && amount <= priceItem.maxAmount) {
        document.querySelector(
          "h5"
        ).innerHTML = `Estimerat pris: ${priceItem.price}kr`;
      }
    }
  });
}

// Lägger till rätt data på produktsida beroende på valt produktcard (WIP)

document.addEventListener("DOMContentLoaded", changeData);

function changeData(e) {
  for (product of parsedJSON) {
    let productId = new URLSearchParams(window.location.search).get("id");
    if (productId === product.article) {
      document.querySelector("h4").innerHTML = product.title;
      document.querySelector(
        ".card-dot-container p"
      ).innerHTML = `+${product.color.length} färger`;
      // document.querySelectorAll(".dot-color").style.backgroundColor = ;
    }
  }
}
