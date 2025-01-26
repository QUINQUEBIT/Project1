document.addEventListener("DOMContentLoaded", function () {
    loadfooter();
});

function loadfooter() {
    fetch('assets/html/footer.html') 
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load navbar: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;

            
        })
        .catch(error => console.error('Error loading footer:', error));
}

