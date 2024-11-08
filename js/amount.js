/* Hämtar Input element */
const input = document.querySelector(".input-box");
console.log(input);

const parentContainer = document.querySelector(".order-list");

// // Använder event delegation för att hitta plus-knapp
// parentContainer.addEventListener("click", function (event) {
//   if (event.target.classList.contains("plus")) {
//     console.log("button clicked");
//   }
// });

// // Använder event delegation för att hitta minus-knapp
// parentContainer.addEventListener("click", function (event) {
//   if (event.target.classList.contains("minus")) {
//     console.log("button clicked");
//   }
// });

/* Hämtar alla knappar */
const btn = document.querySelectorAll("button");

const decreaseBtn = btn.item(0);
const increaseBtn = btn.item(1);

// Lyssnar efter klickevent på mängd-knapparna.
decreaseBtn.addEventListener("click", decreaseAmount);
increaseBtn.addEventListener("click", increaseAmount);

console.log(decreaseBtn, increaseBtn);

/* Funktion för att öka mängd */
function increaseAmount(e) {
  //   console.log(e);

  let amount = input.value;
  amount++;
  input.value = amount;
}

/* Funktion för att minska mängd */
function decreaseAmount(e) {
  //   console.log(e);

  let amount = input.value;
  amount--;
  amount < 25 ? (amount = 25) : "";
  input.value = amount;
}
