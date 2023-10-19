const swiperSmall = document.getElementById('swiper-mini');


const swiper = new Swiper(swiperSmall, {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 5,
    centeredSlides: true,
    spaceBetween: 30,
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
  
          1028: {
              slidesPerView:4,
              spaceBetween: 30,
          },
          768: {
            slidesPerView:3,
            spaceBetween: 20,
        },
          480: {
              slidesPerView:1,
              spaceBetween: 10,
          },
          300:{
            slidesPerView:1,
            spaceBetween: 10,
          }
      }
  });
  

