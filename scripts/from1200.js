const header = document.getElementById('fixedHeader1200');
const hieght = window.innerHeight;
const accordionPoints = document.getElementsByClassName('accordion_point');



window.addEventListener('scroll', () => {
    header.style.marginTop = window.scrollY > hieght ? '0' : '';
})

for (let i = 0; i < accordionPoints.length; i++) {
    const point = document.getElementById(`1200_accordion_point_${i}`);
    point.addEventListener('click', () => {
        const isActive = point.getAttribute('data-active');
        const hiddenPoint = document.getElementById(`1200_accordion_heidden_point_${i}`);
        if (isActive === '0') {
            point.style.height = '23.42593vh';
            hiddenPoint.style.display = 'block';
            setTimeout(() => { hiddenPoint.style.opacity = '1'; }, 300)
        } else {
            point.style.height = '';
            hiddenPoint.style.opacity = '';
            setTimeout(() => { hiddenPoint.style.display = 'none'; }, 300)
        }
        point.setAttribute('data-active', isActive === '1' ? '0' : '1');
    });
};
