// Adding a product when Lägg till button is clicked, open an alertbox. 
document.addEventListener("DOMContentLoaded", function () {
  let alertTimer;

  window.showAlertBox = function () {
    const quantity = document.getElementById("quantityInput").value;
    const articleName = document.getElementById("articleName").textContent;
    const colorName = localStorage.getItem("selectedColor") || "unknown";
    const productImgSrc = document.querySelector(".product-img-large").src;

    // Update the alert box text
    document.getElementById("alertQuantity").textContent = `Antal: ${quantity} st. Färg: ${colorName}.`;
    document.getElementById("alertArticlename").textContent = `${articleName} har lagts till i beställningslistan!`;
    document.getElementById("alertBox").style.display = "flex";

    // Get the alert box image container
    const alertImageContainer = document.querySelector(".alert-box-img");

    // Clear any existing image
    alertImageContainer.innerHTML = "";

    // Dynamically create and set up the image element
    const imgElement = document.createElement("img");
    imgElement.classList.add("round-corner");
    imgElement.src = productImgSrc;

    // Append the new image element to the container
    alertImageContainer.appendChild(imgElement);

    // Update the amount bubble
    const amountBubble = document.getElementsByClassName("icon-orderbag-amount")[0];
    amountBubble.style.display = "flex";
    amountBubble.querySelector("p").textContent = quantity;

    // Reset and start the alert timer
    clearTimeout(alertTimer);
    alertTimer = setTimeout(() => {
      hideAlertBox();
    }, 5000);
  };

  // Hides the alertbox
  function hideAlertBox() {
    const alertBox = document.getElementById("alertBox");
    if (alertBox) {
      alertBox.style.display = "none";
    }
    clearTimeout(alertTimer);
  }

  window.hideAlertBoxAndBubble = function () {
    hideAlertBox();
    const amountBubble = document.getElementsByClassName("icon-orderbag-amount")[0];
    if (amountBubble) {
      amountBubble.style.display = "none";
    }
  };
});
