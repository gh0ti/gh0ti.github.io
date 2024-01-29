"use strict"

function btnClick() {
    console.log('click');
}

function toggleMenu() {
    const nav = document.querySelector('.main__top__menu');
    nav.classList.forEach( (elm) => {
        if(elm === 'open') {
            nav.classList.remove('open');
        } else {
            nav.classList.add('open');
        }
    });
}