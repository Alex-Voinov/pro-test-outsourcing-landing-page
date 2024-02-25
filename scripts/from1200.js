import { testers } from "./dataAboutTesters.js";

const header = document.getElementById('fixedHeader1200');
const hieght = window.innerHeight;
const accordionPoints = document.getElementsByClassName('accordion_point');
const navigationPointsBlock = document.getElementById('comp_8__navigation_block');
const cardSection = document.getElementById('composition_8__card_section');

const comp_2_widdget_1 = document.getElementById('composition_2__w1');
const comp_2_widdget_2 = document.getElementById('composition_2__w2');
const comp_2_widdget_3 = document.getElementById('composition_2__w3');

const comp_3__tile_0 = document.getElementById('composition_3__tile_0');
const comp_3__tile_1 = document.getElementById('composition_3__tile_1');
const comp_3__tile_2 = document.getElementById('composition_3__tile_2');

const amountTesters = testers.length;
navigationPointsBlock.style.width = `${1.09375 + testers.length * 2.76042}vw`;
for (let i = 0; i < Math.min(amountTesters, 3); i++) {
    const testerCard = document.createElement('div');
    testerCard.className = `from1200__comp_8__tester_card${i == 1 ? ' from1200__comp_8__active_card' : ''}`
    const headerCard = document.createElement('div');
    headerCard.className = 'from1200__comp_8__tester_card__header';
    const headerCharacteristicsBlock = document.createElement('div');
    for (let numPoint = 0; numPoint < testers[i].characteristics.length; numPoint++) {
        const point = document.createElement('p');
        const space = document.createTextNode('\u00A0\u00A0');
        point.innerHTML = '•';
        point.appendChild(space);
        point.innerHTML += testers[i].characteristics[numPoint];
        headerCharacteristicsBlock.appendChild(point);
    }

    const backImageMan = document.createElement('img'); 
    backImageMan.src = `img/png/from1200_comp_8_backman__${testers[i].img}.png`; 
    backImageMan.alt = 'photo of a specialist';

    const backDetail = document.createElement('img'); 
    backDetail.src = `img/svg/from1200_comp_8__back_detail.svg`; 
    backDetail.alt = 'background detail';

    const headerCardNameBlock = document.createElement('div');
    headerCardNameBlock.className = 'from1200__comp_8__tester_card__name_block';
    const headerCardName = document.createElement('h1');
    headerCardName.textContent = testers[i].name;
    const headerCardSpecialization = document.createElement('p');
    
    const doesOwnBlock = document.createElement('div');
    const lastBlock = document.createElement('div');
    
    const lastBlockArtBoard = document.createElement('div');
    const lastBlockButtons = document.createElement('button');
    lastBlockButtons.textContent = 'Забронировать встречу';
    lastBlock.appendChild(lastBlockArtBoard);
    lastBlock.appendChild(lastBlockButtons);
    doesOwnBlock.className = 'from1200__comp_8__tester_card__does_own';
    headerCardSpecialization.textContent = testers[i].specialization;
    headerCardNameBlock.appendChild(headerCardName);
    headerCardNameBlock.appendChild(headerCardSpecialization);
    headerCard.appendChild(headerCardNameBlock);
    headerCard.appendChild(headerCharacteristicsBlock);
    testerCard.appendChild(backImageMan);
    testerCard.appendChild(backDetail);
    testerCard.appendChild(headerCard);
    testerCard.appendChild(doesOwnBlock);
    testerCard.appendChild(lastBlock);
    cardSection.appendChild(testerCard);
}


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
