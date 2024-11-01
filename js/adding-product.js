// alert box for product to be added in orderlist
// document.addEventListener("DOMContentLoaded", function () {
//   window.showAlertBox = function () {
//     // Get the quantity value from the input
//     const quantity = document.getElementById("quantityInput").value;
//     // Update the alert box with the quantity
//     document.getElementById(
//       "alertQuantity"
//     ).textContent = `Antal: ${quantity} st. Färg: Röd.`;

//     document.getElementById("alertBox").style.display = "block";

//     const articleName = document.getElementById("articleName").textContent;
//     document.getElementById(
//       "alertArticlename"
//     ).textContent = `${articleName} har lagts till i beställningslistan!  .`;
//   };

//   // Make the amount bubble visible
//   const amountBubble = document.getElementsByClassName("icon-orderbag--amount")[0];
//   amountBubble.style.display = "flex";

//   // Update the amount in the bubble
//   amountBubble.querySelector("p").textContent = quantity;


//   window.hideAlertBox = function () {
//     document.getElementById("alertBox").style.display = "none";
//   };

//   // Close alert box when clicking outside of it
//   document.addEventListener("click", function (event) {
//     const alertBox = document.getElementById("alertBox");
//     if (!alertBox.contains(event.target) && !overlay.contains(event.target)) {
//       hideAlertBox();
//     }
//   });
// });

// // Function to change quantity
// function changeQuantity(amount) {
//   const quantityInput = document.getElementById("quantityInput");
//   const newValue = parseInt(quantityInput.value) + amount;

//   // Ensure quantity stays within bounds
//   if (
//     newValue >= parseInt(quantityInput.min) &&
//     newValue <= parseInt(quantityInput.max)
//   ) {
//     quantityInput.value = newValue;
//   }
// }
document.addEventListener("DOMContentLoaded", function () {
  window.showAlertBox = function () {
    // Get the quantity value from the input
    const quantity = document.getElementById("quantityInput").value;

    // Update the alert box with the quantity
    document.getElementById("alertQuantity").textContent = `Antal: ${quantity} st. Färg: Röd.`;
    document.getElementById("alertBox").style.display = "flex";

    // Update the article name in the alert box
    const articleName = document.getElementById("articleName").textContent;
    document.getElementById("alertArticlename").textContent = `${articleName} har lagts till i beställningslistan!`;

    // Make the amount bubble visible
    const amountBubble = document.getElementsByClassName("icon-orderbag--amount")[0];
    amountBubble.style.display = "flex";

    // Update the amount in the bubble
    amountBubble.querySelector("p").textContent = quantity;
  };

  window.hideAlertBox = function () {
    const alertBox = document.getElementById("alertBox");
    if (alertBox) {
      alertBox.style.display = "none";
    }
  
    // Reset the amount bubble to "none" or hide it
    const amountBubble = document.getElementsByClassName("icon-orderbag--amount")[0];
    if (amountBubble) {
      amountBubble.style.display = "none";  // Hide the bubble entirely
  
      // Alternatively, if you want to keep it visible but show zero quantity:
      // amountBubble.querySelector("p").textContent = ""; // or "0"
    }
  };

 
});

// Function to change quantity
function changeQuantity(amount) {
  const quantityInput = document.getElementById("quantityInput");
  const newValue = parseInt(quantityInput.value) + amount;

  // Ensure quantity stays within bounds
  if (newValue >= parseInt(quantityInput.min) && newValue <= parseInt(quantityInput.max)) {
    quantityInput.value = newValue;
  }
}
