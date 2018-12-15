import '../styles/index.scss';
import {tns} from 'tiny-slider';
import ymaps from 'ymaps';

const modalWindow = document.querySelector('.modal');
const modalWindowClose = document.querySelector('.modal__close');
const modalDetail = document.querySelector('.detail');
const modalDetailClose = document.querySelector('.detail__close');
const btnCall = document.querySelector('.logo-block__btn-call');
const btnDetail = document.querySelectorAll('.products__btn-detail');

modalWindowClose.addEventListener('click', () => modalWindow.style.display = 'none');
modalDetailClose.addEventListener('click', () => modalDetail.style.display = 'none');
btnCall.addEventListener('click', () => modalWindow.style.display = 'block');
btnDetail.forEach(item => item.addEventListener('click', () => modalDetail.style.display = 'block'));

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

const commentSlider = tns({
  "container": "#comment-slider",
  "items": 3,
  "nav": false,
  "controlsContainer": "#comment-controls",
  "autoplay": true,
  "autoplayButton": "#comment-toggle",
  "speed": 1000,
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


const commentPrev = document.querySelector('.comment__btn-prev');
const commentNext = document.querySelector('.comment__btn-next');
commentPrev.addEventListener('click', () => setTimeout(() => commentSlider.play(), 1000));
commentNext.addEventListener('click', () => setTimeout(() => commentSlider.play(), 1000));


ymaps.load('https://api-maps.yandex.ru/2.1/?lang=ru_RU').then(maps => {
  const myMap = new maps.Map('map', {
    center: [54.752656, 56.002053],
    zoom: 17,
    controls: ['zoomControl']
  });

  const myPlacemark = new maps.Placemark(myMap.getCenter(), {
    hintContent: 'Добрый картон',
    balloonContent: 'Добрый картон<br>г. Уфа, Проспект октября, 46',
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../../public/icons/balloon.png',
    iconImageSize: [64, 64],
    iconImageOffset: [-32, -64]
  });

  myMap.behaviors.disable('scrollZoom');
  myMap.geoObjects.add(myPlacemark);
})
  .catch(error => console.log('Failed to load Yandex Maps', error));
