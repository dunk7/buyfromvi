const products = [
  {
    id: 1,
    name: "Unicorn Keychain",
    price: 12.99,
    image: "images/unicorn-keychain.jpg",
    description: "Handmade glittery unicorn keychain ✨"
  },
  // Add 2 more products...
];

function createProductCard(product) {
  return `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p class="price">$${product.price}</p>
      <button
        class="snipcart-add-item"
        data-item-id="${product.id}"
        data-item-price="${product.price}"
        data-item-name="${product.name}"
        data-item-url="/"
        data-item-image="${product.image}"
      >
        Add to Cart 🛍️
      </button>
    </div>
  `;
}

// Render products
document.getElementById('products-container').innerHTML = products
  .map(product => createProductCard(product))
  .join('');
