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
        colorName: "Beige",
        colorCode: "#cfb4a5",
        url: "visuals/img/products/gronatryck_beige_tshirt.jpg",
      },
      {
        colorName: "Vit",
        colorCode: "#ffffff",
        url: "visuals/img/products/gronatryck_white_tshirt.jpg",
      },
      {
        colorName: "Tegelröd",
        colorCode: "#913d23",
        url: "visuals/img/products/gronatryck_red_tshirt.jpg",
      },
    ],
    priceList: [
      {
        minAmount: 25,
        maxAmount: 49,
        price: 100,
      },
      {
        minAmount: 49,
        maxAmount: 99,
        price: 200,
      },
      {
        minAmount: 99,
        maxAmount: 249,
        price: 300,
      },
      {
        minAmount: 249,
        maxAmount: 499,
        price: 400,
      },
      {
        minAmount: 499,
        maxAmount: 1000,
        price: 500,
      },
    ],
  },
  {
    articleId: `${articleIdGenerator()}`,
    category: "Västar",
    title: "Varm väst",
    desc: "",
    img: "visuals/img/grona_tryck_card_4.jpg",
    colors: [
      {
        colorName: "Beige",
        colorCode: "#a6987e",
        url: "visuals/img/products/gronatryck_beige_vest.jpg",
      },
      {
        colorName: "Svart",
        colorCode: "#0f1112",
        url: "visuals/img/products/gronatryck_black_vest.jpg",
      },
    ],
    priceList: [
      {
        minAmount: 25,
        maxAmount: 49,
        price: 100,
      },
      {
        minAmount: 49,
        maxAmount: 99,
        price: 200,
      },
      {
        minAmount: 99,
        maxAmount: 249,
        price: 300,
      },
      {
        minAmount: 249,
        maxAmount: 499,
        price: 400,
      },
      {
        minAmount: 499,
        maxAmount: 1000,
        price: 500,
      },
    ],
  },
  {
    articleId: `${articleIdGenerator()}`,
    category: "Jackor",
    title: "Pufferjacka",
    desc: "",
    img: "visuals/img/grona_tryck_card_5.jpg",
    colors: [
      {
        colorName: "Camoflauge",
        colorCode: "#485942",
        url: "visuals/img/products/gronatryck_green_pufferjacket.jpg",
      },
      {
        colorName: "Turkos",
        colorCode: "#0a3837",
        url: "visuals/img/products/gronatryck_turquoise_pufferjacket.jpg",
      },
    ],
    priceList: [
      {
        minAmount: 25,
        maxAmount: 49,
        price: 100,
      },
      {
        minAmount: 49,
        maxAmount: 99,
        price: 200,
      },
      {
        minAmount: 99,
        maxAmount: 249,
        price: 300,
      },
      {
        minAmount: 249,
        maxAmount: 499,
        price: 400,
      },
      {
        minAmount: 499,
        maxAmount: 1000,
        price: 500,
      },
    ],
  },
  {
    articleId: `${articleIdGenerator()}`,
    category: "Sweatshirts",
    title: "Mysig sweatshirt",
    desc: "",
    img: "visuals/img/grona_tryck_card_3.jpg",
    colors: [
      {
        colorName: "Gräddvit",
        colorCode: "#e8e0ca",
        url: "visuals/img/products/gronatryck_cream_sweatshirt.jpg",
      },
      {
        colorName: "Mörkblå",
        colorCode: "#091933",
        url: "visuals/img/products/gronatryck_blue_sweatshirt.jpg",
      },
      {
        colorName: "Svart",
        colorCode: "#0f1112",
        url: "visuals/img/products/gronatryck_black_sweatshirt.jpg",
      },
    ],
    priceList: [
      {
        minAmount: 25,
        maxAmount: 49,
        price: 100,
      },
      {
        minAmount: 49,
        maxAmount: 99,
        price: 200,
      },
      {
        minAmount: 99,
        maxAmount: 249,
        price: 300,
      },
      {
        minAmount: 249,
        maxAmount: 499,
        price: 400,
      },
      {
        minAmount: 499,
        maxAmount: 1000,
        price: 500,
      },
    ],
  },
  {
    articleId: `${articleIdGenerator()}`,
    category: "Väskor",
    title: "Totebag",
    desc: "",
    img: "visuals/img/products/gronatryck_white_totebag.jpg",
    colors: [
      {
        colorName: "Vit",
        colorCode: "#ffffff",
        url: "visuals/img/products/gronatryck_white_totebag.jpg",
      },
    ],
    priceList: [
      {
        minAmount: 25,
        maxAmount: 49,
        price: 100,
      },
      {
        minAmount: 49,
        maxAmount: 99,
        price: 200,
      },
      {
        minAmount: 99,
        maxAmount: 249,
        price: 300,
      },
      {
        minAmount: 249,
        maxAmount: 499,
        price: 400,
      },
      {
        minAmount: 499,
        maxAmount: 1000,
        price: 500,
      },
    ],
  },
  {
    articleId: `${articleIdGenerator()}`,
    category: "Huvtröjor",
    title: "Huvtröja",
    desc: "",
    img: "visuals/img/grona_tryck_card_6.jpg",
    colors: [
      {
        colorName: "Ljusblå",
        colorCode: "#a5c6d4",
        url: "visuals/img/products/gronatryck_white_hoodie.jpg",
      },
      {
        colorName: "Rosa",
        colorCode: "#bf6d8f",
        url: "visuals/img/products/gronatryck_pink_hoodie.jpg",
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
  {
    articleId: `${articleIdGenerator()}`,
    category: "Jackor",
    title: "Jacka",
    desc: "",
    img: "visuals/img/grona_tryck_card_8.jpg",
    colors: [
      {
        colorName: "Beige",
        colorCode: "#b8aa91",
        url: "visuals/img/products/gronatryck_beige_jacket.jpg",
      },
      {
        colorName: "Blå",
        colorCode: "#2b579e",
        url: "visuals/img/products/gronatryck_blue_jacket.jpg",
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
  {
    articleId: `${articleIdGenerator()}`,
    category: "T-shirts",
    title: "Classic Bomull",
    desc: "",
    img: "visuals/img/grona_tryck_card_1.jpg",
    colors: [
      {
        colorName: "Vit",
        colorCode: "#ffffff",
        url: "visuals/img/grona_tryck_card_1.jpg",
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
              <p itemprop="category" class="text-color-dark text-sm">${
                result.category
              }</p>
              <h5 class="text-color-primary">${result.title}</h5>
              <div id="colorContainer" class="card-dot-container"> 
              ${result.colors
                .map(
                  (color, index) => `
                <input class="dot dot-color-${
                  index + 1
                }" type="button" aria-label="Färg ${
                    index + 1
                  }" style="background-color: ${color.colorCode};">
            `
                )
                .join("")}
                <p class="text-color-dark text-xs">+${
                  result.colors.length
                } färger</p>
              </div>
              <div class="card-price-container">
                <p class="text-color-medium text-sm">minimum 25 st.</p>
                <p class="text-color-dark text-sm">från ${
                  result.priceList[0].price
                } kr/st</p>
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
console.log(amountInput);

amountInput.addEventListener("input", getPrice);

// Eventlyssnare för +/- knappar i mängdfunktion
const amountBtn = document.querySelectorAll(".button-quantity button");
console.log(amountBtn);

amountBtn.forEach((btn) => {
  btn.addEventListener("click", getPrice);
});

// Hämtar rätt pris beroende på antal produkter (WIP)
function getPrice(e) {
  console.log(e);

  // Loopar igenom alla produkter i objekt och loopar igenom pris arrayen.
  parsedJSON.forEach((product) => {
    for (const priceItem of product.priceList) {
      let amount = amountInput.value;
      // Antal produkter jämförs gentemot prismängds intervallet som finns i objektet och läggs in på sidan.
      if (priceItem.minAmount <= amount && priceItem.maxAmount >= amount) {
        document.querySelector(
          "h5"
        ).innerHTML = `Estimerat pris: ${priceItem.price}kr`;
      }
    }
  });
}
