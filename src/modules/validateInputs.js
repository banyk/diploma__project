const validateInputs = () => {
	const inputsName = document.querySelectorAll('input[name="name"]');

	inputsName.forEach(input => {

		input.addEventListener('input', () => {
			input.value = input.value.replace(/[^А-яа-яЁё\s]/gi, '');
			input.value = input.value[0].toUpperCase() + input.value.substring(1).toLowerCase();
		});

	});
};

export default validateInputs;