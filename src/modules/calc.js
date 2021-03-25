const calc = () => {

	const mozaikaPrice = [1990, 9900, 13900, 19900],
		schelkovoPrice = [2999, 14990, 21990, 24990];

	const formOrder = document.getElementById('card_order');
	const price = formOrder.querySelector('#price-total');
	const promo = formOrder.querySelector('input[name="promo"]');
	const months = formOrder.querySelectorAll('div.time>input[type="radio"]');
	const mozaika = formOrder.querySelector('#card_leto_mozaika');
	const schelkovo = formOrder.querySelector('#card_leto_schelkovo');

	const countPrice = () => {
		if (mozaika.checked) {
			months.forEach((item, i) => {
				item.dataset.monthPrice = mozaikaPrice[i];
			});
		}
		if (schelkovo.checked) {
			months.forEach((item, i) => {
				item.dataset.monthPrice = schelkovoPrice[i];
			});
		}

		let value;
		months.forEach((radio, i) => {
			if (radio.checked) {
				value = radio.getAttribute('data-month-price');
			}
		});

		if (promo.value === 'ТЕЛО2019') {
			price.textContent = Math.floor(value * (1 - 30 / 100));
		} else {
			price.textContent = value;
		}

	};

	formOrder.addEventListener('input', event => {
		const target = event.target;

		if (target.matches('input[type="radio"]') || target.matches('input[name="promo"]')) {
			try {
				countPrice();
			} catch (e) {
				console.log('Ошибка:', e);
			}
		}


	});

};

export default calc;