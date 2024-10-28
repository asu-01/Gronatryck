// Artikel nummer generator som börjar på 1000
let nextId = 1000;
function articleIdGenerator() {
  return nextId++;
}

// JavaScript med produktinformation
const JSONdata = [
  {
    article: `${articleIdGenerator()}`,
    title: "Fleecetröja",
    color: "Röd",
    size: "S",
    prices: {
      25: 563,
      50: 570,
      100: 563,
      250: 478,
      500: 450,
    },
  },
];

// JavaScript objektet konverteras till en JSON sträng och sparas ned localStorage som json-products.
localStorage.setItem("json-products", JSON.stringify(JSONdata));

// Skriver ut produktdata på hemsidan när den laddas
window.onload = function printData() {
  const retrievedData = localStorage.getItem("json-products");

  const parsedJSON = JSON.parse(retrievedData);
  console.log(parsedJSON);
};

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

const amountTest = 32;
const articleIdTest = 1000;

for (const product of productArray) {
  const valueArray = Object.values(product);
  for (const value of valueArray) {
    const dataPlaceHolder = document.createElement("p");
    dataPlaceHolder.innerHTML = value;
    // document.getElementById("body").appendChild(dataPlaceHolder);
  }
}

// Funktion för att hämta ut rätt pris baserat på mängd, WIP.
function getPrice() {
  for (product of productArray) {
    console.log(product.article);
  }
}

// Jag vill ha ut priset för en specifik artikel baserad på antalet produkter som en användare klickar i.

getPrice();
