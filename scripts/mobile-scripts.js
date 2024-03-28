const hamburger = document.getElementById('mobile__hamburger');
const closeAsideMenu = document.getElementById('mobile__right_menu__close');
const menu = document.getElementById('mobile__right_menu');
const blurBack = document.getElementById('mobile__blur__back');
const comp3CardStates = [false, false, false];
const comp3CardHSize = [22.16274, 15.09636, 17.45182];

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