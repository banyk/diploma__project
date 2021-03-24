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
	const messageLoad = `Идёт отправка...`;
	const errorContent = `Что-то пошло не так.`;
	const successHeader = 'Спасибо!';
	const errorHeader = 'Упс!';

	const statusMessage = document.createElement('div');
	statusMessage.style.cssText = 'font-size: 1.5rem;';

	const forms = document.querySelectorAll('form');

	forms.forEach(form => {

		let formCheckbox;
		let label;
		let radioBtns;
		let radioArr;
		if (form.id !== 'footer_form') {
			formCheckbox = form.querySelector('input[name="checkbox"]');
			label = form.querySelector('p.personal-data>label');
		} else {
			radioBtns = form.querySelectorAll('input[type="radio"]');
		}


		form.addEventListener('submit', event => {
			event.preventDefault();

			const inputs = form.querySelectorAll('input');
			let isNotValid = false;
			inputs.forEach(input => {
				if (formCheckbox && !formCheckbox.checked) {
					isNotValid = true;
					label.style.boxShadow = '0px 0px 10px red';
					setTimeout(() => {
						label.style.boxShadow = 'none';
					}, 4000);
				}
				if (radioBtns) {
					radioArr = [];
					radioBtns.forEach(radio => {
						if (radio.checked) {
							radioArr.push(radio.value);
						}
					});

					if (radioArr.length <= 0) {
						isNotValid = true;
						statusMessage.innerHTML = 'Выберите клуб';
						form.insertAdjacentElement('beforeend', statusMessage);

						setTimeout(() => {
							statusMessage.remove();
						}, 4000);
					}
				}
				if (input.value.trim() === '' && input.getAttribute('name') !==
					'checkbox' && input.getAttribute('name') !== 'promo') {
					isNotValid = true;
					input.style.border = '2px solid red';
					setTimeout(() => {
						input.style.border = 'none';
					}, 4000);
				}
				if (input.getAttribute('name') === 'name' && input.value.length < 2) {
					isNotValid = true;
					input.style.border = '2px solid red';
					setTimeout(() => {
						input.style.border = 'none';
					}, 4000);
				}
				if (input.getAttribute('name') === 'phone' && input.value.length < 10) {
					isNotValid = true;
					input.style.border = '2px solid red';
					setTimeout(() => {
						input.style.border = 'none';
					}, 4000);
				}
			});

			if (!isNotValid) {
				statusMessage.innerHTML = messageLoad;
				form.insertAdjacentElement('beforeend', statusMessage);

				const formData = new FormData(form);
				const body = {};
				formData.forEach((val, key) => {
					body[key] = val;
				});

				postData(body).then(response => {
					if (response.status === 200) {
						if (form.id === 'card_order') {
							statusMessage.style.color = '#000';
						} else {
							statusMessage.style.color = 'white';
						}
						if (form.id === 'banner-form' || form.id === 'card_order' || form.id === 'footer_form') {
							popupThanks.style.display = 'block';
							popupHeader.innerHTML = successHeader;
							popupContent.innerHTML = successContent;
							statusMessage.remove();
						} else {
							statusMessage.innerHTML = successContent;
							form.insertAdjacentElement('beforeend', statusMessage);
						}

						form.querySelectorAll('input').forEach(input => input.value = '');
						if (formCheckbox) {
							formCheckbox.checked = false;
						}
						if (radioBtns) {
							radioBtns.forEach(radio => {
								radio.checked = false;
							});
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
						statusMessage.remove();

						if (popupThanks.style.display === 'block') {
							popupThanks.style.display = 'none';
						}
					}, 4000);
				});
			} else {
				return;
			}
		});
	});

};

export default sendFormOnPage;