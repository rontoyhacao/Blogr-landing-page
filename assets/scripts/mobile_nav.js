const hamburger = document.querySelector('.toggle');
const mobileNav = document.querySelector('.toggle-nav');

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
    hamburger.classList.toggle('open');
});