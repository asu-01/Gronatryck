// when clicking the button on form.html open the confirmation page 
document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form from reloading the page
    // Optionally validate form fields here if needed
    window.location.href = "confirmation.html"; // Redirect to the new page
});