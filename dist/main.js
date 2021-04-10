"use strict";

var channelSwiper = new Swiper('.channel__slider', {
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
var recommendedSwiper = new Swiper('.recommended__slider', {
  loop: true,
  slidesPerView: 3,
  pagination: {
    el: '.swiper-pagination'
  },
  // Navigation arrows
  navigation: {
    nextEl: '.recommended__button--next',
    prevEl: '.recommended__button--prev'
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  }
});