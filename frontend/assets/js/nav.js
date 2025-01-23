document.addEventListener("DOMContentLoaded", function () {
    loadNavbar();
});

function loadNavbar() {
    fetch('assets/html/nav.html') 
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load navbar: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;

            
        })
        .catch(error => console.error('Error loading navbar:', error));
}

