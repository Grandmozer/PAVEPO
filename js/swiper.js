const swiperSmall = document.getElementById('swiper-mini');

const swiper = new Swiper(swiperSmall, {
// Optional parameters
slidesPerView: 3,   
spaceBetween:-390,
direction: 'horizontal',
loop: true,
// spaceBetween: 30,        
centeredSlides: true,

// loopedSlides: 7,
// watchSlidesVisibility: true,
breakpoints: {
 
    480: {
        slidesPerView:1,
        // spaceBetween: 10,
    },
    900:{
        slidesPerView:2,

    },
    1200:{
        slidesPerView:2,
    },
    1600:{
        slidesPerView:2,
        spaceBetween: -700,
    },
    1700:{
        slidesPerView:3,
        spaceBetween: -290,
    },
    1800:{
        slidesPerView:3,
        spaceBetween: -240,
    },
    1900: {
        slidesPerView:3,
        spaceBetween: -210,
    },
    1920:{
        slidesPerView:3,
        spaceBetween: -250,
    }
},


// If we need pagination
pagination: {
    el: '.swiper-pagination',
},

// Navigation arrows
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},

// And if we need scrollbar
scrollbar: {
    el: '.swiper-scrollbar',
},
});

