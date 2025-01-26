const products = [
  {
    id: 1,
    name: "Sparkle Unicorn Keychain",
    price: 14.99,
    image: "images/product-1.jpg",
    description: "Glittery unicorn charm with rainbow tail ✨"
  },
  {
    id: 2,
    name: "Rainbow Friendship Bracelet",
    price: 9.99,
    image: "images/product-2.jpg",
    description: "Handwoven colorful thread bracelet 🌈"
  },
  {
    id: 3,
    name: "Kawaii Strawberry Earrings",
    price: 16.99,
    image: "images/product-3.jpg",
    description: "Lightweight polymer clay cuties 🍓"
  }
];

function createProductCard(product) {
  return `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <div class="product-info">
        <h4 class="product-title">${product.name}</h4>
        <p class="product-price">$${product.price}</p>
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
    </article>
  `;
}

// Render products
document.getElementById('products-container').innerHTML = products
  .map(product => createProductCard(product))
  .join('');
