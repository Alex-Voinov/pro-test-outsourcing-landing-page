const header = document.getElementById('fixedHeader1200');
const hieght = window.innerHeight;
const composition_3__widdgets = document.getElementsByClassName('composition_3__tiles');

window.addEventListener('scroll', () => {
    header.style.marginTop = window.scrollY > hieght ? '0' : '';
})

