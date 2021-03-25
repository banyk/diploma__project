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
		sliderItems = slider.querySelectorAll('.slide');

	let currentSlide = 0,
		interval;

	const prevSlide = (elem, index, strClass) => {

		if (strClass) {
			elem[index].classList.remove(strClass);
		} else {
			elem[index].style.cssText = `
			display: none;
			`;
		}
	};

	const nextSlide = (elem, index, strClass) => {
		if (strClass) {
			elem[index].classList.add(strClass);
		} else {
			elem[index].style.cssText = `
			display: block;
			`;
		}

	};

	const createDots = num => {

		const dots = document.createElement('ul');

		dots.classList.add('slider-dots');
		slider.append(dots);
		const arr = [];
		for (let i = 0; i <= num; i++) {
			const dot = document.createElement('li');
			const btn = document.createElement('button');
			dot.classList.add('dot');
			dot.append(btn);
			dots.append(dot);
			arr.push(dot);
		}
		arr[0].classList.add('slick-active');
		return arr;
	};

	const allDots = createDots(sliderItems.length - 1);


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

		leftArrow.id = 'left-arrow';
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

		rightArrow.id = 'right-arrow';
		rightArrow.append(rightArrowSpan);
		rightArrow.classList.add('slider-arrow', 'next');

		slider.append(rightArrow);
	};

	createArrows();


	const autoPlaySlide = () => {
		prevSlide(sliderItems, currentSlide);
		prevSlide(allDots, currentSlide, 'slick-active');

		currentSlide++;
		if (currentSlide >= sliderItems.length) {
			currentSlide = 0;
		}
		nextSlide(sliderItems, currentSlide);
		nextSlide(allDots, currentSlide, 'slick-active');
	};

	const startSlider = (time = 3000) => {
		setInterval(autoPlaySlide, time);
	};

	const stopSlider = () => {
		clearInterval(interval);
	};

	slider.addEventListener('click', event => {
		event.preventDefault();

		const target = event.target;

		const dot = target.closest('.dot');
		const arrowRight = target.closest('#right-arrow');
		const arrowLeft = target.closest('#left-arrow');

		prevSlide(sliderItems, currentSlide);
		prevSlide(allDots, currentSlide, 'slick-active');

		if (arrowRight) {
			currentSlide++;
		} else if (arrowLeft) {
			currentSlide--;
		} else if (dot) {
			allDots.forEach((item, index) => {
				if (item === dot) {
					currentSlide = index;
				}
			});
		}

		if (currentSlide >= sliderItems.length) {
			currentSlide = 0;
		} else if (currentSlide < 0) {
			currentSlide = sliderItems.length - 1;
		}

		nextSlide(sliderItems, currentSlide);
		nextSlide(allDots, currentSlide, 'slick-active');

	});

	startSlider(3000);

};

gallerySlider();
export default mainSlider;