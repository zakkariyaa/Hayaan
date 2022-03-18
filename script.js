// Change nav style on scroll
window.addEventListener('scroll', () => {
	document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// Show/Hide faq answer
const faqs = document.querySelectorAll('.faq');
for (let faq of faqs) {
	faq.addEventListener('click', () => {
		faq.classList.toggle('open');
		// change icon
		const icon = faq.querySelector('.faq__icon i');
		if (icon.className === 'uil uil-plus') {
			icon.className = 'uil uil-minus';
		} else {
			icon.className = 'uil uil-plus';
		}
	})
}

// Hamburger menu
const navMenu = document.querySelector('.nav__menu');
const openBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

openBtn.addEventListener('click', () => {
	navMenu.style.display = 'flex';
	closeBtn.style.display = 'inline-block';
	openBtn.style.display = 'none';
})

closeBtn.addEventListener('click', () => {
	navMenu.style.display = 'none';
	closeBtn.style.display = 'none';
	openBtn.style.display = 'inline-block';
})
