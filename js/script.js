const swiper = new Swiper('.hero-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});

const lotteryCardSwiperProps = {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
};

const lotterySwiperOne = new Swiper(
  '.lottery-card-slider-1',
  lotteryCardSwiperProps
);

const lotterySwiperTwo = new Swiper(
  '.lottery-card-slider-2',
  lotteryCardSwiperProps
);

const lotterySwiperThree = new Swiper(
  '.lottery-card-slider-3',
  lotteryCardSwiperProps
);

const lotterySwiperFour = new Swiper(
  '.lottery-card-slider-4',
  lotteryCardSwiperProps
);
