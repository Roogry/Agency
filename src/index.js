import Swiper from 'swiper';
import './styles/main.scss';

var swiperCLient = new Swiper('.hm-clients__swiper', {
  slidesPerView: 2,
  spaceBetween: 16,
  centeredSlides: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
      nextEl: '.hm-clients__next',
      prevEl: '.hm-clients__prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  }
});

var swiperPortfolio = new Swiper('.hm-portfolio__swiper', {
  slidesPerView: 1,
  spaceBetween: 50,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
      nextEl: '.hm-portfolio__next',
      prevEl: '.hm-portfolio__prev',
  },
});

var swiperPortfolio = new Swiper('.hm-testimonials__swiper', {
  slidesPerView: 1,
  spaceBetween: 50,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
      nextEl: '.hm-testimonials__next',
      prevEl: '.hm-testimonials__prev',
  },
});