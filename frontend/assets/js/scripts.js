
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
 
 const animatedElements = document.querySelectorAll('.overflow-hidden, .drop-in');


 const observerOptions = {
   root: null, 
   threshold: 0.1 
 };

 const observerCallback = (entries, observer) => {
   entries.forEach(entry => {
     if (entry.isIntersecting) {
       entry.target.classList.add('visible'); 
     }
   });
 };

 const observer = new IntersectionObserver(observerCallback, observerOptions);

 animatedElements.forEach(element => observer.observe(element));