// // Function to display the first 4 popular products dynamically
// window.onload = function printPopularProducts() {
//     const popularCardContainer = document.querySelector(".card-container--popular");
//     const retrievedData = localStorage.getItem("json-products");
//     const parsedJSON = JSON.parse(retrievedData);
  
//     // Slice the first 4 products from the parsed JSON
//     const firstFourProducts = parsedJSON.slice(0, 4);  

  
//     // Loop through the first 4 products to display them in the popular section
//     firstFourProducts.forEach((product) => {
//       // Construct product cards dynamically
//       const content = `
//         <div class="card">
//           <img src="${product.img}" class="card-img-top" alt="${product.title}">
//           <div class="card-body">
//             <p class="text-color-dark">${product.category}</p>
//             <h5 class="text-color-primary">${product.title}</h5>
//             <div class="card-dot-container">
//               ${product.colors.map((color, index) => `
//                 <input class="dot dot-color-${index + 1}" type="button" aria-label="Färg ${index + 1}" style="background-color: ${color.colorCode};">
//               `).join('')}
//               <p class="text-color-dark text-xs">+${product.colors.length} färger</p>
//             </div>
//             <div class="card-price-container">
//               <p class="text-color-medium text-sm">minimum 25 st.</p>
//               <p class="text-color-dark text-sm">från ${product.priceList[0].price} kr/st</p>
//             </div>
//           </div>
//         </div>`;
  
//       // Append the product card to the container
//       popularCardContainer.innerHTML += content;
//     });
//     let currentIndex = 0;  // Tracks the current index for the visible cards

//     // Handle the left arrow click
//     const arrowLeft = document.querySelector(".arrow-left");
//     arrowLeft.addEventListener("click", () => {
//       if (currentIndex > 0) {
//         currentIndex--;  // Move to the previous set of cards
//         updateCardContainer();
//       }
//     });

//     // Handle the right arrow click
//     const arrowRight = document.querySelector(".arrow-right");
//     arrowRight.addEventListener("click", () => {
//       if (currentIndex < parsedJSON.length / 4 - 1) {  // Ensure we're not at the end
//         currentIndex++;  // Move to the next set of cards
//         updateCardContainer();
//       }
//     });

//     // Function to update the position of the card container based on the current index
//     function updateCardContainer() {
//       const containerWidth = popularCardContainer.offsetWidth;  // Get the width of the container
//       popularCardContainer.style.transform = `translateX(-${containerWidth * currentIndex}px)`;  // Slide the cards
//     }
// }
window.onload = function printPopularProducts() {
  const popularCardContainer = document.querySelector(".card-container--popular");
  const retrievedData = localStorage.getItem("json-products");
  const parsedJSON = JSON.parse(retrievedData);

  // Slice the first 8 products, you can show up to 4 cards at a time
  const firstEightProducts = parsedJSON.slice(0, 8);  // Initially load 8 products

  // Loop through the first 8 products to display them
  firstEightProducts.forEach((product) => {
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

  let currentIndex = 0;  // Tracks the current index for the visible cards

  // The function that gets triggered when an arrow is clicked
  window.changeCardSlide = function(direction) {
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
}




  
  