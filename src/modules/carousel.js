class Carousel {
	constructor({
		main,
		wrap,
		position = 0,
		next,
		prev,
		slidesToShow = 5,
		infinity = true
	}) {
		this.main = document.querySelector(main);
		this.wrap = document.querySelector(wrap);
		this.slides = document.querySelector(wrap).children;
		this.options = {
			position,
			infinity
		};
		this.next = document.querySelector(next);
		this.prev = document.querySelector(prev);
		this.slidesToShow = slidesToShow;


		this.length = 10;
		this.lengthAll = this.slides.length;
		this.currentPosition = this.length;
		this.isTransitionComplete = true;
		this.shift = 100 / 4;
	}
	cloneItems() {
		let slides = Array.from(this.slides);

		slides.forEach(item => {
			item.classList.add('clone');
			this.wrap.prepend(item.cloneNode(true));
			item.classList.remove('clone');
		});
	}

	controlSlider() {
		this.prev.addEventListener('click', this.prevSlider.bind(this));
		this.next.addEventListener('click', this.nextSlider.bind(this));
	}

	prevSlider() {
		if (this.isTransitionComplete) {
			--this.currentPosition;
			this.wrap.style.transform = `translateX(-${this.currentPosition * this.shift}%)`;
		}
	}

	nextSlider() {

		const styleTransition = `
		transition: transform 0.5s;
		will-change: transform;`;

		this.wrap.style.cssText = styleTransition;

		if (this.options.infinity || this.options.position < this.slides.length - 4) {

			++this.options.position;
			if (this.options.position > this.slides.length - 4) {
				this.options.position = 0;
			}
			this.wrap.style.transform = `translateX(-${this.options.position * 25}%)`;
		}
		console.log(this.options.position);
	}

	addStyles() {
		const styleTransition = `
		transition: transform 0.5s;
		will-change: transform;`;

		this.wrap.style.cssText = styleTransition;
	}
	init() {
		this.addStyles();
		this.cloneItems();
		this.controlSlider();

		this.wrap.style.transform = `
		translateX(-${this.currentPosition * this.shift}%)`;
		console.log(123);
	}
}


export default Carousel;