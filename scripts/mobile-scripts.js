import { testers } from "./dataAboutTesters.js";
import { TELEGRAM_LINK, VK_LINK, TELEPHON_NUMBER, EMAIL, LOCATION, SERVIES_LINK, COUESES_LINK, SOFTWARE_TESTER_COURSE, COMPUTER_LITERACY_COURSE_FOR_QA, MESSAGE_TITLE, MESSAGE_TEMPLATE } from "./basicInformation.js";

const hamburger = document.getElementById('mobile__hamburger');
const closeAsideMenu = document.getElementById('mobile__right_menu__close');
const menu = document.getElementById('mobile__right_menu');
const blurBack = document.getElementById('mobile__blur__back');
const comp3CardStates = [false, false, false];
const comp3CardHSize = [22.16274, 15.09636, 17.45182];
const accordionSetH = [19.05782, 19.05782, 16.70236, 14.3469, 16.70236, 21.41328];
const accordionStates = [false, false, false, false, false, false];
const testerSection = document.getElementById('mobile__tester_section');
const testerCardLeftSet = [-70, 12.56684, 100];
let activeTesterCardNumber = 1;
let isActiveCoursel = false;
const leftPointer = document.getElementById('mobaile__tester_pointer_left');
const rightPointer = document.getElementById('mobaile__tester_pointer_right');
const amountTesters = testers.length;

const transitionToLink = (link) => {
    const innerFunc = () => {
        window.location.href = link;
    }
    return innerFunc;
}

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
        if (!isActiveCoursel) {
            isActiveCoursel = true;
            const leftCardNumber = diffNeberByOne(activeTesterCardNumber - 1);
            const rightCardNumber = diffNeberByOne(activeTesterCardNumber + 1);
            const leftCard = document.getElementById(`mobile__tester_card_${leftCardNumber}`);
            const activeCard = document.getElementById(`mobile__tester_card_${activeTesterCardNumber}`);
            const rightCard = document.getElementById(`mobile__tester_card_${rightCardNumber}`);
            const leftCardOpen = document.getElementById(`mobile__tester_card_${leftCardNumber}`);
            const activeCardOpen = document.getElementById(`mobile__tester_card_${activeTesterCardNumber}`);
            const rightCardOpen = document.getElementById(`mobile__tester_card_${rightCardNumber}`);

            activeCard.classList.remove('active');
            activeCardOpen.classList.remove('active');
            if (isLeft) {
                rightCard.classList.add('active');
                rightCardOpen.classList.add('active');
                const numberNewRightCard = diffNeberByOne(rightCardNumber + 1);
                const newCard = createTesterCard(numberNewRightCard, false, 100);
                leftCard.style.left = '-90vw';
                activeCard.style.left = `${testerCardLeftSet[0]}vw`;
                rightCard.style.left = `${testerCardLeftSet[1]}vw`;
                testerSection.appendChild(newCard);
                setTimeout(() => { newCard.style.left = `${testerCardLeftSet[2]}vw`; }, 1)
                setTimeout(() => {
                    testerSection.removeChild(leftCard);
                    isActiveCoursel = false;
                }, 300)
            } else {
                leftCard.classList.add('active');
                leftCardOpen.classList.add('active');
                const numberNewLeftCard = diffNeberByOne(leftCardNumber - 1);
                const newCard = createTesterCard(numberNewLeftCard, false, -90)
                rightCard.style.left = '140vw';
                leftCard.style.left = `${testerCardLeftSet[1]}vw`;
                activeCard.style.left = `${testerCardLeftSet[2]}vw`;
                testerSection.appendChild(newCard);
                setTimeout(() => { newCard.style.left = `${testerCardLeftSet[0]}vw`; }, 1)
                setTimeout(() => {
                    testerSection.removeChild(rightCard);
                    isActiveCoursel = false;
                }, 300)
            }
            activeTesterCardNumber += isLeft ? 1 : -1;
            activeTesterCardNumber = diffNeberByOne(activeTesterCardNumber)
        }
    }
    return innerFunck;
}

leftPointer.addEventListener('click', swapTesterCard(false));
rightPointer.addEventListener('click', swapTesterCard(true));

const createTesterCard = (number, isActive, leftValue) => {
    const tester = testers[number];
    //card block
    const newCard = document.createElement('div');
    newCard.id = `mobile__tester_card_${number}`;
    newCard.style.left = `${leftValue}vw`;
    newCard.classList.add('mobile__tester_card');
    if (isActive) {
        newCard.classList.add('active');
    }

    //back 
    const back = document.createElement('div');
    back.id = 'mobile__tester_card__back';
    newCard.appendChild(back);

    //Создаем блок с именем и специализацией в открытой версии
    const nameBlockOpen = document.createElement('div');
    nameBlockOpen.classList.add('mobile__tester_card_open__name_block');
    const nameHeadingOpen = document.createElement('h1');
    nameHeadingOpen.textContent = tester.name;
    const specializationParagraphOpen = document.createElement('p');
    specializationParagraphOpen.textContent = tester.specialization;
    nameBlockOpen.appendChild(nameHeadingOpen);
    nameBlockOpen.appendChild(specializationParagraphOpen);
    back.appendChild(nameBlockOpen);


    //Создаем блок откат в открытой версии
    const backPointer = document.createElement('div');
    backPointer.classList.add('mobile__tester_card_open__back_block');
    backPointer.addEventListener('click', () => {
        front.style.display = '';
        back.style.opacity = '';
        setTimeout(() => front.style.opacity = '', 1)
        setTimeout(() => {
            front.style.zIndex = '';
            back.style.zIndex = '';
            back.style.display = '';
        }
            , 300)
    })
    const backPoinerImg = document.createElement('img');
    backPoinerImg.src = 'img/svg/tablet__comp_8__poiner_reversed.svg';
    backPoinerImg.alt = 'the back button';
    backPointer.appendChild(backPoinerImg);
    back.appendChild(backPointer);

    //Создаем текстовый-блок описаний в открытой версии
    const descriptionBlock = document.createElement('ul');
    descriptionBlock.classList.add('mobile__tester_card_open__description_block')
    tester.characteristics.forEach(
        characteristic => {
            const characteristicParagraph = document.createElement('li');
            characteristicParagraph.innerText = characteristic;
            descriptionBlock.appendChild(characteristicParagraph);
        }
    )
    back.appendChild(descriptionBlock);

    //Создаем текстовый-блок описаний в открытой версии
    tester.doesOwn.forEach((skillsRow, number) => {
        const skillsBlock = document.createElement('div');
        skillsRow.forEach((skill, numberInRow) => {
            const skillBlock = document.createElement('p');
            skillBlock.innerText = skill;
            skillBlock.classList.add(`${tester.borderColor[number][numberInRow]}_line`)
            skillsBlock.appendChild(skillBlock);
        })
        skillsBlock.classList.add('mobile__tester_card_open__skills_block')
        skillsBlock.style.top = 58 + 5.15 * number + '%';
        back.appendChild(skillsBlock);
    })

    //создаем блок с кнопкой
    const openCardTgBlock = document.createElement('div');
    openCardTgBlock.classList.add('mobile__tester_card_open__tg_button_block');
    const tgLogo = document.createElement('img');
    const openCardButtonToTransition = document.createElement('div');
    openCardButtonToTransition.classList.add('mobile__tester_card_open__button_transition');
    openCardButtonToTransition.innerText = 'Забронировать встречу';
    //openCardButtonToTransition.addEventListener('click', transitionToForm(tester.qualification));
    back.appendChild(openCardButtonToTransition);
    tgLogo.src = 'img/svg/tellegram_logo.svg';
    tgLogo.alt = 'Telegram logotip';
    openCardTgBlock.appendChild(tgLogo);
    openCardTgBlock.addEventListener('click', transitionToLink(TELEGRAM_LINK));
    back.appendChild(openCardTgBlock);

    //front 
    const front = document.createElement('div');
    front.id = 'mobile__tester_card__front';
    newCard.appendChild(front)

    // front block name
    const nameBlock = document.createElement('div');
    nameBlock.classList.add('mobile__tester_card__name_block');
    const nameHeading = document.createElement('h1');
    nameHeading.textContent = tester.name;
    const specializationParagraph = document.createElement('p');
    specializationParagraph.textContent = tester.specialization;
    nameBlock.appendChild(nameHeading);
    nameBlock.appendChild(specializationParagraph);
    front.appendChild(nameBlock);

    // front detail image
    const detailImage = document.createElement('img');
    detailImage.src = 'img/svg/tablet__tester_card__detail.svg';
    detailImage.alt = 'a thought icon going to a person';
    detailImage.classList.add('mobile__tester_card__detail');
    front.appendChild(detailImage);


    //front mount image
    const mountainsImage = document.createElement('img');
    mountainsImage.src = 'img/svg/tablet__tester_card__mountains.svg';
    mountainsImage.alt = 'the image of the white mountains';
    mountainsImage.classList.add('mobile__tester_card__mountains');
    front.appendChild(mountainsImage);

    //front tester photo
    const testerPhotoImage = document.createElement('img');
    testerPhotoImage.src = `img/photos_of_testers/mobile_${tester.img}.png`;
    testerPhotoImage.alt = 'photo of the tester';
    testerPhotoImage.classList.add('mobile__tester_card__tester_photo');
    front.appendChild(testerPhotoImage);

    // front button
    const button = document.createElement('button');
    button.classList.add('mobile__tester_card__button');
    button.id = `mobile__tester_card_${number}__button`;
    button.addEventListener('click', () => {
        back.style.display = 'block';
        front.style.opacity = '0';
        setTimeout(() => back.style.opacity = '1', 1)
        setTimeout(() => {
            back.style.zIndex = '1';
            front.style.zIndex = '0';
        }
            , 300)
    })
    const buttonText = document.createElement('p');
    buttonText.textContent = 'Больше информации';
    const buttonIcon = document.createElement('div');
    const pointerImage = document.createElement('img');
    pointerImage.src = 'img/svg/tablet__tester_card__pointer.svg';
    pointerImage.alt = 'pointer';
    pointerImage.classList.add('mobile__tester_card__pointer');
    buttonIcon.appendChild(pointerImage);
    button.appendChild(buttonText);
    button.appendChild(buttonIcon);
    front.appendChild(button);

    return newCard;
}

for (let i = 0; i < 3; ++i) {
    testerSection.appendChild(createTesterCard(i, i === activeTesterCardNumber, testerCardLeftSet[i]));
}

for (let i = 1; i <= 6; ++i) {
    const accordionPoint = document.getElementById(`mobile__accordion__point_${i}`);
    accordionPoint.addEventListener('click', () => {
        const currentState = !accordionStates[i - 1];
        accordionStates[i - 1] = currentState;
        accordionPoint.style.height = currentState ? `${accordionSetH[i - 1]}lvh` : '';
    })
}

for (let i = 1; i <= 3; i++) {
    const card = document.getElementById(`mobile__comp_3__card_${i}`);
    const openCard = document.getElementById(`mobile__comp_3__open_card_${i}`);
    const pointer = document.getElementById(`mobile__comp_3__pointer_${i}`);
    const preview = document.getElementById(`mobile__comp_3__card_${i}__preview`);
    const title = document.getElementById(`mobile__comp_3__card_${i}__title`);
    card.addEventListener('click', () => {
        const currentState = !comp3CardStates[i - 1];
        comp3CardStates[i - 1] = currentState;
        card.style.height = currentState ? `${comp3CardHSize[i - 1]}lvh` : '';
        pointer.style.transform = currentState ? 'rotate(180deg)' : '';
        openCard.style.opacity = currentState ? '1' : '';
        if (currentState) {
            preview.style.opacity = '0';
            title.style.opacity = '0';
            setTimeout(() => {
                preview.style.display = 'none';
                title.style.display = 'none';
                pointer.style.marginLeft = '83vw';
            }, 300)
        } else {
            preview.style.display = '';
            title.style.display = '';
            pointer.style.marginLeft = '';
            setTimeout(() => {
                preview.style.opacity = '';
                title.style.opacity = '';
            }, 1)
        }
    })
}

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