// DOMContentLoaded Event Listener
document.addEventListener('DOMContentLoaded', () => {
  console.log('Website loaded successfully!');

  // Dynamic Gallery Rendering
  const galleryContainer = document.querySelector('.gallery-container');
  if (galleryContainer) {
    fetch('/api/gallery')
      .then((response) => response.json())
      .then((data) => {
        galleryContainer.innerHTML = '';
        data.forEach((item) => {
          const galleryItem = document.createElement('div');
          galleryItem.classList.add('gallery-item');
          galleryItem.innerHTML = `
            <img src="assets/gallery/photos/${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
          `;
          galleryContainer.appendChild(galleryItem);
        });
      })
      .catch((error) => console.error('Error loading gallery:', error));
  }

  // Dynamic Products Rendering
  const productContainer = document.querySelector('.product-container');
  if (productContainer) {
    fetch('/api/products')
      .then((response) => response.json())
      .then((data) => {
        productContainer.innerHTML = '';
        data.forEach((item) => {
          const productCard = document.createElement('div');
          productCard.classList.add('product-card');
          productCard.innerHTML = `
            <img src="assets/gallery/photos/${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
          `;
          productContainer.appendChild(productCard);
        });
      })
      .catch((error) => console.error('Error loading products:', error));
  }

  // Smooth Scrolling for Internal Links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Toggle Navigation Menu (Mobile)
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }
});
