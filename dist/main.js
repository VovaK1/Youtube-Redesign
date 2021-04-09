"use strict";

var swiper = new Swiper('.channel__slider', {
  loop: true,
  slidesPerView: 5,
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.channel__button--next',
    prevEl: '.channel__button--prev'
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  }
});