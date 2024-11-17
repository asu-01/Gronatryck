// Adding four cards without a slider to related products section
window.onload = function printRelatedProducts() {
    const relatedCardContainer = document.querySelector(".card-container-related");  // Adjusted for "related" products section
    const retrievedData = localStorage.getItem("json-products");
    const parsedJSON = JSON.parse(retrievedData);

    // Select up to 4 products to show statically
    const selectedProducts = parsedJSON.slice(2, 6); 
  
    // Loop through the selected products to display them
    selectedProducts.forEach((product) => {
        // Construct product cards dynamically
        const content = `
            <div class="card">
                <a href="store.html"><img src="${product.img}" class="card-img-top" alt="${product.title}">
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
                </div></a> 
            </div>`;

        // Append the product card to the container
        relatedCardContainer.innerHTML += content;
    });
}
