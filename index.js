
// code for nav bar
var navButton = document.querySelector('.navigation-button');
var navMenu = document.querySelector('.navigation-menu');
var win = window;


navButton.addEventListener("click", function openMenu() {

    navButton.classList.toggle('active');
    navMenu.classList.toggle('active');

});
document.querySelector('.bi-x-square-fill').addEventListener("click", function closeMenu(event) {
    if (navButton.classList.contains('active')) {
        navButton.classList.remove('active');
        navMenu.classList.remove('active');
    }
});
