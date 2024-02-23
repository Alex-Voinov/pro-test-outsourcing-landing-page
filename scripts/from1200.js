const header = document.getElementById('fixedHeader1200');
const hieght = window.innerHeight;
const accordionPoints = document.getElementsByClassName('accordion_point');

const comp_2_widdget_1 = document.getElementById('composition_2__w1');
const comp_2_widdget_2 = document.getElementById('composition_2__w2');
const comp_2_widdget_3 = document.getElementById('composition_2__w3');

const comp_3__tile_0 = document.getElementById('composition_3__tile_0');
const comp_3__tile_1 = document.getElementById('composition_3__tile_1');
const comp_3__tile_2 = document.getElementById('composition_3__tile_2');

window.addEventListener('scroll', () => {
    header.style.marginTop = window.scrollY > hieght ? '0' : '';
    if (window.scrollY > hieght * 0.6) {
        comp_2_widdget_1.style.opacity = '1';
        comp_2_widdget_2.style.opacity = '1';
        comp_2_widdget_3.style.opacity = '1';
        comp_2_widdget_1.style.marginTop = '0';
        comp_2_widdget_2.style.marginTop = '0';
        comp_2_widdget_3.style.marginTop = '0';
    }
    if (window.scrollY > hieght * 1.1) {
        comp_3__tile_0.style.opacity = '1';
        setTimeout(() => {
            comp_3__tile_1.style.opacity = '1';
        }, 500);
        setTimeout(() => {
            comp_3__tile_2.style.opacity = '1';
        }, 1000);
    }
})

for (let i = 0; i < accordionPoints.length; i++) {
    const point = document.getElementById(`1200_accordion_point_${i}`);
    const pointer = document.getElementById(`1200_accordion_pointer_${i}`);
    point.addEventListener('click', () => {
        const isActive = point.getAttribute('data-active');
        const hiddenPoint = document.getElementById(`1200_accordion_heidden_point_${i}`);
        if (isActive === '0') {
            point.style.height = '23.42593vh';
            hiddenPoint.style.display = 'block';
            pointer.style.transform = 'rotate(180deg)';
            setTimeout(() => { hiddenPoint.style.opacity = '1'; }, 300)
        } else {
            point.style.height = '';
            hiddenPoint.style.opacity = '';
            pointer.style.transform = '';
            setTimeout(() => { hiddenPoint.style.display = 'none'; }, 300)
        }
        point.setAttribute('data-active', isActive === '1' ? '0' : '1');
    });
};
