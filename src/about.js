import "./about.css";


const swiperContainer = document.querySelector('.swiper-container');
const swiperPagination = document.querySelector('.swiper-pagination');
const swiperButtonNext = document.querySelector('.swiper-button-next');
const swiperButtonPrev = document.querySelector('.swiper-button-prev');
const swiperScrollbar = document.querySelector('.swiper-scrollbar');

import Swiper from 'swiper';

var mySwiper = new Swiper('.swiper-container', { // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: swiperButtonNext,
        prevEl: swiperButtonPrev,
    },

    // And if we need scrollbar
    scrollbar: {
        el: swiperScrollbar,
    },
});