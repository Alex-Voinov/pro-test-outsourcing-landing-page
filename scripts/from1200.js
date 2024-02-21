const header = document.getElementById('fixedHeader1200');
const hieght = window.innerHeight;

window.addEventListener('scroll', () => {
    header.style.marginTop = window.scrollY > hieght ? '0' : '';
})