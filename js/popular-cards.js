// Adding eight cards on home page for popular products section with a slider function
window.onload = function printPopularProducts() {
  const popularCardContainer = document.querySelector(".card-container--popular");
  const retrievedData = localStorage.getItem("json-products");
  const parsedJSON = JSON.parse(retrievedData);

  // Function to determine how many cards to show based on screen size
  function getCardsToShow() {
    return window.innerWidth < 1200 ? 4 : 8;  // Show 4 cards on screens smaller than 1200px, 8 otherwise
  }

  // Function to render products based on the current screen size
  function renderProducts() {
    popularCardContainer.innerHTML = '';  // Clear existing cards
    const cardsToShow = getCardsToShow();
    const firstProducts = parsedJSON.slice(0, cardsToShow); // Load the specified number of cards

    // Loop through the selected products to display them
    firstProducts.forEach((product) => {
      // Construct product cards dynamically
      const content = `
        <div class="card">
          <img src="${product.img}" class="card-img-top" alt="${product.title}">
          <div class="card-body">
            <p class="text-color-dark">${product.category}</p>
            <h5 class="text-color-primary">${product.title}</h5>
            <div class="card-dot-container">
              ${product.colors.map((color, index) => `
                <input class="dot dot-color-${index + 1}" type="button" aria-label="Färg ${index + 1}" style="background-color: ${color.colorCode};">
              `).join('')}
              <p class="text-color-dark text-xs">+${product.colors.length} färger</p>
            </div>
            <div class="card-price-container">
              <p class="text-color-medium text-sm">minimum 25 st.</p>
              <p class="text-color-dark text-sm">från ${product.priceList[0].price} kr/st</p>
            </div>
          </div>
        </div>`;

      // Append the product card to the container
      popularCardContainer.innerHTML += content;
    });
  }

  // Render the products initially based on the current screen size
  renderProducts();

  let currentIndex = 0;  // Tracks the current index for the visible cards

  // The function that gets triggered when an arrow is clicked
  window.changeCardSlide = function(direction) {
    // Check if the screen width is less than 1200px; if so, disable sliding
    if (window.innerWidth < 1200) return;

    const totalCards = parsedJSON.length;  // Total number of cards available
    const cardsPerView = 4;                // How many cards you want to show at once
    const maxIndex = Math.ceil(totalCards / cardsPerView) - 1;  // Maximum index for the slides

    // Adjust the current index based on the direction (left or right)
    currentIndex += direction;

    // Ensure the current index stays within the valid range
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex > maxIndex) {
      currentIndex = maxIndex;  // Don't go past the last set of cards
    }

    // Update the card container's position based on the new index
    const containerWidth = popularCardContainer.offsetWidth;  // Get the width of the container
    popularCardContainer.style.transform = `translateX(-${containerWidth * currentIndex}px)`;  // Slide the cards
  }

  // Re-render the cards on screen resize
  window.addEventListener('resize', () => {
    currentIndex = 0;  // Reset to the first slide
    popularCardContainer.style.transform = `translateX(0)`;  // Reset slider position
    renderProducts();  // Re-render the products based on the updated screen width
  });
}





  
  