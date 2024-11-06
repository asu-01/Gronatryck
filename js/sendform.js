// when clicking the button on form.html open the confirmation page but also check if the required is filled out before sending.
document
  .getElementById("submitButton")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Select the form element in customerform.html
    const form = document.querySelector(".customer-form");

    // Check if the form is valid
    if (form.checkValidity()) {
      // If valid, proceed to the confirmation page
      window.location.href = "confirmation.html";
    } else {
      // If invalid, display validation errors
      form.reportValidity();
    }
  });
