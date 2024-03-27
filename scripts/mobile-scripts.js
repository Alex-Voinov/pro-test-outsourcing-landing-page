const hamburger = document.getElementById('mobile__hamburger');
const closeAsideMenu = document.getElementById('mobile__right_menu__close');
const menu = document.getElementById('mobile__right_menu');
const blurBack = document.getElementById('mobile__blur__back');

hamburger.addEventListener('click', () => {
    menu.style.left = '13.1016vw';
    menu.style.opacity = '1';
    blurBack.style.display = 'block';
    setTimeout(() => {
        blurBack.style.opacity = 1;
    }, 1)
})

closeAsideMenu.addEventListener('click', () => {
    menu.style.left = '';
    menu.style.opacity = '';
    blurBack.style.opacity = '';
    setTimeout(() => {
        blurBack.style.display = '';
    }, 300)
})