// Slider Functionality
let currentIndex = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

setInterval(() => {
  slides[currentIndex].style.transform = `translateX(-100%)`;
  currentIndex = (currentIndex + 1) % totalSlides;
  slides[currentIndex].style.transform = `translateX(0)`;
}, 3000);

// Toggle sidebar menu
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.sidebar').classList.toggle('active');
});

// Dropdown Menu
document.querySelectorAll('.dropdown').forEach((dropdown) => {
  dropdown.addEventListener('click', (e) => {
    e.preventDefault();
    const submenu = dropdown.nextElementSibling;
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
  });
});
