
const menuIcon = document.querySelector('[data-menu-icon]')
const menuMobileScreen = document.querySelector('[data-links-wrapper]')

menuIcon.addEventListener('click', e => {
    // Displaying menu
    menuMobileScreen.classList.contains('open-menu') ? menuMobileScreen.classList.remove('open-menu') : menuMobileScreen.classList.add('open-menu');

    // Updating menu icon
    let lastClass = (menuIcon.getAttribute('class')).split(' ').pop();
    menuIcon.classList.remove(lastClass);
    lastClass === 'fa-bars' ? menuIcon.classList.add('fa-xmark') : menuIcon.classList.add('fa-bars');
})