import { testers } from "./dataAboutTesters.js";
import { responders } from './dataAboutResponders.js';

//если нужно будет подредактировать контанты
const TELEGRAM_LINK = 'https://t.me/proteststudio';
const VK_LINK = 'https://vk.com/pro_test.studio';
const TELEPHON_NUMBER = '+79933553088';
const EMAIL = 'support@pro-test.studio';
const LOCATION ="CDFjBYZ8";
const SERVIES_LINK = 'https://pro-test.studio/ru';
const COUESES_LINK = 'https://pro-test.studio/ru/course';


const header = document.getElementById('fixedHeader1200');
const hieght = window.innerHeight;
const accordionPoints = document.getElementsByClassName('accordion_point');
const navigationPointsBlock = document.getElementById('comp_8__navigation_block');
const cardSection = document.getElementById('composition_8__card_section');

const vkFormButton = document.getElementById('bottom_with_link_on_vk');
const tgFormButton = document.getElementById('bottom_with_link_on_tellegram');

const comp_2_widdget_1 = document.getElementById('composition_2__w1');
const comp_2_widdget_2 = document.getElementById('composition_2__w2');
const comp_2_widdget_3 = document.getElementById('composition_2__w3');

const comp_3__tile_0 = document.getElementById('composition_3__tile_0');
const comp_3__tile_1 = document.getElementById('composition_3__tile_1');
const comp_3__tile_2 = document.getElementById('composition_3__tile_2');

const anchorImg = document.getElementById('anchor_img');
const anchorImgPath = document.querySelector('#anchor_img circle');
const callingButton = document.getElementById('calling_button');

const block_junior = document.getElementById('form_point_checkbox_block_junior');
const block_middle = document.getElementById('form_point_checkbox_block_middle');
const block_senior = document.getElementById('form_point_checkbox_block_senior');

const marcer_junior = document.getElementById('form_point_checkbox_marcer_junior');
const marcer_middle = document.getElementById('form_point_checkbox_marcer_middle');
const marcer_senior = document.getElementById('form_point_checkbox_marcer_senior');

let formCheckBoxValue = [false, false, false];
const checkBoxMarcerSet = [marcer_junior, marcer_middle, marcer_senior];
const checkBoxBlockSet = [block_junior, block_middle, block_senior];

const reportsAutorBlock = document.getElementById('reports_autor_block');
const reportsTextBlock = document.getElementById('reports_text_block');
const reportsAutorImg = document.getElementById('reports_autor_img');
const reportsAutorName = document.getElementById('reports_autor_name');
const reportsAutorDescription = document.getElementById('reports_autor_desc');
const reportsText = document.getElementById('reports_text');
const amountResponders = responders.length;
const leftPointer = document.getElementById('respond_pointer_left');
const rightPointer = document.getElementById('respond_pointer_right');

let activeResponders = 0;

const contactsBlockMail = document.getElementById('contactsBlockMail');
const contactsBlockLocation = document.getElementById('contactsBlockLocation');
const contactsBlockTel = document.getElementById('contactsBlockTel');

const linksBlockCategory1 = document.getElementById('linksBlockCategory1');
const linksBlockCategory3 = document.getElementById('linksBlockCategory3');


const setActiveResponders = (number) => {
    const { name, description, feedback, img } = responders[number];
    reportsAutorBlock.style.opacity = '0';
    reportsTextBlock.style.opacity = '0';
    setTimeout(() => {
        reportsAutorImg.src = `img/photos_of_responders/${img}.png`;
        reportsAutorImg.alt = `responder ${name}`;
        reportsAutorName.textContent = name;
        reportsAutorDescription.textContent = description;
        reportsText.textContent = feedback;
        reportsAutorBlock.style.opacity = '1';
        reportsTextBlock.style.opacity = '1';
    }, 300)

}

setActiveResponders(0);

const changeActiveResponders = (isRight) => {
    activeResponders += isRight ? 1 : -1;
    if (activeResponders < 0) activeResponders = amountResponders - 1
    else if (activeResponders === amountResponders) activeResponders = 0;
    setActiveResponders(activeResponders);
}

contactsBlockMail.addEventListener('click', function() {
    window.location.href = `mailto:${encodeURIComponent(EMAIL)}`;
});

contactsBlockLocation.addEventListener('click', function() {
    window.location.href = `https://yandex.ru/maps/-/:${LOCATION}`;
});

linksBlockCategory1.addEventListener('click', function() {
    window.location.href = SERVIES_LINK;
});

linksBlockCategory3.addEventListener('click', function() {
    window.location.href = COUESES_LINK;
});

contactsBlockTel.addEventListener('click', () => {
    window.location.href = `tel:${TELEPHON_NUMBER}`;
})

leftPointer.addEventListener('click', () => { changeActiveResponders(false) });
rightPointer.addEventListener('click', () => { changeActiveResponders(true) });


const setupNewCheckBoxValue = (index) => {
    const innerFunc = () => {
        const state = formCheckBoxValue[index];
        checkBoxMarcerSet[index].style.backgroundColor = !state ? '#4273FB' : '';
        checkBoxMarcerSet[index].style.borderColor = !state ? '#4273FB' : '';
        checkBoxMarcerSet[index].style.setProperty('--opacity_value', !state ? '1' : '');
        formCheckBoxValue[index] = !state;
    }
    return innerFunc;
}

for (let i in checkBoxBlockSet) {
    checkBoxBlockSet[i].addEventListener('click', setupNewCheckBoxValue(i));
}

vkFormButton.addEventListener('click', () => {
    window.open(VK_LINK, '_blank');
})

tgFormButton.addEventListener('click', () => {
    window.open(TELEGRAM_LINK, '_blank');
})

callingButton.addEventListener('click', () => {
    window.location.href = `tel:${TELEPHON_NUMBER}`;
})

anchorImg.addEventListener('mouseenter', function () {
    anchorImgPath.style.transition = 'fill-opacity 0.5s ease';
    anchorImgPath.style.fillOpacity = '1';
});


anchorImg.addEventListener('mouseleave', function () {
    anchorImgPath.style.fillOpacity = '0.3';
});

let isActiveCarousel = false;
let isActiveCarouselPoints = false;

const anchor = document.getElementById('anchor');
anchor.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const amountTesters = testers.length;
navigationPointsBlock.style.width = `${1.09375 + (testers.length - 1) * 2.76042}vw`;

const onClickLeftCardGenerate = (step, i) => {
    const numberNewActivePoint = step > 0 ? (i > 0 ? i : amountTesters) - 1 : (i < amountTesters - 1 ? i : -1) + 1;
    const inner_f = () => {
        if (!isActiveCarousel) {
            rightMoveCard(step, 0, i);
            const newActivePoint = document.getElementById(`composition_8__navigation_point__${numberNewActivePoint}`);
            const oldActivePoint = document.getElementById(`composition_8__navigation_point__${i}`);
            navigationPointsBlockActivePoint = numberNewActivePoint;
            newActivePoint.classList.add('from1200__comp_8__navigation_point_active');
            oldActivePoint.classList.remove('from1200__comp_8__navigation_point_active');
        }
    }
    return inner_f;
}

let navigationPointsBlockActivePoint = 0;

const rightMoveCard = async (step, amount, i) => {
    if (!isActiveCarousel) {
        isActiveCarousel = true;
        const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        const realPoint = i - amount;
        console.log(realPoint)
        const testerCardLeft = document.getElementById(`from1200__comp_8__tester_card_${(realPoint > 0 ? realPoint : amountTesters) - 1}`); // левая карточка
        const testerCardMain = document.getElementById(`from1200__comp_8__tester_card_${realPoint}`); // центральная карточка
        const testerCardRight = document.getElementById(`from1200__comp_8__tester_card_${(realPoint < amountTesters - 1 ? realPoint : -1) + 1}`); // правая карточка
        const is_right = step === -1
        testerCardMain.classList.remove('from1200__comp_8__active_card'); //убираем класс активная карта у основной
        if (is_right) {
            //testerCardRight.removeEventListener('click', null);
            const new_element = testerCardRight.cloneNode(true);
            testerCardRight.parentNode.replaceChild(new_element, testerCardRight);
            const nextRightSwap = onClickLeftCardGenerate(step, (realPoint < amountTesters - 1 ? realPoint : -1) + 1);
            const nextLeftSwap = onClickLeftCardGenerate(-step, (realPoint < amountTesters - 1 ? realPoint : -1) + 1);
            testerCardMain.addEventListener('click', nextLeftSwap);
            new_element.classList.add('from1200__comp_8__active_card'); //добавляем активный класс правой
            testerCardLeft.style.width = '0vw';
            const newRightCard = createCard((realPoint < amountTesters - 2 ? realPoint : realPoint - amountTesters) + 2);
            newRightCard.addEventListener('click', nextRightSwap);//а на новую правую даём новую правую
            cardSection.appendChild(newRightCard);
            setTimeout(() => { testerCardLeft.remove(); }, 300)
        } else {
            const new_element = testerCardLeft.cloneNode(true);
            testerCardLeft.parentNode.replaceChild(new_element, testerCardLeft);//убираем все с левой карточки, она теперь центральная
            new_element.classList.add('from1200__comp_8__active_card'); // или добавляем активный класс левой
            const newLeftCard = createCard((realPoint > 1 ? realPoint : (amountTesters + realPoint)) - 2);
            const nextLeftSwap = onClickLeftCardGenerate(step, (realPoint > 0 ? realPoint : amountTesters) - 1);
            newLeftCard.addEventListener('click', nextLeftSwap);//на новую левую, теперь новая функция на ещё более левую
            const nextRightSwap = onClickLeftCardGenerate(-step, (realPoint > 0 ? realPoint : amountTesters) - 1);
            testerCardMain.addEventListener('click', nextRightSwap);//а на новую правую даём новую правую
            newLeftCard.style.width = '0';
            cardSection.insertBefore(newLeftCard, new_element);
            setTimeout(() => { newLeftCard.style.width = ''; }, 1)
            setTimeout(() => { testerCardRight.remove(); }, 300)
        }
        await delay(600);
        isActiveCarousel = false;
    }
}

const createCard = (i, f = false) => {
    const testerCard = document.createElement('div');
    testerCard.className = 'from1200__comp_8__tester_card';
    if (i === navigationPointsBlockActivePoint && f) testerCard.classList.add('from1200__comp_8__active_card');
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
    backImageMan.src = `img/photos_of_testers/${testers[i].img}.png`;
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
    const new_card = createCard(i === 0 ? amountTesters - 1 : i - 1, true);
    if (i === 0) {
        const onClickLeftCard = onClickLeftCardGenerate(1, 0)
        new_card.addEventListener('click', onClickLeftCard)
    } else if (i === 2) {

        const onClickLeftCard = onClickLeftCardGenerate(-1, 0)
        new_card.addEventListener('click', onClickLeftCard)

    }
    cardSection.appendChild(new_card);
}


for (let i = 0; i < amountTesters; i++) {
    const circlePoint = document.createElement('div');
    circlePoint.className = `from1200__comp_8__navigation_point${i == navigationPointsBlockActivePoint ? ' from1200__comp_8__navigation_point_active' : ''}`
    circlePoint.id = `composition_8__navigation_point__${i}`;
    circlePoint.addEventListener('click', () => {//test id 0-2 //amount 3
        if (!isActiveCarouselPoints) {
            isActiveCarouselPoints = true;
            const moveTheCards = async (amount) => {
                const step = amount < 0 ? 1 : -1
                while (amount != 0) {
                    await rightMoveCard(step, amount, i);
                    amount += step
                }
                isActiveCarouselPoints = false;
            }
            if (i !== navigationPointsBlockActivePoint) {
                moveTheCards(i - navigationPointsBlockActivePoint)
                circlePoint.classList.add('from1200__comp_8__navigation_point_active');
                const oldCirclePoint = document.getElementById(`composition_8__navigation_point__${navigationPointsBlockActivePoint}`);
                oldCirclePoint.classList.remove('from1200__comp_8__navigation_point_active');
                navigationPointsBlockActivePoint = i;
            }
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


