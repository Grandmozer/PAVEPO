const swiperSmall = document.getElementById('swiper-mini');
const swiperMidle = document.getElementById('swiper-midle');

const swiper1 = new Swiper(swiperSmall, {
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
      nextEl: '.slider1-next', 
      prevEl: '.slider1-prev',
      uniqueNavElements: false //разрешаем конфликты 
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
  

  const swiper2 = new Swiper(swiperMidle, {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 5,
    centeredSlides: true,
    spaceBetween: 80,
    loop: true,
    loopedSlides: 7,
    watchSlidesVisibility: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider2-next', 
      prevEl: '.slider2-prev', 
      uniqueNavElements: false //разрешаем конфликты 
    },
      breakpoints: {
  
          1700: {
            slidesPerView:3,
            spaceBetween: 80,
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
          400:{
            slidesPerView:1,
            spaceBetween: 20,
          },
          300:{
            slidesPerView:1,
            spaceBetween: 10,
          },
          250:{
            slidesPerView:1,
            spaceBetween: 10,
          }
      }
  });
  