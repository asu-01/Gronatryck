let n = 0;

function idGenerator() {
  n++;
  return n;
}

// JavaScript med produkt information
const JSONdata = {
  products: [
    {
      id: `${idGenerator()}`,
      article: "2345",
      title: "Fleecetröja",
      color: "Röd",
      size: "S",
      price: 100,
    },
    {
      id: `${idGenerator()}`,
      article: "6784",
      title: "T-shirt",
      color: "Vit",
      size: "L",
      price: 100,
    },
    {
      id: `${idGenerator()}`,
      article: "9234",
      title: "Keps",
      color: "Svart",
      size: "M",
      price: 50,
    },
  ],
};

// JavaScript objektet konverteras till en JSON sträng och sparas ned localStorage som json-products.
localStorage.setItem("json-products", JSON.stringify(JSONdata));

// JSON data hämtas från localStorage.
const retrievedData = localStorage.getItem("json-products");

// Skrivs ut i konsol
console.log(retrievedData);

// Lägg till data
function add(key, value) {
  const retrievedData = localStorage.getItem("json-products");
  console.log(retrievedData);

  const existingData = retrievedData ? JSON.parse(retrievedData) : {};

  console.log(existingData);

  // retrievedData.products.push({key : `${value}` });

  retrievedData[key] = value;

  localStorage.setItem("json-products", JSON.stringify(JSONdata));
}

add(test, "hej");

// Ta bort data
// localStorage.removeItem() ta bort utifrån key.

// Uppdatera data
// localStorage.setItem()

/*

// Konverterar och skriver ut JSON-sträng från fil på webben
fetch("./data/data.json")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);

    const p = document.getElementById("test");

    for (let i = 0; i < json.products.length; i++) {
      let hej = json.products[i];
      p.innerHTML += `${Object.values(hej)}`;
    }
  });
  

const test = {
  article: "hej",
  title: "hej",
  color: "hej",
  size: "hej",
  price: "hej",
};


fetch("./data/data.json", {
  method: "POST",
  body: JSON.stringify(test),
  headers: {
    "Content-Type": "application/json",
  },
});
*/
