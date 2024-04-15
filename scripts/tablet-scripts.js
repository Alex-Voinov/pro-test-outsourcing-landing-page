import { testers } from "./dataAboutTesters.js";
import { responders } from "./dataAboutResponders.js";
import { COMPUTER_LITERACY_COURSE_FOR_QA, COUESES_LINK, EMAIL, LOCATION, MESSAGE_TEMPLATE, MESSAGE_TITLE, SERVIES_LINK, SOFTWARE_TESTER_COURSE, TELEGRAM_LINK, TELEPHON_NUMBER, VK_LINK } from "./basicInformation.js";

const hamburger = document.getElementById('tablet_hamburger');
const navigation = document.getElementById('from_tablet_modal_menu__navigation')
const closeNavigation = document.getElementById('from_tablet__nav__close');
const flipCardStates = [false, false, false];
const accordionPointStatets = [false, false, false, false, false, false];
const accordionPointActiveHeights = ['18.13472vw', '18.13472vw', '18.13472vw', '15.41451vw', '15.54404vw', '20.98446vw'];
const fixedHeader = document.getElementById('from_tablet__fixed_header');
const fixedMenuBurger = document.getElementById('tablet__fixed_menu__hamburger');
let isOpenBurger = false;
let activeCardNumber = 1;
let isActiveCoursel = false;
const amountTesters = testers.length;
const windowHieght = window.innerHeight;
const cardComposition = document.getElementById('tablet_composition_8_card_block')
const leftPosCard = [-25.51813, 14.50777, 71.24352];
const leftPointer = document.getElementById('tablet__tester_card__left_pointer')
const rightPointer = document.getElementById('tablet__tester_card__right_pointer')
const anchor = document.getElementById('tablet__anchor');
const topButton = document.getElementById('tablet__comp_1__button');
let checkBoxStates = [false, false, false];
let activeResponer = 0;
const respondersPhoto = document.getElementById('tablet__comp_11__left_block__responder_block__photo')
const respondersName = document.getElementById('tablet__comp_11__left_block__responder_block__name')
const respondersDesc = document.getElementById('tablet__comp_11__left_block__responder_block__desc')
const respondersFeed = document.getElementById('tablet__comp_11__left_block__text__p')
const responderPoinerLeft = document.getElementById('tablet__comp_11__left_pointer');
const responderPoinerRight = document.getElementById('tablet__comp_11__right_pointer');
const respondersAmount = responders.length;
const rightModalTopLink = document.getElementById('from_tablet__nav__categories__gears');
const rightModalBottomLink1 = document.getElementById('from_tablet__nav__categories__graduates_hat');
const rightModalBottomLink2 = document.getElementById('from_tablet__nav__categories__tester');
const rightModalBottomLink3 = document.getElementById('from_tablet__nav__categories__qa');
const rightModalEmailLink = document.getElementById('from_tablet__nav__links_block__email');
const rightModalLocationLink = document.getElementById('from_tablet__nav__links_block__location');
const rightModalTelnumberLink = document.getElementById('from_tablet__nav__links_block__telnumber');
const FooterEmailLink = document.getElementById('tablet__footer__mail_link');
const FooterLocationLink = document.getElementById('tablet__footer__location_link');
const FooterTelnumberLink = document.getElementById('tablet__footer__phone_link');
const FooterTestingLink = document.getElementById('tablet__footer__testing_link');
const FooterCourserLink = document.getElementById('tablet__footer__course_link');
const FormCallingLink = document.getElementById('tablet__form__column_left__bottom__calling_button');
const FormVkLink = document.getElementById('tablet__vk__button');
const FormTellegramLink = document.getElementById('tablet__tellegram__button');
const formSection = document.getElementById('tablet__comp_10__back')


const setResponders = (number) => {
    respondersPhoto.src = `img/photos_of_responders/${responders[number].img}.png`;
    respondersName.innerText = responders[number].name;
    respondersDesc.innerText = responders[number].description;
    respondersFeed.innerText = responders[number].feedback;
}

const swapResponder = (isLeft) => {
    const innerFunc = () => {
        activeResponer += isLeft ? -1 : 1;
        if (activeResponer === -1) { activeResponer = respondersAmount - 1 }
        else if (activeResponer === respondersAmount) { activeResponer = 0; }
        setResponders(activeResponer);
    }
    return innerFunc;
}

setResponders(0);
responderPoinerLeft.addEventListener('click', swapResponder(true))
responderPoinerRight.addEventListener('click', swapResponder(false))

const transitionToLink = (link) => {
    const innerFunc = () => {
        window.location.href = link;
    }
    return innerFunc;
}

for (let i = 1; i <= 3; i++) {
    const cBox = document.getElementById(`tablet__form__category_${i}`);
    const cBoxCp = document.getElementById(`tablet__form__category_${i}__cp`);
    const cBoxCpImg = document.getElementById(`tablet__form__category_${i}__cp_img`);
    cBox.addEventListener('click', () => {
        const currentState = !checkBoxStates[i];
        checkBoxStates[i] = currentState;
        cBoxCp.style.backgroundColor = currentState ? '#4273FB' : '';
        cBoxCpImg.style.opacity = currentState ? '1' : '';
    })
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
            const leftCardNumber = diffNeberByOne(activeCardNumber - 1);
            const rightCardNumber = diffNeberByOne(activeCardNumber + 1);
            const leftCard = document.getElementById(`tablet__tester_card__${leftCardNumber}`);
            const activeCard = document.getElementById(`tablet__tester_card__${activeCardNumber}`);
            const rightCard = document.getElementById(`tablet__tester_card__${rightCardNumber}`);
            const leftCardOpen = document.getElementById(`tablet__tester_card_open__${leftCardNumber}`);
            const activeCardOpen = document.getElementById(`tablet__tester_card_open__${activeCardNumber}`);
            const rightCardOpen = document.getElementById(`tablet__tester_card_open__${rightCardNumber}`);

            activeCard.classList.remove('active');
            activeCardOpen.classList.remove('active');
            if (isLeft) {
                rightCard.classList.add('active');
                rightCardOpen.classList.add('active');
                const numberNewRightCard = diffNeberByOne(rightCardNumber + 1);
                const newCard = generateCard(numberNewRightCard, false, 100);
                leftCard.style.left = '-40vw';
                activeCard.style.left = `${leftPosCard[0]}vw`;
                rightCard.style.left = `${leftPosCard[1]}vw`;
                cardComposition.appendChild(newCard);
                setTimeout(() => { newCard.style.left = `${leftPosCard[2]}vw`; }, 1)
                setTimeout(() => {
                    cardComposition.removeChild(leftCard);
                    isActiveCoursel = false;
                }, 300)
            } else {
                leftCard.classList.add('active');
                leftCardOpen.classList.add('active');
                const numberNewLeftCard = diffNeberByOne(leftCardNumber - 1);
                const newCard = generateCard(numberNewLeftCard, false, -40)
                rightCard.style.left = '140vw';
                leftCard.style.left = `${leftPosCard[1]}vw`;
                activeCard.style.left = `${leftPosCard[2]}vw`;
                cardComposition.appendChild(newCard);
                setTimeout(() => { newCard.style.left = `${leftPosCard[0]}vw`; }, 1)
                setTimeout(() => {
                    cardComposition.removeChild(rightCard);
                    isActiveCoursel = false;
                }, 300)
            }
            activeCardNumber += isLeft ? 1 : -1;
            activeCardNumber = diffNeberByOne(activeCardNumber)
        }
    }
    return innerFunck;
}

leftPointer.addEventListener('click', swapTesterCard(false));
rightPointer.addEventListener('click', swapTesterCard(true));

rightModalTopLink.addEventListener('click', transitionToLink(SERVIES_LINK));
rightModalBottomLink1.addEventListener('click', transitionToLink(COUESES_LINK));
rightModalBottomLink2.addEventListener('click', transitionToLink(SOFTWARE_TESTER_COURSE));
rightModalBottomLink3.addEventListener('click', transitionToLink(COMPUTER_LITERACY_COURSE_FOR_QA));
rightModalEmailLink.addEventListener('click', transitionToLink(`mailto:${encodeURIComponent(EMAIL)}`));
rightModalLocationLink.addEventListener('click', transitionToLink(`https://yandex.ru/maps/-/:${LOCATION}`));
rightModalTelnumberLink.addEventListener('click', transitionToLink(`tel:${TELEPHON_NUMBER}`));
FooterEmailLink.addEventListener('click', transitionToLink(`mailto:${encodeURIComponent(EMAIL)}`));
FooterLocationLink.addEventListener('click', transitionToLink(`https://yandex.ru/maps/-/:${LOCATION}`));
FooterTelnumberLink.addEventListener('click', transitionToLink(`tel:${TELEPHON_NUMBER}`));
FooterTestingLink.addEventListener('click', transitionToLink(SERVIES_LINK));
FooterCourserLink.addEventListener('click', transitionToLink(COUESES_LINK));
FormCallingLink.addEventListener('click', transitionToLink(`tel:${TELEPHON_NUMBER}`));
FormVkLink.addEventListener('click', transitionToLink(VK_LINK));
FormTellegramLink.addEventListener('click', transitionToLink(TELEGRAM_LINK));

anchor.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

topButton.addEventListener('click', () => {
    window.scrollTo({
        top: formSection.offsetTop,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        anchor.style.display = 'block';
        setTimeout(() => anchor.style.opacity = '1', 1);
    } else {
        setTimeout(() => anchor.style.display = 'none', 300);
        anchor.style.opacity = '0'
    }
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
                card.style.width = isFlip ? '22.57902vw' : '';
                card.style.height = isFlip ? '25.33972vw' : '';
                card.style.marginTop = isFlip ? '-2.11511vw' : '';
                card.style.marginLeft = isFlip ? '2.11511vw' : '';
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



const transitionToForm = (qualification) => {
    const innerFunc = () => {
        let select;
        checkBoxStates = [false, false, false];
        if (qualification.includes('Junior')) {
            select = 0;
        } else if (qualification.includes('Middle')) {
            select = 1;
        } else {
            select = 2;
        }
        checkBoxStates[select] = true;
        for (let i = 1; i <= 3; i++) {
            const cBoxCp = document.getElementById(`tablet__form__category_${i}__cp`);
            const cBoxCpImg = document.getElementById(`tablet__form__category_${i}__cp_img`);
            const currentState = checkBoxStates[i - 1];
            cBoxCp.style.backgroundColor = currentState ? '#4273FB' : '';
            cBoxCpImg.style.opacity = currentState ? '1' : '';
        }
        window.scrollTo({
            top: formSection.offsetTop,
            behavior: 'smooth'
        });
    }
    return innerFunc;
}

const generateCard = (number, isActive, left) => {
    const tester = testers[number];

    // Создаем основной элемент карточки
    const newCard = document.createElement('div');
    newCard.classList.add('tablet__tester_card');
    if (isActive) newCard.classList.add('active');
    newCard.id = `tablet__tester_card__${number}`;
    newCard.style.left = `${left}vw`;

    // Создаем внутренний контейнер
    const innerWrapper = document.createElement('div');
    innerWrapper.classList.add('tablet__tester_card__inner_wrapper');


    // Создаем блок с открытой версией
    const openVersion = document.createElement('div');
    openVersion.id = `tablet__tester_card_open__${number}`;
    openVersion.classList.add(`tablet__tester_card__open_version`);
    if (isActive) openVersion.classList.add('active');
    innerWrapper.appendChild(openVersion);

    //Создаем блок с именем и специализацией в открытой версии
    const nameBlockOpen = document.createElement('div');
    nameBlockOpen.classList.add('tablet__tester_card_open__name_block');
    const nameHeadingOpen = document.createElement('h1');
    nameHeadingOpen.textContent = tester.name;
    const specializationParagraphOpen = document.createElement('p');
    specializationParagraphOpen.textContent = tester.specialization;
    nameBlockOpen.appendChild(nameHeadingOpen);
    nameBlockOpen.appendChild(specializationParagraphOpen);
    openVersion.appendChild(nameBlockOpen);


    //Создаем блок откат в открытой версии
    const backPointer = document.createElement('div');
    backPointer.classList.add('tablet__tester_card_open__back_block');
    backPointer.addEventListener('click', () => {
        openVersion.style.opacity = 0;
        setTimeout(() => openVersion.style.display = 'none', 500)
    })
    const backPoinerImg = document.createElement('img');
    backPoinerImg.src = 'img/svg/tablet__comp_8__poiner_reversed.svg';
    backPoinerImg.alt = 'the back button';
    backPointer.appendChild(backPoinerImg);
    openVersion.appendChild(backPointer);

    //Создаем текстовый-блок описаний в открытой версии
    const descriptionBlock = document.createElement('ul');
    descriptionBlock.classList.add('tablet__tester_card_open__description_block')
    tester.characteristics.forEach(
        characteristic => {
            const characteristicParagraph = document.createElement('li');
            characteristicParagraph.innerText = characteristic;
            descriptionBlock.appendChild(characteristicParagraph);
        }
    )
    openVersion.appendChild(descriptionBlock);

    //Создаем текстовый-блок описаний в открытой версии
    tester.doesOwn.forEach((skillsRow, number) => {
        const skillsBlock = document.createElement('div');
        skillsRow.forEach((skill, numberInRow) => {
            const skillBlock = document.createElement('p');
            skillBlock.innerText = skill;
            skillBlock.classList.add(`${tester.borderColor[number][numberInRow]}_line`)
            skillsBlock.appendChild(skillBlock);
        })
        skillsBlock.classList.add('tablet__tester_card_open__skills_block')
        skillsBlock.style.top = 58 + 5.15 * number + '%';
        openVersion.appendChild(skillsBlock);
    })

    //создаем блок с кнопкой
    const openCardTgBlock = document.createElement('div');
    openCardTgBlock.classList.add('tablet__tester_card_open__tg_button_block');
    const tgLogo = document.createElement('img');
    const openCardButtonToTransition = document.createElement('div');
    openCardButtonToTransition.classList.add('tablet__tester_card_open__button_transition');
    openCardButtonToTransition.innerText = 'Забронировать встречу';
    openCardButtonToTransition.addEventListener('click', transitionToForm(tester.qualification));
    openVersion.appendChild(openCardButtonToTransition);
    tgLogo.src = 'img/svg/tellegram_logo.svg';
    tgLogo.alt = 'Telegram logotip';
    openCardTgBlock.appendChild(tgLogo);
    openCardTgBlock.addEventListener('click', transitionToLink(TELEGRAM_LINK));
    openVersion.appendChild(openCardTgBlock);


    // Создаем блок с именем и специализацией
    const nameBlock = document.createElement('div');
    nameBlock.classList.add('tablet__tester_card__name_block');
    const nameHeading = document.createElement('h1');
    nameHeading.textContent = tester.name;
    const specializationParagraph = document.createElement('p');
    specializationParagraph.textContent = tester.specialization;
    nameBlock.appendChild(nameHeading);
    nameBlock.appendChild(specializationParagraph);
    innerWrapper.appendChild(nameBlock);

    // Создаем изображения
    const detailImage = document.createElement('img');
    detailImage.src = 'img/svg/tablet__tester_card__detail.svg';
    detailImage.alt = 'a thought icon going to a person';
    detailImage.classList.add('tablet__tester_card__detail');
    innerWrapper.appendChild(detailImage);

    const mountainsImage = document.createElement('img');
    mountainsImage.src = 'img/svg/tablet__tester_card__mountains.svg';
    mountainsImage.alt = 'the image of the white mountains';
    mountainsImage.classList.add('tablet__tester_card__mountains');
    innerWrapper.appendChild(mountainsImage);

    const testerPhotoImage = document.createElement('img');
    testerPhotoImage.src = `img/photos_of_testers/tablet_${tester.img}.png`;
    testerPhotoImage.alt = 'photo of the tester';
    testerPhotoImage.classList.add('tablet__tester_card__tester_photo');
    innerWrapper.appendChild(testerPhotoImage);

    // Создаем кнопку
    const button = document.createElement('button');
    button.classList.add('tablet__tester_card__button');
    button.id = `tablet__tester_card_${number}__button`;
    button.addEventListener('click', () => {

        openVersion.style.display = 'block';
        setTimeout(() => openVersion.style.opacity = 1, 1)
    })
    const buttonText = document.createElement('p');
    buttonText.textContent = 'Больше информации';
    const buttonIcon = document.createElement('div');
    const pointerImage = document.createElement('img');
    pointerImage.src = 'img/svg/tablet__tester_card__pointer.svg';
    pointerImage.alt = 'pointer';
    pointerImage.classList.add('tablet__tester_card__pointer');
    buttonIcon.appendChild(pointerImage);
    button.appendChild(buttonText);
    button.appendChild(buttonIcon);
    innerWrapper.appendChild(button);

    // Добавляем внутренний контейнер в основной элемент карточки
    newCard.appendChild(innerWrapper);

    return newCard;
}


for (let i = 0; i < 3; ++i) {
    cardComposition.appendChild(generateCard(i, i == 1, leftPosCard[i]));
}



const sendFormButton = document.getElementById('tablet__send_form')
sendFormButton.addEventListener('click', (event) => {
    event.preventDefault();
    let isError = false;
    const descriptionInput = document.getElementById('tablet__form__column_left__middle__left');
    const description = descriptionInput.value || '';
    const nameInput = document.getElementById('tablet__form_name');
    const name = nameInput.value || '';
    const telInput = document.getElementById('tablet__form_tel')
    const tel = telInput.value || '';
    if (!name) {
        isError = true;
        nameInput.placeholder = 'Введите имя';
        nameInput.style.border = '1px solid red';
        nameInput.style.color = 'red';
        setTimeout(() => {
            nameInput.placeholder = 'Имя';
            nameInput.style.border = '';
            nameInput.style.color = '';
        }, 2000)
    }
    else if (!/^[a-zA-Zа-яА-Я\s]+$/.test(name)) {
        isError = true;
        nameInput.value = ''
        nameInput.placeholder = 'Недопустимый символ';
        nameInput.style.border = '1px solid red';
        nameInput.style.color = 'red';
        setTimeout(() => {
            nameInput.placeholder = 'Имя';
            nameInput.style.border = '';
            nameInput.style.color = '';
        }, 2000)
    }
    if (!tel) {
        isError = true;
        telInput.placeholder = 'Введите номер телефона';
        telInput.style.border = '1px solid red';
        telInput.style.color = 'red';
        setTimeout(() => {
            telInput.placeholder = 'Номер телефона';
            telInput.style.border = '';
            telInput.style.color = '';
        }, 2000)
    }
    else if (!/^\+?[0-9() ]{0,14}$/.test(tel)) {
        isError = true;
        telInput.placeholder = 'Некорректный номер телефона';
        telInput.style.border = '1px solid red';
        telInput.style.color = 'red';
        telInput.value = ''
        setTimeout(() => {
            telInput.placeholder = 'Номер телефона';
            telInput.style.border = '';
            telInput.style.color = '';
        }, 2000)
    }
    const email = document.getElementById('tablet__form_email').value || '';
    let skillLevelTesters = '';
    const formCheckBoxValue = checkBoxStates;
    if (formCheckBoxValue[0]) {
        if (formCheckBoxValue[1] && formCheckBoxValue[2]) {
            skillLevelTesters = 'Junior, Middle, Senior';
        } else if (formCheckBoxValue[1]) {
            skillLevelTesters = 'Junior, Middle';
        } else if (formCheckBoxValue[2]) {
            skillLevelTesters = 'Junior, Senior';
        } else {
            skillLevelTesters = 'Junior';
        }
    } else {
        skillLevelTesters = formCheckBoxValue[1] && formCheckBoxValue[2] ? 'Middle, Senior' : formCheckBoxValue[1] ? 'Middle' : 'Senior';
    }
    if (!isError) {
        sendFormButton.innerText = 'Отправка...';
        const msg = MESSAGE_TEMPLATE.replace(
            '%description', description).replace(
                '%name', name).replace(
                    '%skillLevelTesters', skillLevelTesters).replace(
                        '%telNumber', tel).replace(
                            '%email', email);


        fetch('http://localhost:3000/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                titleMessage: MESSAGE_TITLE,
                textMessage: msg,
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Server response:', data);
                sendFormButton.innerText = 'Отправлено 🚀';
                setTimeout(() => {
                    sendFormButton.innerText = 'Отправить заявку';
                }, 2000)
            })
            .catch(error => {
                console.error('Error:', error);
                sendFormButton.innerText = 'Произошла ошибка';
                setTimeout(() => {
                    sendFormButton.innerText = 'Отправить заявку';
                }, 2000)
            });
    } else {
        sendFormButton.innerText = 'Ошибка, заявка не отправлена 😢';
        sendFormButton.style.cursor = 'not-allowed';
        setTimeout(() => {
            sendFormButton.innerText = 'Отправить заявку';
            sendFormButton.style.cursor = '';
        }, 1000)
    }
})