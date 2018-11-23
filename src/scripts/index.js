import '../styles/index.scss';

const modalWindow = document.querySelector('.modal');
const modalWindowClose = document.querySelector('.modal__close');
const btnCall = document.querySelector('.logo-block__btn-call');

modalWindowClose.addEventListener('click', () => modalWindow.style.display = 'none');
btnCall.addEventListener('click', () => modalWindow.style.display = 'block');
