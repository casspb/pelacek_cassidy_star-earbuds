(() => {
    const navLinks = document.querySelectorAll('.navbar a');
    const menuBar = document.querySelector('#menu-bar');


    function closeMenu() {
        menuBar.checked = false; // Uncheck the checkbox to hide the navbar
    }

    // Add click event to all navbar links
    navLinks.forEach((link) => {
        link.addEventListener('click', closeMenu);
    });
})();
