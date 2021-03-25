const mainSlider = () => {
	const slider = document.querySelector('.main-slider'),
		sliderItems = slider.querySelectorAll('.slide');

	let currentSlide = 0;

	const prevSlide = (elem, index) => {
		elem[index].style.display = 'none';
	};

	const nextSlide = (elem, index) => {
		elem[index].style.display = 'flex';
	};

	const autoPlaySlide = () => {
		prevSlide(sliderItems, currentSlide);

		currentSlide++;
		if (currentSlide >= sliderItems.length) {
			currentSlide = 0;
		}
		nextSlide(sliderItems, currentSlide);
	};

	const startSlider = (time = 3000) => {
		setInterval(autoPlaySlide, time);
	};

	startSlider(3000);

};

const gallerySlider = () => {
	const slider = document.querySelector('.gallery-slider'),
		sliderItems = slider.querySelectorAll('.slide'),
		dots = document.createElement('ul');
	dots.classList.add('slider-dots');


	slider.append(dots);
	let currentSlide = 0;

	const prevSlide = (elem, index) => {
		elem[index].style.cssText = `
		display: none;
		`;
	};

	const nextSlide = (elem, index) => {
		elem[index].style.cssText = `
		display: block;
		`;
	};

	const createDots = num => {
		const arr = [];
		for (let i = 0; i <= num; i++) {
			const dot = document.createElement('li');
			const btn = document.createElement('button');
			dot.append(btn);
			dots.append(dot);
			arr.push(dot);
		}
		arr[0].classList.add('slick-active');
		return arr;
	};

	const createArrows = () => {
		const leftArrow = document.createElement('div');
		const arrowSpan = document.createElement('span');
		arrowSpan.textContent = '<';
		arrowSpan.style.cssText = `
		display:block;
		width:36px;
		height:37px;
		background-color:#f4c71b;
		border-radius:50%;
		text-align:center;
		padding-top:11px;
		`;
		leftArrow.append(arrowSpan);
		leftArrow.classList.add('slider-arrow', 'prev');

		slider.append(leftArrow);
		const rightArrow = document.createElement('div');
		const rightArrowSpan = document.createElement('span');
		rightArrowSpan.textContent = '>';
		rightArrowSpan.style.cssText = `
		display:block;
		width:36px;
		height:37px;
		background-color:#f4c71b;
		border-radius:50%;
		text-align:center;
		padding-top:11px;
		`;
		rightArrow.append(rightArrowSpan);
		rightArrow.classList.add('slider-arrow', 'next');

		slider.append(rightArrow);
	};

	createArrows();

	const allDots = createDots(sliderItems.length - 1);

	const autoPlaySlide = () => {
		prevSlide(sliderItems, currentSlide);

		currentSlide++;
		if (currentSlide >= sliderItems.length) {
			currentSlide = 0;
		}
		nextSlide(sliderItems, currentSlide);
	};

	const startSlider = (time = 3000) => {
		setInterval(autoPlaySlide, time);
	};

	startSlider(3000);

};

gallerySlider();
export default mainSlider;