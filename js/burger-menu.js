function toggleMenu() {
    var menu = document.querySelector('.menu');
    var burgerMenu = document.querySelector('.burger-menu');

    menu.classList.toggle('hide');
    
    burgerMenu.classList.toggle('show'); // Toggle the 'open' class to change the burger menu icon
}
