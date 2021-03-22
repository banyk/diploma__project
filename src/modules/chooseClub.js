const chooseClub = () => {

	document.addEventListener('click', event => {
		const target = event.target;
		const clubSelect = target.closest('.club-select'),
			clubList = document.querySelector('.clubs-list>ul');
		if (clubSelect) {
			clubList.style.display = 'block';
		}
		if (!clubSelect) {
			clubList.style.display = 'none';
		}
	});
};

export default chooseClub;