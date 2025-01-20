// Dynamically load the navigation bar
document.addEventListener("DOMContentLoaded", () => {
    const navHTML = `
        <nav>
            <a href="about-us.html">About Us</a>
            <a href="services.html">Services</a>
            <a href="projects.html">Our Projects</a>
            <a href="contact.html">Contact</a>
            <a href="gst.html">GST Info</a>
        </nav>
    `;
    document.querySelector("header").insertAdjacentHTML("afterend", navHTML);
});
