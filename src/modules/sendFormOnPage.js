const sendFormOnPage = () => {

	const popupThanks = document.getElementById('thanks');
	const popupHeader = popupThanks.querySelector('h4');
	const popupContent = popupThanks.querySelector('p');

	const postData = body => fetch('./server.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	});

	const successContent = `Ваша заявка отправлена. <br/> Мы свяжемся с вами в ближайшее время.`;
	const errorContent = `Что-то пошло не так.`;
	const successHeader = 'Спасибо!';
	const errorHeader = 'Упс!';
	const emptyField = 'Заполните пустое поле, пожалуйста!';

	const statusMessage = document.createElement('div');
	statusMessage.style.cssText = 'font-size: 1.5rem; color: white;';

	const form = document.querySelector('.form-wrapper>form');
	const forms = document.querySelectorAll('form');

	forms.forEach(form => {

		const formCheckbox = form.querySelector('input[type="checkbox"]');

		form.addEventListener('submit', event => {
			event.preventDefault();

			const formData = new FormData(form);
			const body = {};
			formData.forEach((val, key) => {
				body[key] = val;
			});

			if (formCheckbox.checked) {
				postData(body).then(response => {
					if (response.status === 200) {
						if (form.id === 'banner-form' || form.id === 'card_order') {
							popupThanks.style.display = 'block';
							popupHeader.innerHTML = successHeader;
							popupContent.innerHTML = successContent;
						} else {
							statusMessage.innerHTML = successContent;
							form.insertAdjacentElement('beforeend', statusMessage);
						}
					} else {
						throw new Error('status network is not 200');
					}
				}).catch(error => {
					if (form.id === 'banner-form' || form.id === 'card_order') {
						popupThanks.style.display = 'block';
						popupHeader.innerHTML = errorHeader;
						popupContent.innerHTML = errorContent;
					} else {
						statusMessage.innerHTML = errorContent;
						form.insertAdjacentElement('beforeend', statusMessage);
					}
					console.log(error);
				}).finally(() => {
					setTimeout(() => {
						form.querySelectorAll('input').forEach(input => input.value = '');
						formCheckbox.checked = false;
						statusMessage.remove();
						if (popupThanks.style.display === 'block') {
							popupThanks.style.display = 'none';
						}
					}, 4000);
				});
			} else {
				console.log(emptyField);
				return;
			}
		});
	});

};

export default sendFormOnPage;