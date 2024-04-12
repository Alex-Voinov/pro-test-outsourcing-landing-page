import { testers } from "./dataAboutTesters.js";
import { responders } from "./dataAboutResponders.js";
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

const sendRequest = document.getElementById('mobile__send__request');
const sendRequestSection = document.getElementById('mobile_comp_11');
const anchor = document.getElementById('mobile__anchor');
const testPO = document.getElementById('mobile__aside__categories__gears');
const studyCourse = document.getElementById('mobile__aside__categories__graduates_hat');
const testerByZerro = document.getElementById('mobile__aside__categories__tester');
const footerLinkTesting = document.getElementById('footerLinkTesting');
const footerLinkCourse = document.getElementById('footerLinkCourse');
const courseQA = document.getElementById('mobile__aside__categories__qa');
const navEmail = document.getElementById('from_tablet__nav__links_block__email');
const navLoc = document.getElementById('from_tablet__nav__links_block__location');
const navTel = document.getElementById('from_tablet__nav__links_block__telnumber');
const footerEmail = document.getElementById('mobile__footer__mail_link');
const footerLoc = document.getElementById('mobile__footer__location_link');
const footerTel = document.getElementById('mobile__footer__phone_link');
const formButtonCall = document.getElementById('mobile__calling_button');
const formButtonVK = document.getElementById('mobile__vk_button');
const formButtonTG = document.getElementById('mobile__tg_button');


let activeResponer = 0;
const respondersPhoto = document.getElementById('mobile__comp_11__left_block__responder_block__photo')
const respondersName = document.getElementById('mobile__comp_11__left_block__responder_block__name')
const respondersDesc = document.getElementById('mobile__comp_11__left_block__responder_block__desc')
const respondersFeed = document.getElementById('mobile__comp_11__left_block__text__p')
const responderPoinerLeft = document.getElementById('mobile__comp_11__left_pointer');
const responderPoinerRight = document.getElementById('mobile__comp_11__right_pointer');
const respondersAmount = responders.length;
const setResponders = (number) => {
    respondersPhoto.src = `img/photos_of_responders/${responders[number].img}.png`;
    respondersName.innerText = responders[number].name;
    respondersDesc.innerText = responders[number].description;
    respondersFeed.innerText = responders[number].feedback;
}

const transitionToLink = (link) => {
    const innerFunc = () => {
        window.location.href = link;
    }
    return innerFunc;
}

testPO.addEventListener('click', transitionToLink(SERVIES_LINK));

studyCourse.addEventListener('click', transitionToLink(COUESES_LINK));
testerByZerro.addEventListener('click', transitionToLink(SOFTWARE_TESTER_COURSE));
courseQA.addEventListener('click', transitionToLink(COMPUTER_LITERACY_COURSE_FOR_QA));
navEmail.addEventListener('click', transitionToLink(`mailto:${encodeURIComponent(EMAIL)}`));
navLoc.addEventListener('click', transitionToLink(`https://yandex.ru/maps/-/:${LOCATION}`));
navTel.addEventListener('click', transitionToLink(`tel:${TELEPHON_NUMBER}`));
footerEmail.addEventListener('click', transitionToLink(`mailto:${encodeURIComponent(EMAIL)}`));
footerLoc.addEventListener('click', transitionToLink(`https://yandex.ru/maps/-/:${LOCATION}`));
footerTel.addEventListener('click', transitionToLink(`tel:${TELEPHON_NUMBER}`));
footerLinkTesting.addEventListener('click', transitionToLink(SERVIES_LINK));
footerLinkCourse.addEventListener('click', transitionToLink(COUESES_LINK));
formButtonCall.addEventListener('click', transitionToLink(`tel:${TELEPHON_NUMBER}`));
formButtonVK.addEventListener('click', transitionToLink(VK_LINK));
formButtonTG.addEventListener('click', transitionToLink(TELEGRAM_LINK));

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

let checkBoxStates = [false, false, false];
for (let i = 1; i <= 3; i++) {
    const cBox = document.getElementById(`mobile__form__category_${i}`);
    const cBoxCp = document.getElementById(`mobile__form__category_${i}__cp`);
    const cBoxCpImg = document.getElementById(`mobile__form__category_${i}__cp_img`);
    cBox.addEventListener('click', () => {
        const currentState = !checkBoxStates[i];
        checkBoxStates[i] = currentState;
        cBoxCp.style.backgroundColor = currentState ? '#4273FB' : '';
        cBoxCpImg.style.opacity = currentState ? '1' : '';
    })
}
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
            const cBoxCp = document.getElementById(`mobile__form__category_${i}__cp`);
            const cBoxCpImg = document.getElementById(`mobile__form__category_${i}__cp_img`);
            const currentState = checkBoxStates[i - 1];
            cBoxCp.style.backgroundColor = currentState ? '#4273FB' : '';
            cBoxCpImg.style.opacity = currentState ? '1' : '';
        }
        window.scrollTo({
            top: sendRequestSection.offsetTop,
            behavior: 'smooth'
        });
    }
    return innerFunc;
}



sendRequest.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: sendRequestSection.offsetTop,
        behavior: 'smooth'
    });
})


anchor.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
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
})



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
    openCardButtonToTransition.addEventListener('click', transitionToForm(tester.qualification));
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



const sendFormButton = document.getElementById('mobile__send_form')
sendFormButton.addEventListener('click', (event) => {
    event.preventDefault();
    let isError = false;
    const descriptionInput = document.getElementById('mobile__form__desc');
    const description = descriptionInput.value || '';
    const nameInput = document.getElementById('mobile__form__name');
    const name = nameInput.value || '';
    const telInput = document.getElementById('mobile__form__tel')
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
    const email = document.getElementById('mobile__form__email').value || '';
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