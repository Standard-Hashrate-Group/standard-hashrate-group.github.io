/* eslint-disable implicit-arrow-linebreak */
import { NAV_LIST } from '../const';

export const fullPage = {
  hashNavigation: {
    replaceState: true,
  },
  // effect: 'fade',
  direction: 'vertical',
  slidesPerView: 1,
  mousewheel: true,
  shortSwipes: false,
  speed: 500,
  pagination: {
    el: '.full-page-slider-pagination',
    type: 'bullets',
    clickable: true,
    renderBullet: (index, className) =>
      `<div class="${className} full-page-slider-pagination__link"><span>${NAV_LIST[index].name}</span></div>`,
  },
  breakpoints: {
    1024: {
      shortSwipes: true,
    },
  },
};

export const commentConfig = {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
};
