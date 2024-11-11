// Function to display the first 4 popular products dynamically
window.onload = function printPopularProducts() {
    const popularCardContainer = document.querySelector(".card-container--popular");
    const retrievedData = localStorage.getItem("json-products");
    const parsedJSON = JSON.parse(retrievedData);
  
    // Slice the first 4 products from the parsed JSON
    const firstFourProducts = parsedJSON.slice(0, 4);
  
    // Loop through the first 4 products to display them in the popular section
    firstFourProducts.forEach((product) => {
      // Construct product cards dynamically
      const content = `
        <div class="card">
          <img src="${product.img}" class="card-img-top" alt="${product.title}">
          <img class="card-news-icon" src="/visuals/icons/product_news_icon.svg" alt="Klädnyhet!">
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



  
  