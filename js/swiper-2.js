const swiperMidle = document.getElementById('swiper-midle');

const swiper = new Swiper(swiperMidle, {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 5,
    centeredSlides: true,
    spaceBetween: 100,
    loop: true,
    loopedSlides: 7,
    watchSlidesVisibility: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
      breakpoints: {
  
          1700: {
            slidesPerView:3,
            spaceBetween: 100,
          },
          1200: {
            slidesPerView:3,
            spaceBetween: 60,
          },
          1120:{
            slidesPerView:3,
            spaceBetween: 40,
          },
          1000:{
            slidesPerView:3,
            spaceBetween: 20,
          },
          800: {
              slidesPerView:2,
              spaceBetween: 30,
          },
          500:{
            slidesPerView:1,
            spaceBetween: 60,
          },
          300:{
            slidesPerView:1,
            spaceBetween: 60,
          }
      }
  });
  