// Fetch and display gallery items
function fetchGalleryItems() {
  fetch('/api/gallery')
    .then((response) => response.json())
    .then((data) => {
      const galleryContainer = document.querySelector('.gallery-container');
      if (galleryContainer) {
        galleryContainer.innerHTML = data
          .map(
            (item) => `
          <div class="gallery-item">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
          </div>
        `
          )
          .join('');
      }
    })
    .catch((error) => console.error('Error fetching gallery data:', error));
}

// Fetch and display product items
function fetchProductItems() {
  fetch('/api/products')
    .then((response) => response.json())
    .then((data) => {
      const productContainer = document.querySelector('.product-container');
      if (productContainer) {
        productContainer.innerHTML = data
          .map(
            (product) => `
          <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
          </div>
        `
          )
          .join('');
      }
    })
    .catch((error) => console.error('Error fetching product data:', error));
}

// Initialize functions when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  fetchGalleryItems();
  fetchProductItems();
});
