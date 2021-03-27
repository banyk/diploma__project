class Carousel {
	constructor({
		main,
		wrap,
		position = 0,
		next,
		prev,
		slidesToShow = 4,
		infinity = true
	}) {
		this.main = document.querySelector(main);
		this.wrap = document.querySelector(wrap);
		this.slides = Array.from(document.querySelector(wrap).children);
		this.options = {
			position,
			infinity
		};
		this.next = document.querySelector(next);
		this.prev = document.querySelector(prev);
		this.slidesToShow = slidesToShow;


		this.length = 10;
		this.lengthAll = 20;
		this.currentPosition = this.length;
		this.isTransitionComplete = true;
		this.shift = 100 / 4;
	}
	cloneItems() {

		this.slides.forEach(item => {
			item.classList.add('clone');
			this.slides[0].insertAdjacentElement('beforebegin', item.cloneNode(true));
			item.classList.remove('clone');
		});
	}

	controlSlider() {
		this.prev.addEventListener('click', this.prevSlider.bind(this));
		this.next.addEventListener('click', this.nextSlider.bind(this));
		this.wrap.addEventListener('transitionend', () => {
			if (this.currentPosition === this.lengthAll - this.slidesToShow) {
				for (let i = 0; i < this.length; i++) {
					this.wrap.append(this.wrap.children[0]);
				}
				this.currentPosition = this.length - this.slidesToShow;
				this.wrap.style.transition = 'none';
				this.wrap.style.transform = `translateX(-${
					this.currentPosition * this.shift}%)`;
				setTimeout(() => this.wrap.style.transition = 'transform .5s ease');
			}

			if (this.currentPosition === 0) {
				for (let i = 0; i < this.length; i++) {
					this.wrap.prepend(this.wrap.lastElementChild);
				}
				this.currentPosition = this.length;
				this.wrap.style.transition = 'none';
				this.wrap.style.transform = `translateX(-${
					this.currentPosition * this.shift
				}%)`;
				setTimeout(() => this.wrap.style.transition = 'transform .5s ease');
			}
			this.isTransitionComplete = true;
		});
	}

	prevSlider() {
		if (this.isTransitionComplete) {
			--this.currentPosition;
			this.wrap.style.transform = `translateX(-${this.currentPosition * this.shift}%)`;
		}
		this.isTransitionComplete = false;
	}

	nextSlider() {
		if (this.isTransitionComplete) {
			++this.currentPosition;
			this.wrap.style.transform = `translateX(-${this.currentPosition * this.shift}%)`;
		}
		this.isTransitionComplete = false;
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