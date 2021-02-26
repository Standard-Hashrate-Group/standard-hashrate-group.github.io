import Swiper from 'swiper/bundle';

import { fullPage, commentConfig } from './config/swiper';


const fullPageSwiper = new Swiper('.full-page-slider', fullPage);
const commentSwiper = new Swiper('.members-comment-list', commentConfig);

document.querySelectorAll('.nav .nav-header a').forEach((ele, index) => {
  ele.addEventListener('click', () => {
    fullPageSwiper.slideTo(index);
    document.querySelector('.nav').classList.remove('active');
    document
      .querySelector('.nav-icon')
      .classList.remove('active');
  });
});

document.querySelector('.nav-icon').addEventListener('click', (e) => {
  e.preventDefault();
  const element = e.currentTarget;
  element.classList.toggle('active');
  document.querySelector('.nav').classList.toggle('active');
});

document.querySelectorAll('.tau-list-item-header').forEach(ele => { 
  ele.addEventListener('click', (e) => {
    const isActive = e.currentTarget.parentElement.classList.contains('active');
    
    if (isActive) {
      e.currentTarget.parentElement.classList.remove('active');
      return;
    }

    document.querySelectorAll('.tau-list-item').forEach(item => {
      item.classList.remove('active');
    });

    ele.parentElement.classList.add('active');
  });
});

document.querySelectorAll('.btcst-list-item-header').forEach((ele) => {
  ele.addEventListener('click', (e) => {
    const isActive = e.currentTarget.parentElement.classList.contains('active');

    if (isActive) {
      e.currentTarget.parentElement.classList.remove('active');
      return;
    }

    document.querySelectorAll('.btcst-list-item').forEach((item) => {
      item.classList.remove('active');
    });

    ele.parentElement.classList.add('active');
  });
});

