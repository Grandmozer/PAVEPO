const swiperMidle = document.getElementById('swiper-midle');

const swiper = new Swiper(swiperMidle, {
// Optional parameters
slidesPerView: 3,   
spaceBetween: 40,
direction: 'horizontal',
loop: true,
// spaceBetween: 30,        
centeredSlides: true,

// loopedSlides: 7,
// watchSlidesVisibility: true,
breakpoints: {
 
    1920: {
        slidesPerView:3,
        // spaceBetween: 30,
    },
    480: {
        slidesPerView:1,
        // spaceBetween: 10,
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
