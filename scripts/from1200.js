import { testers } from "./dataAboutTesters.js";

const TELEGRAM_LINK = 'https://t.me/proteststudio';

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

const anchor = document.getElementById('anchor');
anchor.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const amountTesters = testers.length;
navigationPointsBlock.style.width = `${1.09375 + testers.length * 2.76042}vw`;

let navigationPointsBlockActivePoint = 0;

const createCard = (i) => {
    const testerCard = document.createElement('div');
    testerCard.className = 'from1200__comp_8__tester_card';
    if (i === navigationPointsBlockActivePoint) testerCard.classList.add('from1200__comp_8__active_card');
    testerCard.id = `from1200__comp_8__tester_card_${i}`
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

    const backMountains = document.createElement('img');
    backMountains.src = `img/svg/from1200_comp_8__back_mountains.svg`;
    backMountains.alt = 'background mountains';

    const leftButtonImg = document.createElement('img');
    leftButtonImg.src = `img/svg/from1200__comp_8__artboard.svg`;
    leftButtonImg.alt = 'telegram icon';
    leftButtonImg.className = 'from1200__comp_8__tester_card__left_buton_icon';
    const headerCardNameBlock = document.createElement('div');
    headerCardNameBlock.className = 'from1200__comp_8__tester_card__name_block';
    const headerCardName = document.createElement('h1');
    headerCardName.textContent = testers[i].name;
    const headerCardSpecialization = document.createElement('p');

    const doesOwnBlock = document.createElement('div');
    const lastBlock = document.createElement('div');

    const lastBlockArtBoard = document.createElement('div');
    lastBlockArtBoard.addEventListener('click', () => {
        window.open(TELEGRAM_LINK, '_blank');
    });
    const lastBlockButtons = document.createElement('button');

    lastBlockButtons.textContent = 'Забронировать встречу';
    lastBlockArtBoard.appendChild(leftButtonImg);
    lastBlock.appendChild(lastBlockArtBoard);
    lastBlock.appendChild(lastBlockButtons);
    doesOwnBlock.className = 'from1200__comp_8__tester_card__does_own';
    for (let numberRow = 0; numberRow < testers[i].doesOwn.length; numberRow++) {
        const borderColorMap = {
            'gold': 'yellow_border',
            'blue': 'blue_border',
            'black': ''
        }
        const RowBlock = document.createElement('div');
        for (let doesOwnNumber in testers[i].doesOwn[numberRow]) {
            const doesOwn = testers[i].doesOwn[numberRow][doesOwnNumber]
            const doesOwnDetail = document.createElement('div');
            doesOwnDetail.textContent = doesOwn;
            doesOwnDetail.className = 'from1200__comp_8__tester_card__does_own__detail';
            const borderColor = borderColorMap[testers[i].borderColor[numberRow][doesOwnNumber]];
            if (borderColor) doesOwnDetail.classList.add(borderColor);
            RowBlock.appendChild(doesOwnDetail);
        }
        RowBlock.className = 'from1200__comp_8__tester_card__row_block';
        doesOwnBlock.append(RowBlock)
    }

    headerCardSpecialization.textContent = testers[i].specialization;
    headerCardNameBlock.appendChild(headerCardName);
    headerCardNameBlock.appendChild(headerCardSpecialization);
    headerCard.appendChild(headerCardNameBlock);
    headerCard.appendChild(headerCharacteristicsBlock);
    testerCard.appendChild(backImageMan);
    testerCard.appendChild(backDetail);
    testerCard.appendChild(backMountains);
    testerCard.appendChild(headerCard);
    testerCard.appendChild(doesOwnBlock);
    testerCard.appendChild(lastBlock);
    return testerCard
}

for (let i = 0; i < 3; i++) {
    cardSection.appendChild(createCard(i === 0 ? amountTesters - 1 : i - 1));
}


for (let i = 0; i < amountTesters; i++) {
    const circlePoint = document.createElement('div');
    circlePoint.className = `from1200__comp_8__navigation_point${i == navigationPointsBlockActivePoint ? ' from1200__comp_8__navigation_point_active' : ''}`
    circlePoint.id = `composition_8__navigation_point__${i}`;
    circlePoint.addEventListener('click', () => {//test id 0-5 //amount 6
        const rightMoveCard = async (step, amount) => {
            const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
            const realPoint = i - amount;
            console.log(realPoint);
            const testerCardLeft = document.getElementById(`from1200__comp_8__tester_card_${(realPoint > 0 ? realPoint : amountTesters) - 1}`); // левая карточка
            const testerCardMain = document.getElementById(`from1200__comp_8__tester_card_${realPoint}`); // центральная карточка
            const testerCardRight = document.getElementById(`from1200__comp_8__tester_card_${(realPoint < amountTesters - 1 ? realPoint : -1) + 1}`); // правая карточка
            const is_right = step === -1
            console.log(`from1200__comp_8__tester_card_${navigationPointsBlockActivePoint}`);
            console.log(testerCardMain)
            testerCardMain.classList.remove('from1200__comp_8__active_card'); //убираем класс активная карта у основной
            if (is_right) {
                testerCardRight.classList.add('from1200__comp_8__active_card'); //добавляем активный класс правой
                testerCardLeft.style.width = '0vw';
                const newRightCard = createCard((realPoint < amountTesters - 2 ? realPoint : -2) + 2);
                cardSection.appendChild(newRightCard);
                setTimeout(() => { testerCardLeft.remove(); }, 300)
            } else {
                testerCardLeft.classList.add('from1200__comp_8__active_card'); // или добавляем активный класс левой
                const newLeftCard = createCard((realPoint > 1 ? realPoint : amountTesters + 1) - 2);
                newLeftCard.style.width = '0';
                cardSection.insertBefore(newLeftCard, testerCardLeft);
                setTimeout(() => { newLeftCard.style.width = ''; }, 1)
                setTimeout(() => { testerCardRight.remove(); }, 75)
            }
            await delay(400);
        }

        const moveTheCards = async (amount) => {
            const step = amount < 0 ? 1 : -1
            while (amount != 0) {
                await rightMoveCard(step, amount);
                amount += step
            }
        }
        if (i !== navigationPointsBlockActivePoint) {
            moveTheCards(i - navigationPointsBlockActivePoint)
            circlePoint.classList.add('from1200__comp_8__navigation_point_active');
            const oldCirclePoint = document.getElementById(`composition_8__navigation_point__${navigationPointsBlockActivePoint}`);
            oldCirclePoint.classList.remove('from1200__comp_8__navigation_point_active');
            navigationPointsBlockActivePoint = i;
        }
    })
    navigationPointsBlock.appendChild(circlePoint);
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
    if (window.scrollY > 0) {
        anchor.style.display = 'block';
        setTimeout(() => anchor.style.opacity = '1', 1)
    } else {
        anchor.style.opacity = '0'
        setTimeout(() => anchor.style.display = '', 300)
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
