
let currentIndex = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;
ScrollReveal({ reset: true });

ScrollReveal().reveal(".show-once", {
  reset: false
});

ScrollReveal().reveal(".title", {
  duration: 1000,
  origin: "top",
  distance: "400px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  rotate: {
    x: 20,
    z: -10
  }
});

ScrollReveal().reveal(".fade-in", {
  duration: 2000,
  move: 0
});

ScrollReveal().reveal(".scaleUp", {
  duration: 500,
  scale: 0.85
});

ScrollReveal().reveal(".flip", {
  delay: 500,
  duration: 2000,
  rotate: {
    x: 20,
    z: 20
  }
});

ScrollReveal().reveal(".slide-right", {
  duration: 500,
  origin: "left",
  distance: "30px",
  easing: "ease-in-out"
});
ScrollReveal().reveal(".slide-left", {
  duration: 500,
  origin: "right",
  distance: "30px",
  easing: "ease-in-out"
});

ScrollReveal().reveal(".slide-up", {
  duration: 500,
  origin: "bottom",
  distance: "100px",
  easing: "cubic-bezier(.37,.01,.74,1)",
  opacity: 0.3,
  scale: 0.5
});

setInterval(() => {
  slides[currentIndex].style.transform = `translateX(-100%)`;
  currentIndex = (currentIndex + 1) % totalSlides;
  slides[currentIndex].style.transform = `translateX(0)`;
}, 3000);

// // Toggle sidebar menu
// document.querySelector('.menu-toggle').addEventListener('click', () => {
//   document.querySelector('.sidebar').classList.toggle('active');
// });

// // Dropdown Menu
// document.querySelectorAll('.dropdown').forEach((dropdown) => {
//   dropdown.addEventListener('click', (e) => {
//     e.preventDefault();
//     const submenu = dropdown.nextElementSibling;
//     submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
//   });
// });
 
//  const animatedElements = document.querySelectorAll('.overflow-hidden, .drop-in');


//  const observerOptions = {
//    root: null, 
//    threshold: 0.1 
//  };

//  const observerCallback = (entries, observer) => {
//    entries.forEach(entry => {
//      if (entry.isIntersecting) {
//        entry.target.classList.add('visible'); 
//      }
//    });
//  };

//  const observer = new IntersectionObserver(observerCallback, observerOptions);

//  animatedElements.forEach(element => observer.observe(element));