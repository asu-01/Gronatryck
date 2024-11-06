// Adding a product when Lägg till button is clicked, open an alertbox. 
document.addEventListener("DOMContentLoaded", function () {
  let alertTimer;

  window.showAlertBox = function () {
    const quantity = document.getElementById("quantityInput").value;
    const articleName = document.getElementById("articleName").textContent;

    // Retrieve the selected color from localStorage
    const colorName = localStorage.getItem("selectedColor") || "unknown";

    // Update the alert box with quantity and color
    document.getElementById("alertQuantity").textContent = `Antal: ${quantity} st. Färg: ${colorName}.`;
    document.getElementById("alertBox").style.display = "flex";

    // Update the article name in the alert box
    document.getElementById("alertArticlename").textContent = `${articleName} har lagts till i beställningslistan!`;

    const amountBubble = document.getElementsByClassName("icon-orderbag--amount")[0];
    amountBubble.style.display = "flex";

    // Update the amount in the bubble
    amountBubble.querySelector("p").textContent = quantity;

    clearTimeout(alertTimer);

    alertTimer = setTimeout(() => {
      hideAlertBox();
    }, 5000);
  };

  function hideAlertBox() {
    const alertBox = document.getElementById("alertBox");
    if (alertBox) {
      alertBox.style.display = "none";
    }
    clearTimeout(alertTimer);
  }

  window.hideAlertBoxAndBubble = function () {
    hideAlertBox();
    const amountBubble = document.getElementsByClassName("icon-orderbag--amount")[0];
    if (amountBubble) {
      amountBubble.style.display = "none";
    }
  };
});

// Function to change quantity
function changeQuantity(amount) {
  const quantityInput = document.getElementById("quantityInput");
  const newValue = parseInt(quantityInput.value) + amount;

  if (newValue >= parseInt(quantityInput.min) && newValue <= parseInt(quantityInput.max)) {
    quantityInput.value = newValue;
  }
}
