document.addEventListener("DOMContentLoaded", () => {
    // Hero Section Animations
    gsap.from(".hero-content h2", { duration: 1, y: -50, opacity: 0 });
    gsap.from(".hero-content p", { duration: 1, delay: 0.5, y: 50, opacity: 0 });
    gsap.from(".btn-primary", { duration: 1, delay: 1, scale: 0 });
  
    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  
    // Sticky Navbar on Scroll
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
  
    // Button Hover Effects
    const buttons = document.querySelectorAll(".btn-primary, .btn-secondary");
    buttons.forEach(button => {
      button.addEventListener("mouseover", () => {
        gsap.to(button, { scale: 1.1, duration: 0.2 });
      });
      button.addEventListener("mouseout", () => {
        gsap.to(button, { scale: 1, duration: 0.2 });
      });
    });
  
    // Section Animations (About, Services, Projects, etc.)
    gsap.from(".about", { duration: 1, delay: 1.5, opacity: 0, y: 50 });
    gsap.from(".services", { duration: 1, delay: 2, opacity: 0, y: 50 });
    gsap.from(".projects", { duration: 1, delay: 2.5, opacity: 0, y: 50 });
    gsap.from(".contact", { duration: 1, delay: 3, opacity: 0, y: 50 });
  
    // Lazy Loading Images for Performance
    const images = document.querySelectorAll("img[data-src]");
    const lazyLoad = () => {
      images.forEach(img => {
        if (img.getBoundingClientRect().top < window.innerHeight) {
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
        }
      });
    };
    window.addEventListener("scroll", lazyLoad);
  
    // Gallery Lightbox (Optional, Requires CSS & HTML Setup)
    const galleryImages = document.querySelectorAll(".gallery-item img");
    const lightbox = document.querySelector(".lightbox");
    const lightboxImg = document.querySelector(".lightbox img");
  
    galleryImages.forEach(img => {
      img.addEventListener("click", () => {
        lightbox.classList.add("active");
        lightboxImg.src = img.src;
      });
    });
  
    lightbox.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });
  
    // Contact Form Validation
    const contactForm = document.querySelector("#contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", e => {
        e.preventDefault();
        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();
  
        if (!name || !email || !message) {
          alert("Please fill in all fields.");
          return;
        }
  
        alert("Thank you for contacting us!");
        contactForm.reset();
      });
    }
  });
  