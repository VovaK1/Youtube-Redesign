const mainSwiper = $('.channel__slider');
const breakpoint = window.matchMedia( '(max-width:480px)' );
let mySwiper;





const recommendedSwiper = new Swiper('.recommended__slider', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },

    //Responsive breakpoints
    breakpoints: {
      480: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 1, 
      },
      992: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      }
    },

  // Navigation arrows
  navigation: {
    nextEl: '.recommended__button--next',
    prevEl: '.recommended__button--prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const breakpointChecker = function() {
  if ( breakpoint.matches === true ) {
    // clean up old instances and inline styles when available
    if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
    // or/and do nothing
    return;
 // else if a small viewport and single column layout needed
 } else if ( breakpoint.matches === false ) {
    // fire small viewport version of swiper
    return enableSwiper();
 }
};

const enableSwiper = function() {
   mySwiper = new Swiper ('.channel__slider', {
    loop: true,
    direction: 'horizontal',
    pagination: {
      el: '.swiper-pagination',
    },
    //Responsive breakpoints
    breakpoints: {
      768: {
        slidesPerView: 2, 
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
      1500: {
        slidesPerView: 5,
      }
    },
    // Navigation arrows
  navigation: {
    nextEl: '.channel__button--next',
    prevEl: '.channel__button--prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
   });
};

// keep an eye on viewport size changes
breakpoint.addListener(breakpointChecker);
// kickstart
breakpointChecker();
