import { testers } from "./dataAboutTesters.js";

const hamburger = document.getElementById('tablet_hamburger');//772 926
const navigation = document.getElementById('from_tablet_modal_menu__navigation')
const closeNavigation = document.getElementById('from_tablet__nav__close');
const flipCardStates = [false, false, false];
const accordionPointStatets = [false, false, false, false, false, false];
const accordionPointActiveHeights = ['15.19196vh', '15.19196vh', '15.19196vh', '12.91317vh', '13.02168vh', '17.57927vh'];
const fixedHeader = document.getElementById('from_tablet__fixed_header');
const fixedMenuBurger = document.getElementById('tablet__fixed_menu__hamburger');
let isOpenBurger = false;
let activeCardNumber = 0;
const amountTesters = testers.length;
const windowHieght = window.innerHeight;
const cardComposition = document.getElementById('tablet_composition_8')
const leftPosCard = [-25.51813, 14.50777, 71.24352];

const leftPointer = document.getElementById('tablet__tester_card__left_pointer')
const rightPointer = document.getElementById('tablet__tester_card__right_pointer')

const diffNeberByOne = (number) => {
    if (number == amountTesters) {
        number = 0;
    } else if (number == -1) {
        number = amountTesters - 1;
    }
    return number
}

const swapTesterCard = (isLeft) => {
    const innerFunck = () => {
        console.log(isLeft)
        const leftCardNumber = diffNeberByOne(activeCardNumber - 1);
        const rightCardNumber = diffNeberByOne(activeCardNumber + 1);
        const leftCard = document.getElementById(`tablet__tester_card__${leftCardNumber}`);
        const activeCard = document.getElementById(`tablet__tester_card__${activeCardNumber}`);
        const rightCard = document.getElementById(`tablet__tester_card__${rightCardNumber}`);
        activeCard.classList.remove('active');
        if (isLeft) {
            rightCard.classList.add('active');
            const numberNewRightCard = diffNeberByOne(leftCardNumber + 1);
            const newCard = generateCard(testers[numberNewRightCard], false, 140, numberNewRightCard)
            leftCard.style.left = '-40vw';
            activeCard.style.left = `${leftPosCard[0]}vw`;
            rightCard.style.left = `${leftPosCard[1]}vw`;
            newCard.style.left = `${leftPosCard[2]}vw`;
        } else {
            leftCard.classList.add('active');
            const numberNewLeftCard = diffNeberByOne(leftCardNumber - 1);
            const newCard = generateCard(testers[numberNewLeftCard], false, -40, numberNewLeftCard)
            rightCard.style.left = '140vw';
            newCard.style.left = `${leftPosCard[0]}vw`;
            leftCardCard.style.left = `${leftPosCard[1]}vw`;
            activeCard.style.left = `${leftPosCard[2]}vw`;
        }
        activeCardNumber += isLeft ? 1 : -1;
        activeCardNumber = diffNeberByOne(activeCard)
    }
    return innerFunck;
}

console.log("leftPointer:", leftPointer); 
console.log("rightPointer:", rightPointer); 

leftPointer.addEventListener('click', () => { console.log(1) });
rightPointer.addEventListener('click', () => { console.log(1) });
//swapTesterCard(true) 

//swapTesterCard(false)
window.addEventListener('scroll', () => {
    if (!isOpenBurger) {
        fixedHeader.style.opacity = window.scrollY > windowHieght ? '1' : '';
        fixedHeader.style.top = window.scrollY > windowHieght ? '0' : '';
    }
})

for (let i = 1; i <= 6; ++i) {
    const accordionPoint = document.getElementById(`tablet__accordion__point_${i}`);
    const accordionBody = document.getElementById(`tablet__accordion__point_${i}__body`);
    const pointer = document.getElementById(`tablet__accordion__point_${i}__pointer`)
    accordionPoint.addEventListener('click', () => {
        accordionPointStatets[i - 1] = !accordionPointStatets[i - 1]
        const currentState = accordionPointStatets[i - 1]
        accordionBody.style.opacity = currentState ? 1 : 0;
        accordionPoint.style.height = currentState ? accordionPointActiveHeights[i - 1] : '';
        pointer.style.transform = currentState ? 'rotate(180deg)' : '';
    })
}

for (let i = 1; i <= 3; ++i) {
    const cardBlock = document.getElementById(`tablet__flipcard_block_${i}`);
    const card = document.getElementById(`tablet__flipcard_card_${i}`);
    const title = document.getElementById(`tablet__flipcard_card_${i}__title`);
    const numberLogo = document.getElementById(`tablet__flipcard_card_${i}__number_logo`)
    const preview = document.getElementById(`tablet__flipcard_card_${i}__preview`);
    const front = document.getElementById(`tablet__flipcard_card_${i}__front`)
    const back = document.getElementById(`tablet__flipcard_card_${i}__back`)
    cardBlock.addEventListener('click', () => {
        flipCardStates[i - 1] = !flipCardStates[i - 1]
        const isFlip = flipCardStates[i - 1];
        front.style.transitionDuration = isFlip ? '0.5s' : '';
        back.style.transitionDuration = isFlip ? '1s' : '';
        setTimeout
            (() => {
                cardBlock.style.transform = isFlip ? 'rotate3d(-1, 1, 0, 180deg)' : '';
                card.style.width = isFlip ? '18.91508vh' : '';
                card.style.height = isFlip ? '25.33972vw' : '';
                card.style.marginTop = isFlip ? 'calc((26.80924vw - 20.04796vh)/-2)' : '';
                card.style.marginLeft = isFlip ? 'calc((26.80924vw - 20.04796vh)/2)' : '';
                title.style.opacity = isFlip ? '0' : '';
                preview.style.opacity = isFlip ? '0' : '';
                numberLogo.style.opacity = isFlip ? '0' : '';
                front.style.opacity = isFlip ? '0' : '';
                back.style.opacity = isFlip ? '1' : '';
            }, 1)
    })
}

const openBurger = () => {
    isOpenBurger = true;
    from_tablet_modal_menu.style.display = 'block';
    setTimeout(() => {
        from_tablet_modal_menu.style.backdropFilter = 'blur(2px)';
        navigation.style.marginRight = '0';
    }, 1)
}

hamburger.addEventListener('click', openBurger);
fixedMenuBurger.addEventListener('click', () => {
    fixedHeader.style.opacity = '';
    fixedHeader.style.top = '';
    openBurger();
});

closeNavigation.addEventListener('click', () => {
    isOpenBurger = false;
    from_tablet_modal_menu.style.backdropFilter = '';
    navigation.style.marginRight = '';
    setTimeout(() => {
        from_tablet_modal_menu.style.display = '';
    }, 500)
})

const generateCard = (tester, isActive, left, number) => {
    const additionalClass = isActive ? ' active' : ''
    return `
    <div class='tablet__tester_card${additionalClass}' style='left: ${left}vw;' id='tablet__tester_card__${number}'>
        <div class='tablet__tester_card__inner_wrapper'>
            <div class='tablet__tester_card__name_block${additionalClass}'>
                <h1>${tester.name}</h1>
                <p>${tester.specialization}</p>
            </div>
            <img src='img/svg/tablet__tester_card__detail.svg' alt='a thought icon going to a person' class='tablet__tester_card__detail'>
            <img src='img/svg/tablet__tester_card__mountains.svg' alt='the image of the white mountains' class='tablet__tester_card__mountains'>
            <img src='img/photos_of_testers/tablet_${tester.img}.png' alt='photo of the tester' class='tablet__tester_card__tester_photo'>
            <button class='tablet__tester_card__button${additionalClass}'>
                <p>Больше информации</p>
                <div>
                    <img src='img/svg/tablet__tester_card__pointer.svg' alt='pointer' class='tablet__tester_card__pointer'>
                </div>
            </button>
        </div>
    </div>
    `
}

testers.forEach(
    (tester, number) => {
        number == 1;
        cardComposition.innerHTML += generateCard(tester, number == 1, leftPosCard[number], number)
    }
)