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
  const retrievedData = localStorage.getItem("json-products");
  const parsedJSON = JSON.parse(retrievedData);

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
