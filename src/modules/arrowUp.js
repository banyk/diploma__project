const arrowUp = () => {
	window.addEventListener('scroll', () => {
		const offsetTop = window.pageYOffset;
		const headerMain = document.querySelector('.header-main');
		const headerOffset = headerMain.offsetHeight;
		const toTopBtn = document.getElementById('totop');

		if (offsetTop > headerOffset) {
			toTopBtn.style.display = 'block';
		} else {
			toTopBtn.style.display = 'none';
		}
	});
};


export default arrowUp;