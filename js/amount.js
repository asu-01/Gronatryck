// function to the amount button on product.html

// Selects the input element and buttons
const input = document.querySelector("#quantityInput"); // Select input by ID for better specificity
const decreaseBtn = document.querySelector(".minus");
const increaseBtn = document.querySelector(".plus");

// Adds event listeners to the buttons
decreaseBtn.addEventListener("click", decreaseAmount);
increaseBtn.addEventListener("click", increaseAmount);

/* Function to increase the quantity */
function increaseAmount() {
  let amount = parseInt(input.value, 10) || 0;
  if (amount < 1000) {
    // Only increase if below the max value
    amount++;
    console.log(amount);
    input.value = amount;
  }
}

/* Function to decrease the quantity */
function decreaseAmount() {
  let amount = parseInt(input.value, 10) || 0; // Convert input value to a number, default to 0 if NaN

  if (amount > 10) {
    // Only decrease if above the min value
    amount--;
    console.log(amount);
    input.value = amount;
  }
}
