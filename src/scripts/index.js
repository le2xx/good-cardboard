import '../styles/index.scss';
import {tns} from 'tiny-slider';

const modalWindow = document.querySelector('.modal');
const modalWindowClose = document.querySelector('.modal__close');
const btnCall = document.querySelector('.logo-block__btn-call');

modalWindowClose.addEventListener('click', () => modalWindow.style.display = 'none');
btnCall.addEventListener('click', () => modalWindow.style.display = 'block');

const slider = tns({
  "container": "#customize",
  "items": 1,
  "controlsContainer": "#customize-controls",
  "navContainer": "#customize-thumbnails",
  "navAsThumbnails": true,
  "autoplay": true,
  "autoplayButton": "#customize-toggle",
  "swipeAngle": false,
  "speed": 1000,
  "gutter": 5,
});

const commentSlider =  tns({
  "container": "#comment-slider",
  "items": 3,
  "nav": false,
  "controlsContainer": "#comment-controls",
  "autoplay": true,
  "autoplayButton": "#comment-toggle",
  "speed": 1000,
  // "autoWidth": true
  // "fixedWidth": 274
});

window.onload = () => {
  slider;
  commentSlider;
};

const btnPrev = document.querySelector('.slider__btn-prev');
const btnNext = document.querySelector('.slider__btn-next');
const btnThumb = document.querySelector('.slider__thumbnails');
btnPrev.addEventListener('click', () => setTimeout(() => slider.play(), 1000));
btnNext.addEventListener('click', () => setTimeout(() => slider.play(), 1000));
btnThumb.addEventListener('click', () => setTimeout(() => slider.play(), 1000));
