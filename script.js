const iconsElements = document.querySelectorAll('.icons');

iconsElements.forEach(function(iconsElement) {
    iconsElement.addEventListener('click', function() {
        const productContent = iconsElement.nextElementSibling;

        if (productContent.style.display === 'none' || productContent.style.display === '') {
            productContent.style.display = 'block';
        } else {
            productContent.style.display = 'none';
        }
    });
});




