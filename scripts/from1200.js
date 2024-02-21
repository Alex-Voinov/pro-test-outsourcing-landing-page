const header = document.getElementById('fixedHeader1200');
const hieght = window.innerHeight;
const composition_3__widdgets = document.getElementsByClassName('composition_3__tiles');

window.addEventListener('scroll', () => {
    header.style.marginTop = window.scrollY > hieght ? '0' : '';
})

const flipWiddget = (widdget, isActive) => {
    const is_active = widdget.getAttribute('data-active-animation');
    if(isActive && (is_active=='1' || is_active=='3') || !isActive && (is_active=='2' || is_active=='4')) return 0; // если запустили такую же анимацю заново, пока старая такая же не закончилась - не выполнять ей. 
    else if(is_active=='1' || is_active=='2'){//если зашли с другой анимацией, но старая ещё не закончилась
        //setTimeout(()=>flipWiddget(widdget, isActive), 100); // запустить проверку этой анимации через 100ms
        return 0;
    }
    widdget.setAttribute('data-active-animation', (isActive ? '1' : '2')); //1 - начали  прямую анимацию, 2 - обратную
    widdget.style.transform = isActive ? 'rotate3d(-1, 1, 0, 180deg)' : '';
    const h = widdget.offsetHeight;
    const w = widdget.offsetWidth;
    const num = Number(widdget.getAttribute('data-num-titles'));
    widdget.style.height = isActive ? String(w) + 'px' : '';
    widdget.style.width = isActive ? String(h) + 'px' : '';

    widdget.style.marginTop = isActive ? `${(w-h)/2}px` : '';
    widdget.style.marginLeft = isActive ? `calc(${num*22.08333 + (num+1)*1.28177 }vw + ${w-h}px)` : '';
    setTimeout(() => {
        widdget.setAttribute('data-active-animation', isActive? '3': '4'); // 3 - провели прямую анимацию, 4 - обратную
    }, 100)
}

for (let widdget of composition_3__widdgets) {
    widdget.addEventListener('mouseover', () => {
        flipWiddget(widdget, true);
    });
    widdget.addEventListener('mouseleave', () => {
        flipWiddget(widdget, false);
    });
    ;
}
