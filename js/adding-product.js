// document.addEventListener("DOMContentLoaded", function () {
//   window.showAlertBox = function () {
//     // Get the quantity value from the input
//     const quantity = document.getElementById("quantityInput").value;

//     // Update the alert box with the quantity
//     document.getElementById("alertQuantity").textContent = `Antal: ${quantity} st. Färg: Röd.`;
//     document.getElementById("alertBox").style.display = "flex";

//     // Update the article name in the alert box
//     const articleName = document.getElementById("articleName").textContent;
//     document.getElementById("alertArticlename").textContent = `${articleName} har lagts till i beställningslistan!`;

//     // Make the amount bubble visible
//     const amountBubble = document.getElementsByClassName("icon-orderbag--amount")[0];
//     amountBubble.style.display = "flex";

//     // Update the amount in the bubble
//     amountBubble.querySelector("p").textContent = quantity;
//   };

//   window.hideAlertBox = function () {
//     const alertBox = document.getElementById("alertBox");
//     if (alertBox) {
//       alertBox.style.display = "none";
//     }

//     // Reset the amount bubble to "none" or hide it
//     const amountBubble = document.getElementsByClassName("icon-orderbag--amount")[0];
//     if (amountBubble) {
//       amountBubble.style.display = "none";  // Hide the bubble entirely
//     }
//   };

// });

// // Function to change quantity
// function changeQuantity(amount) {
//   const quantityInput = document.getElementById("quantityInput");
//   const newValue = parseInt(quantityInput.value) + amount;

//   // Ensure quantity stays within bounds
//   if (newValue >= parseInt(quantityInput.min) && newValue <= parseInt(quantityInput.max)) {
//     quantityInput.value = newValue;
//   }
// }

document.addEventListener("DOMContentLoaded", function () {
  let alertTimer; // Store the timer ID to clear it if needed

  window.showAlertBox = function () {
    // Get the quantity value from the input
    const quantity = document.getElementById("quantityInput").value;
    // Update the article name in the alert box
    const articleName = document.getElementById("articleName").textContent;

    // Update the alert box with the quantity
    document.getElementById(
      "alertQuantity"
    ).textContent = `${articleName} har nu lagts till i beställningslistan.\nAntal: ${quantity} st. Färg: Röd.`;
    document.getElementById("alertBox").style.display = "flex";

    // Update the article name in the alert box
    // document.getElementById(
    //   "alertArticlename"
    // ).textContent = `${articleName} har lagts till i beställningslistan!`;

    // Make the amount bubble visible
    const amountBubble = document.getElementsByClassName(
      "icon-orderbag--amount"
    )[0];
    amountBubble.style.display = "flex";

    // Update the amount in the bubble
    amountBubble.querySelector("p").textContent = quantity;

    // Clear any previous timer to avoid unexpected behavior
    clearTimeout(alertTimer);

    // Set a timer to hide the alert box after 5 seconds
    alertTimer = setTimeout(() => {
      hideAlertBox(); // Automatically hide the alert box only
    }, 5000); // 5000 milliseconds = 5 seconds
  };

  // Function to hide only the alert box (not the amount bubble)
  function hideAlertBox() {
    const alertBox = document.getElementById("alertBox");
    if (alertBox) {
      alertBox.style.display = "none";
    }

    // Clear the timer if hideAlertBox is manually triggered
    clearTimeout(alertTimer);
  }

  // Function to hide both the alert box and the amount bubble when Ångra is clicked
  window.hideAlertBoxAndBubble = function () {
    hideAlertBox(); // Hide the alert box

    // Hide the amount bubble as well
    const amountBubble = document.getElementsByClassName(
      "icon-orderbag--amount"
    )[0];
    if (amountBubble) {
      amountBubble.style.display = "none"; // Hide the bubble entirely
    }
  };
});

// Function to change quantity
function changeQuantity(amount) {
  const quantityInput = document.getElementById("quantityInput");
  const newValue = parseInt(quantityInput.value) + amount;

  // Ensure quantity stays within bounds
  if (
    newValue >= parseInt(quantityInput.min) &&
    newValue <= parseInt(quantityInput.max)
  ) {
    quantityInput.value = newValue;
  }
}
