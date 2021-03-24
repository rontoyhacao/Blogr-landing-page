const navButton = document.querySelectorAll('.toggle-nav_buttons');

navButton.forEach(navButton => {
    navButton.addEventListener('click', event => {
        const currentActiveNavButton = document.querySelector('.toggle-nav_buttons.active');
        if(currentActiveNavButton && currentActiveNavButton !== navButton) {
            currentActiveNavButton.classList.toggle('active');
            currentActiveNavButton.nextElementSibling.style.display = 'none';
            currentActiveNavButton.nextElementSibling.style.maxHeight = 0;
        }


        navButton.classList.toggle('active');
        const navLinks = navButton.nextElementSibling;
        if(navButton.classList.contains('active')) {
            navLinks.style.display = 'block';
            navLinks.style.maxHeight = navLinks.scrollHeight + 'px';
        }
        else {
            navLinks.style.display = 'none';
            navLinks.style.maxHeight = 0;
        }
    });
});