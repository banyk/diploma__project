const toggleMenu = () => {

	const smoothScroll = target => {
		const href = target.getAttribute('href');
		const element = document.querySelector(href);
		window.scrollTo({
			left: 0,
			top: element.offsetTop,
			behavior: 'smooth'
		});
	};

	document.addEventListener('click', event => {
		const target = event.target;

		const menuIcon = target.closest('div.menu-button>img'),
			menuPopup = document.querySelector('.popup-menu'),
			menuLinks = menuPopup.querySelectorAll('ul>li>a');

		if (menuIcon) {
			menuPopup.classList.remove('hidden-large');
			menuPopup.style.display = 'flex';
		}

		if (target.matches('div.close-menu-btn>img') || target.matches('ul>li>a')) {
			menuPopup.classList.add('hidden-large');
			menuPopup.style.display = 'none';
		}
		menuLinks.forEach(link => {
			link.addEventListener('click', event => {
				event.preventDefault();
				smoothScroll(link);
			});
		});
	});
};


// const stickyMenu = () => {
// 	if (screen.width <= 787 || document.documentElement.clientWidth <= 787) {
// 		const head = document.querySelector('.head');
// 		head.style.paddingBottom = '50px';
// 		window.addEventListener('scroll', () => {
// 			const windowOffsetTop = window.pageYOffset;
// 			const topMenu = document.querySelector('.top-menu');
// 			const topMenuOffset = topMenu.offsetTop;



// 			topMenu.style.position = 'absolute';
// 			topMenu.style.top = '187px';

// 			console.log(windowOffsetTop, topMenuOffset);

// 			if (windowOffsetTop > topMenuOffset) {
// 				topMenu.style.position = 'fixed';
// 				topMenu.style.top = '0';
// 			}
// 			if (windowOffsetTop < 187) {
// 				topMenu.style.position = 'absolute';
// 				topMenu.style.top = '187px';
// 			}
// 		});
// 	}
// };

// stickyMenu();

export default toggleMenu;