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
    img: "visuals/img/products/gronatryck_card_2.jpg",
    alt: "En kille med tegelröd t-shirt",
    colors: [
      {
        colorName: "Beige",
        colorCode: "#cfb4a5",
        url: "visuals/img/products/gronatryck_beige_tshirt.jpg",
        alt: "En beige t-shirt",
      },
      {
        colorName: "Vit",
        colorCode: "#ffffff",
        url: "visuals/img/products/gronatryck_white_tshirt.jpg",
        alt: "En vit t-shirt",
      },
      {
        colorName: "Tegelröd",
        colorCode: "#913d23",
        url: "visuals/img/products/gronatryck_red_tshirt.jpg",
        alt: "En vit t-shirt",
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
    img: "visuals/img/products/gronatryck_card_4.jpg",
    alt: "En tjej och kille med en mjuk beige väst, med hög krage och en ficka framtill",
    colors: [
      {
        colorName: "Beige",
        colorCode: "#a6987e",
        url: "visuals/img/products/gronatryck_beige_vest.jpg",
        alt: "En mjuk beige väst, med hög krage och en ficka framtill",
      },
      {
        colorName: "Svart",
        colorCode: "#0f1112",
        url: "visuals/img/products/gronatryck_black_vest.jpg",
        alt: "En mjuk svart väst, med hög krage och en ficka framtill",
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
    img: "visuals/img/products/gronatryck_card_5.jpg",
    alt: "En tjej med en pufferjacka i turkos med huva och dragkedja",
    colors: [
      {
        colorName: "Camoflauge",
        colorCode: "#485942",
        url: "visuals/img/products/gronatryck_green_pufferjacket.jpg",
        alt: "En pufferjacka i militärgrön med huva och dragkedja",
      },
      {
        colorName: "Turkos",
        colorCode: "#0a3837",
        url: "visuals/img/products/gronatryck_turquoise_pufferjacket.jpg",
        alt: "En pufferjacka i turkos med huva och dragkedja",
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
    img: "visuals/img/products/gronatryck_card_3.jpg",
    alt: "En tjej och en kille med gräddvita sweatshirts",
    colors: [
      {
        colorName: "Gräddvit",
        colorCode: "#e8e0ca",
        url: "visuals/img/products/gronatryck_cream_sweatshirt.jpg",
        alt: "En gräddvit sweatshirt",
      },
      {
        colorName: "Mörkblå",
        colorCode: "#091933",
        url: "visuals/img/products/gronatryck_blue_sweatshirt.jpg",
        alt: "En mörkblå sweatshirt",
      },
      {
        colorName: "Svart",
        colorCode: "#0f1112",
        url: "visuals/img/products/gronatryck_black_sweatshirt.jpg",
        alt: "En svart sweatshirt",
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
    alt: "En tjej med en totebag, hängades över axeln",
    colors: [
      {
        colorName: "Vit",
        colorCode: "#ffffff",
        url: "visuals/img/products/gronatryck_white_totebag.jpg",
        alt: "En vit totebag",
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
    img: "visuals/img/products/gronatryck_card_6.jpg",
    alt: "Två tjejer med croppad huvtröja",
    colors: [
      {
        colorName: "Ljusblå",
        colorCode: "#a5c6d4",
        url: "visuals/img/products/gronatryck_white_hoodie.jpg",
        alt: "En ljusblå croppad huvtröja",
      },
      {
        colorName: "Rosa",
        colorCode: "#bf6d8f",
        url: "visuals/img/products/gronatryck_pink_hoodie.jpg",
        alt: "En rosa croppad huvtröja",
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
    img: "visuals/img/products/gronatryck_card_8.jpg",
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
    img: "visuals/img/products/gronatryck_card_1.jpg",
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
