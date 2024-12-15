
const menuIcon = document.querySelector('[data-menu-icon]')
const menuMobileScreen = document.querySelector('[data-menu-mobile-screen]')

menuIcon.addEventListener('click', e => {

    // Displaying menu
    menuMobileScreen.classList.contains('menu-open') ? menuMobileScreen.classList.remove('menu-open') : menuMobileScreen.classList.add('menu-open');

    // Updating menu icon
    let lastClass = (menuIcon.getAttribute('class')).split(' ').pop();
    menuIcon.classList.remove(lastClass);
    lastClass === 'fa-bars' ? menuIcon.classList.add('fa-xmark') : menuIcon.classList.add('fa-bars');
})