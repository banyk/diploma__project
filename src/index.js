import chooseClub from './modules/chooseClub';
import showPopup from './modules/showPopup';
import arrowUp from './modules/arrowUp';
import toggleMenu from './modules/toggleMenu';
import sendFormOnPage from './modules/sendFormOnPage';
import maskPhone from './modules/maskPhone';
import validateInputs from './modules/validateInputs';
import calc from './modules/calc';
import mainSlider from './modules/mainSlider';
import Carousel from './modules/carousel';

chooseClub();

showPopup();

arrowUp();

toggleMenu();

sendFormOnPage();

maskPhone('input[type="tel"]');

validateInputs();

calc();

mainSlider();

// Carousel();
const carousel = new Carousel({
	main: 'div#services>div.wrapper',
	wrap: '.services-slider',
	prev: '#carousel-prev',
	next: '#carousel-next',
});

carousel.init();