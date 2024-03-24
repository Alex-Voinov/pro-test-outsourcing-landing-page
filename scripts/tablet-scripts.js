const hamburger = document.getElementById('tablet_hamburger');//772 926
const navigation = document.getElementById('from_tablet_modal_menu__navigation')
const closeNavigation = document.getElementById('from_tablet__nav__close');
const flipCardStates = [false, false, false];
const accordionPointStatets = [false, false, false, false, false, false];
const accordionPointActiveHeights = ['15.19196vh', '15.19196vh', '15.19196vh', '12.91317vh', '13.02168vh', '17.57927vh'];

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

hamburger.addEventListener('click', () => {
    from_tablet_modal_menu.style.display = 'block';
    setTimeout(() => {
        from_tablet_modal_menu.style.backdropFilter = 'blur(2px)';
        navigation.style.marginRight = '0';
    }, 1)
})

closeNavigation.addEventListener('click', () => {
    from_tablet_modal_menu.style.backdropFilter = '';
    navigation.style.marginRight = '';
    setTimeout(() => {
        from_tablet_modal_menu.style.display = '';
    }, 500)
})