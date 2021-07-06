document.addEventListener('DOMContentLoaded', () => {
	(() => {
	const burger = document.querySelector('.burger');
	const headerNav = document.querySelector('.header__nav');
	const navLinks = headerNav.querySelectorAll('.nav__link');
	const body = document.body;

	burger.addEventListener('click', openBurger);
	navLinks.forEach(link => {
		link.addEventListener('click', openBurger);
	})

	function openBurger(event) {
		if (!burger.classList.contains('active')) {
			body.classList.add('lock');
			burger.classList.add('active');
			headerNav.classList.add('active');

			return;
		}

		closeBurger();
	}

	function closeBurger(event) {
		if (burger.classList.contains('active')) {
			body.classList.remove('lock');
			burger.classList.remove('active');
			headerNav.classList.remove('active');
		}
	}
})()
;
})