const showPopup = () => {

	document.addEventListener('click', event => {
		const target = event.target;
		const parentPopup = target.closest('.popup');
		const gift = target.closest('.fixed-gift');

		const openPopup = () => {
			const id = target.getAttribute('data-popup');
			const popup = document.getElementById(id);
			popup.style.display = 'block';

			if (gift) {
				gift.style.display = 'none';
			}
		};

		const closePopup = () => {
			const close = target.closest('.close-form'),
				closeBtn = target.closest('.close-btn'),
				formWrapper = target.closest('.form-wrapper');

			if (!formWrapper || close || closeBtn) {
				target.closest('.popup').style.display = 'none';
			}
		};

		if (target.hasAttribute('data-popup')) {
			openPopup();
		}

		if (parentPopup) {
			closePopup();
		}
	});

};


export default showPopup;