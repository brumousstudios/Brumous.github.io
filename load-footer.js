function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

// Call the function for both
loadComponent('header-placeholder', 'header.html');
loadComponent('footer-placeholder', 'footer.html');
