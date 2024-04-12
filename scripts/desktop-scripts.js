import { testers } from "./dataAboutTesters.js";
import { responders } from './dataAboutResponders.js';
import { TELEGRAM_LINK, VK_LINK, TELEPHON_NUMBER, EMAIL, LOCATION, SERVIES_LINK, COUESES_LINK, SOFTWARE_TESTER_COURSE, COMPUTER_LITERACY_COURSE_FOR_QA, MESSAGE_TITLE, MESSAGE_TEMPLATE } from "./basicInformation.js";


const header = document.getElementById('fixedHeader1200');
let fixedHeaderIsVisible = false;
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

const headerMenuDropPoint1 = document.getElementById('header_droppoint_1');
const headerMenuBlockPoint1 = document.getElementById('header_block_point_1');
const headerMenuInnerPoint1 = document.getElementById('header_point_1');
const headerMenuPoint1Pointer = document.getElementById('header_point_1_pointer');

let hederMenuPoint1IsActive = 0;//1 - зашли в функцию 2 - завершили ; 3 и 0 для обратной
let hederMenuPoint1IsActiveNow = false;

const headerMenuDropPoint2_1 = document.getElementById('header_droppoint_2_1');
const headerMenuDropPoint2_2 = document.getElementById('header_droppoint_2_2');
const headerMenuBlockPoint2 = document.getElementById('header_block_point_2');
const headerMenuInnerPoint2 = document.getElementById('header_point_2');
const headerMenuPoint2Pointer = document.getElementById('header_point_2_pointer');

const fixedHeaderMenuDropPoint1 = document.getElementById('fixed_header_droppoint_1');
const fixedHeaderMenuBlockPoint1 = document.getElementById('fixed_header_block_point_1');
const fixedHeaderMenuPoint1Blur = document.getElementById('fixed_header_blur_back');
const fixedHeaderMenuPoint2Blur = document.getElementById('fixed_header_blur_back_2');
const fixedHeaderMenuInnerPoint1 = document.getElementById('fixed_header_point_1');
const fixedHeaderMenuPoint1Pointer = document.getElementById('fixed_header_point_1_pointer');

let fixedHederMenuPoint1IsActive = 0;//1 - зашли в функцию 2 - завершили ; 3 и 0 для обратной
let fixedHederMenuPoint1IsActiveNow = false;

const fixedHeaderMenuDropPoint2_1 = document.getElementById('fixed_header_droppoint_2_1');
const fixedHeaderMenuDropPoint2_2 = document.getElementById('fixed_header_droppoint_2_2');
const fixedHeaderMenuBlockPoint2 = document.getElementById('fixed_header_block_point_2');
const fixedHeaderMenuInnerPoint2 = document.getElementById('fixed_header_point_2');
const fixedHeaderMenuPoint2Pointer = document.getElementById('fixed_header_point_2_pointer');



const interactionBlockButton = document.getElementById('composition_1__interaction_block__button');
const composition_10 = document.getElementById('composition_10');


let hederMenuPoint2IsActive = 0;
let hederMenuPoint2IsActiveNow = false;

let fixedHederMenuPoint2IsActive = 0;
let fixedHederMenuPoint2IsActiveNow = false;


const selectQ = (i) => {
    const innerSelectQ = () => {
        window.scrollTo({
            top: composition_10.offsetTop * 1.015,
            behavior: 'smooth'
        });
        formCheckBoxValue = [false, false, false];
        let select;
        if (testers[i].qualification.includes('Junior')) {
            select = 0;
        } else if (testers[i].qualification.includes('Middle')) {
            select = 1;
        } else {
            select = 2;
        }
        for (let j = 0; j < 3; j++) {
            if (j !== select) {
                checkBoxMarcerSet[j].style.backgroundColor = '';
                checkBoxMarcerSet[j].style.borderColor = '';
                checkBoxMarcerSet[j].style.setProperty('--opacity_value', '');
            }
        }
        formCheckBoxValue[select] = true;
        checkBoxMarcerSet[select].style.backgroundColor = '#4273FB';
        checkBoxMarcerSet[select].style.borderColor = '#4273FB';
        checkBoxMarcerSet[select].style.setProperty('--opacity_value', '1');
    }
    return innerSelectQ
}



const mainForm = document.getElementById('mainForm')
mainForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let isError = false;
    const sendFormButton = document.getElementById('send_form');
    const descriptionInput = document.getElementById('form_textarea');
    const description = descriptionInput.value || '';
    const nameInput = document.getElementById('form_name');
    const name = nameInput.value || '';
    const telInput = document.getElementById('form_tel')
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
    const email = document.getElementById('form_email').value || '';
    let skillLevelTesters = '';
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

interactionBlockButton.addEventListener('click', () => {
    window.scrollTo({
        top: composition_10.offsetTop * 1.015,
        behavior: 'smooth'
    });
})

const hederMenuPoint1IsLeaveFunction = () => { //когда с него уходим
    hederMenuPoint1IsActiveNow = false;
    if (hederMenuPoint1IsActive === 2) { //если меню открытое
        hederMenuPoint1IsActive = 3; //отмечаем что началось закрытие, чтобы снова сюда не попадать
        headerMenuDropPoint1.style.height = '';
        headerMenuDropPoint1.style.opacity = '';
        headerMenuInnerPoint1.style.marginBottom = '';
        headerMenuBlockPoint1.style.height = '';
        headerMenuPoint1Pointer.style.transform = '';
        headerMenuBlockPoint1.style.backgroundColor = '';
        setTimeout(() => {
            headerMenuBlockPoint1.style.border = '';
            headerMenuBlockPoint1.style.boxShadow = '';
            hederMenuPoint1IsActive = 0; //отмечаем что закрытие кончилось
        }, 300);
    }
}

headerMenuBlockPoint1.addEventListener('mousemove', () => { //при ДВИЖЕНИИ по компоненту
    hederMenuPoint1IsActiveNow = true;
    if (hederMenuPoint1IsActive === 0) {//если меню убрана - заходим
        hederMenuPoint1IsActive = 1;//отмечаем что меню начинает открытие, чтобы снова сюда не попадать
        headerMenuBlockPoint1.style.border = 'min(0.10417vw, 0.18519vh) solid #FFFFFF99';
        headerMenuBlockPoint1.style.boxShadow = '0 0 min(0.78125vw, 1.38889vh) 0 #FFFFFF40';
        headerMenuPoint1Pointer.style.transform = 'rotate(180deg)';
        headerMenuBlockPoint1.style.backgroundColor = '#FFFFFF0C';
        setTimeout(() => {
            headerMenuDropPoint1.style.height = '3.7963vh';
            headerMenuDropPoint1.style.opacity = 1;
            headerMenuInnerPoint1.style.marginBottom = '1.3vh';
            headerMenuBlockPoint1.style.height = '12.22222vh';
            hederMenuPoint1IsActive = 2;// отмечаем, что меню успешно открылось
            if (!hederMenuPoint1IsActiveNow) { hederMenuPoint1IsLeaveFunction(); }
        }, 300
        );
    }
})

headerMenuBlockPoint1.addEventListener('mouseleave', hederMenuPoint1IsLeaveFunction);


const hederMenuPoint2IsLeaveFunction = () => { //когда с него уходим
    hederMenuPoint2IsActiveNow = false;
    if (hederMenuPoint2IsActive === 2) { //если меню открытое
        hederMenuPoint2IsActive = 3; //отмечаем что началось закрытие, чтобы снова сюда не попадать
        headerMenuDropPoint2_1.style.height = '';
        headerMenuDropPoint2_1.style.opacity = '';
        headerMenuDropPoint2_2.style.height = '';
        headerMenuDropPoint2_2.style.opacity = '';
        headerMenuInnerPoint2.style.marginBottom = '';
        headerMenuBlockPoint2.style.height = '';
        headerMenuPoint2Pointer.style.transform = '';
        headerMenuBlockPoint2.style.backgroundColor = '';
        setTimeout(() => {
            headerMenuBlockPoint2.style.border = '';
            headerMenuBlockPoint2.style.boxShadow = '';
            hederMenuPoint2IsActive = 0; //отмечаем что закрытие кончилось
        }, 300);
    }
}

headerMenuBlockPoint2.addEventListener('mousemove', () => { //при ДВИЖЕНИИ по компоненту
    hederMenuPoint2IsActiveNow = true;
    if (hederMenuPoint2IsActive === 0) {//если меню убрана - заходим
        hederMenuPoint2IsActive = 1;//отмечаем что меню начинает открытие, чтобы снова сюда не попадать
        headerMenuBlockPoint2.style.border = 'min(0.10417vw, 0.18519vh) solid #FFFFFF99';
        headerMenuBlockPoint2.style.boxShadow = '0 0 min(0.78125vw, 1.38889vh) 0 #FFFFFF40';
        headerMenuPoint2Pointer.style.transform = 'rotate(180deg)';
        headerMenuBlockPoint2.style.backgroundColor = '#FFFFFF0C';
        setTimeout(() => {
            headerMenuDropPoint2_1.style.height = '3.7963vh';
            headerMenuDropPoint2_1.style.opacity = 1;
            headerMenuDropPoint2_2.style.height = '3.7963vh';
            headerMenuDropPoint2_2.style.opacity = 1;
            headerMenuInnerPoint2.style.marginBottom = '1.3vh';
            headerMenuBlockPoint2.style.height = '16.85185vh';
            hederMenuPoint2IsActive = 2;// отмечаем, что меню успешно открылось
            if (!hederMenuPoint2IsActiveNow) { hederMenuPoint2IsLeaveFunction(); }
        }, 300
        );
    }
})

headerMenuBlockPoint2.addEventListener('mouseleave', hederMenuPoint2IsLeaveFunction);

headerMenuDropPoint2_1.addEventListener('click', () => {
    window.location.href = SOFTWARE_TESTER_COURSE;
})

headerMenuDropPoint2_2.addEventListener('click', () => {
    window.location.href = COMPUTER_LITERACY_COURSE_FOR_QA;
})

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

//fixed H
const fixedHederMenuPoint1IsLeaveFunction = () => { //когда с него уходим
    fixedHederMenuPoint1IsActiveNow = false;
    if (fixedHederMenuPoint1IsActive === 2) { //если меню открытое
        fixedHederMenuPoint1IsActive = 3; //отмечаем что началось закрытие, чтобы снова сюда не попадать
        fixedHeaderMenuDropPoint1.style.height = '';
        fixedHeaderMenuDropPoint1.style.opacity = '';
        fixedHeaderMenuInnerPoint1.style.marginBottom = '';
        fixedHeaderMenuBlockPoint1.style.height = '';
        fixedHeaderMenuPoint1Pointer.style.transform = '';
        fixedHeaderMenuBlockPoint1.style.backgroundColor = '';
        fixedHeaderMenuPoint1Blur.style.opacity = '0';
        setTimeout(() => {
            fixedHeaderMenuBlockPoint1.style.border = '';
            fixedHeaderMenuBlockPoint1.style.boxShadow = '';
            fixedHederMenuPoint1IsActive = 0; //отмечаем что закрытие кончилось
        }, 300);
    }
}

fixedHeaderMenuBlockPoint1.addEventListener('mousemove', () => { //при ДВИЖЕНИИ по компоненту
    fixedHederMenuPoint1IsActiveNow = true;
    if (fixedHederMenuPoint1IsActive === 0) {//если меню убрана - заходим
        fixedHederMenuPoint1IsActive = 1;//отмечаем что меню начинает открытие, чтобы снова сюда не попадать
        fixedHeaderMenuBlockPoint1.style.border = 'min(0.10417vw, 0.18519vh) solid #FFFFFF99';
        fixedHeaderMenuBlockPoint1.style.boxShadow = '0 0 min(0.78125vw, 1.38889vh) 0 #FFFFFF40';
        fixedHeaderMenuPoint1Pointer.style.transform = 'rotate(180deg)';
        fixedHeaderMenuPoint1Blur.style.opacity = '0.99';
        setTimeout(() => {
            fixedHeaderMenuDropPoint1.style.height = '3.7963vh';
            fixedHeaderMenuDropPoint1.style.opacity = 1;
            fixedHeaderMenuInnerPoint1.style.marginBottom = '1.3vh';
            fixedHeaderMenuBlockPoint1.style.height = '12.22222vh';
            fixedHederMenuPoint1IsActive = 2;// отмечаем, что меню успешно открылось
            if (!fixedHederMenuPoint1IsActiveNow) { fixedHederMenuPoint1IsLeaveFunction(); }
        }, 300
        );
    }
})

fixedHeaderMenuBlockPoint1.addEventListener('mouseleave', fixedHederMenuPoint1IsLeaveFunction);


const fixedHederMenuPoint2IsLeaveFunction = () => { //когда с него уходим
    fixedHederMenuPoint2IsActiveNow = false;
    if (fixedHederMenuPoint2IsActive === 2) { //если меню открытое
        fixedHederMenuPoint2IsActive = 3; //отмечаем что началось закрытие, чтобы снова сюда не попадать
        fixedHeaderMenuDropPoint2_1.style.height = '';
        fixedHeaderMenuDropPoint2_1.style.opacity = '';
        fixedHeaderMenuDropPoint2_2.style.height = '';
        fixedHeaderMenuDropPoint2_2.style.opacity = '';
        fixedHeaderMenuInnerPoint2.style.marginBottom = '';
        fixedHeaderMenuBlockPoint2.style.height = '';
        fixedHeaderMenuPoint2Pointer.style.transform = '';
        fixedHeaderMenuPoint2Blur.style.opacity = '0';
        setTimeout(() => {
            fixedHeaderMenuBlockPoint2.style.border = '';
            fixedHeaderMenuBlockPoint2.style.boxShadow = '';
            fixedHederMenuPoint2IsActive = 0; //отмечаем что закрытие кончилось
        }, 300);
    }
}

fixedHeaderMenuBlockPoint2.addEventListener('mousemove', () => { //при ДВИЖЕНИИ по компоненту
    fixedHederMenuPoint2IsActiveNow = true;
    if (fixedHederMenuPoint2IsActive === 0) {//если меню убрана - заходим
        fixedHederMenuPoint2IsActive = 1;//отмечаем что меню начинает открытие, чтобы снова сюда не попадать
        fixedHeaderMenuBlockPoint2.style.border = 'min(0.10417vw, 0.18519vh) solid #FFFFFF99';
        fixedHeaderMenuBlockPoint2.style.boxShadow = '0 0 min(0.78125vw, 1.38889vh) 0 #FFFFFF40';
        fixedHeaderMenuPoint2Pointer.style.transform = 'rotate(180deg)';
        fixedHeaderMenuPoint2Blur.style.opacity = '99';
        setTimeout(() => {
            fixedHeaderMenuDropPoint2_1.style.height = '3.7963vh';
            fixedHeaderMenuDropPoint2_1.style.opacity = 1;
            fixedHeaderMenuDropPoint2_2.style.height = '3.7963vh';
            fixedHeaderMenuDropPoint2_2.style.opacity = 1;
            fixedHeaderMenuInnerPoint2.style.marginBottom = '1.3vh';
            fixedHeaderMenuBlockPoint2.style.height = '16.85185vh';
            fixedHederMenuPoint2IsActive = 2;// отмечаем, что меню успешно открылось
            if (!fixedHederMenuPoint2IsActiveNow) { fixedHederMenuPoint2IsLeaveFunction(); }
        }, 300
        );
    }
})

fixedHeaderMenuBlockPoint2.addEventListener('mouseleave', fixedHederMenuPoint2IsLeaveFunction);

fixedHeaderMenuDropPoint2_1.addEventListener('click', () => {
    window.location.href = SOFTWARE_TESTER_COURSE;
})

fixedHeaderMenuDropPoint2_2.addEventListener('click', () => {
    window.location.href = COMPUTER_LITERACY_COURSE_FOR_QA;
})


//

setActiveResponders(0);

const changeActiveResponders = (isRight) => {
    activeResponders += isRight ? 1 : -1;
    if (activeResponders < 0) activeResponders = amountResponders - 1
    else if (activeResponders === amountResponders) activeResponders = 0;
    setActiveResponders(activeResponders);
}

contactsBlockMail.addEventListener('click', () => {
    window.location.href = `mailto:${encodeURIComponent(EMAIL)}`;
});

contactsBlockLocation.addEventListener('click', () => {
    window.location.href = `https://yandex.ru/maps/-/:${LOCATION}`;
});

linksBlockCategory1.addEventListener('click', () => {
    window.location.href = SERVIES_LINK;
});

linksBlockCategory3.addEventListener('click', () => {
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

anchorImg.addEventListener('mouseenter', () => {
    anchorImgPath.style.transition = 'fill-opacity 0.5s ease';
    anchorImgPath.style.fillOpacity = '1';
});


anchorImg.addEventListener('mouseleave', () => {
    anchorImgPath.style.fillOpacity = '0.3';
});

let isActiveCarousel = false;
let isActiveCarouselPoints = false;

const anchor = document.getElementById('anchor');
anchor.addEventListener('click', () => {
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
            const buttonSelectQ = document.getElementById(`card_button_to_select_acive_q_${(realPoint < amountTesters - 1 ? realPoint : -1) + 1}`);
            buttonSelectQ.addEventListener('click', selectQ((realPoint < amountTesters - 1 ? realPoint : -1) + 1));
            const buttonTellegram = document.getElementById(`card_button_to_telegramm_${(realPoint < amountTesters - 1 ? realPoint : -1) + 1}`);
            buttonTellegram.addEventListener('click', () => {
                window.open(TELEGRAM_LINK, '_blank');
            });
            testerCardLeft.style.width = '0vw';
            const newRightCard = createCard((realPoint < amountTesters - 2 ? realPoint : realPoint - amountTesters) + 2);
            newRightCard.addEventListener('click', nextRightSwap);//а на новую правую даём новую правую
            cardSection.appendChild(newRightCard);
            setTimeout(() => { testerCardLeft.remove(); }, 300)
        } else {
            const new_element = testerCardLeft.cloneNode(true);
            testerCardLeft.parentNode.replaceChild(new_element, testerCardLeft);//убираем все с левой карточки, она теперь центральная
            new_element.classList.add('from1200__comp_8__active_card'); // или добавляем активный класс левой
            const buttonSelectQ = document.getElementById(`card_button_to_select_acive_q_${(realPoint > 0 ? realPoint : amountTesters) - 1}`);
            buttonSelectQ.addEventListener('click', selectQ((realPoint > 0 ? realPoint : amountTesters) - 1));
            const buttonTellegram = document.getElementById(`card_button_to_telegramm_${(realPoint > 0 ? realPoint : amountTesters) - 1}`);
            buttonTellegram.addEventListener('click', () => {
                window.open(TELEGRAM_LINK, '_blank');
            });
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
    lastBlockArtBoard.id = `card_button_to_telegramm_${i}`;
    lastBlockArtBoard.addEventListener('click', () => {
        window.open(TELEGRAM_LINK, '_blank');
    });
    const lastBlockButtons = document.createElement('button');

    lastBlockButtons.textContent = 'Забронировать встречу';
    lastBlockButtons.addEventListener('click', selectQ(i))
    lastBlockButtons.id = `card_button_to_select_acive_q_${i}`;
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
    if (window.scrollY > hieght && !fixedHeaderIsVisible) {
        fixedHeaderIsVisible = true;
        header.style.display = 'flex';
        setTimeout(() => { header.style.marginTop = '0'; }, 1)
    } else if (window.scrollY < hieght && fixedHeaderIsVisible) {
        fixedHeaderIsVisible = false;
        header.style.marginTop = '';
        setTimeout(() => { header.style.display = ''; }, 300)
    }

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

    if (window.scrollY > hieght * 2) {
        for (let i = 0; i < accordionPoints.length; i++) {
            const point = document.getElementById(`1200_accordion_point_${i}`);
            setTimeout(() => {
                point.style.opacity = 1;
                point.style.marginLeft = '0';
            }, i * 150)
        }
    }

    if (window.scrollY > hieght * 2) {
        for (let i = 0; i < accordionPoints.length; i++) {
            const point = document.getElementById(`1200_accordion_point_${i}`);
            setTimeout(() => {
                point.style.opacity = 1;
                point.style.marginLeft = '0';
            }, i * 150)
        }
    }

    for (let j = 1; j <= 5; j++) {
        const comp5Point = document.getElementById(`from1200__composition_5__text_point_${j}`);
        if (window.scrollY > hieght * (3.4 + (j / 10))) {
            comp5Point.style.opacity = 1;
            comp5Point.style.marginLeft = '0';
        }
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


