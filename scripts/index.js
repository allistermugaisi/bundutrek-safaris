let slideImg = document.getElementById('slideImg');
let landcruiserSlideImg = document.getElementById('landcruiserSlideImg');

const images = new Array(
	'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1689157199/bundutrek-safaris/WhatsApp_Image_2023-07-09_at_20.29.48_jlqvi3.jpg',
	'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1689157202/bundutrek-safaris/WhatsApp_Image_2023-07-09_at_20.29.46_yvpakr.jpg',
	'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1689157204/bundutrek-safaris/WhatsApp_Image_2023-07-09_at_20.29.45_glowjs.jpg',
	'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1689157245/bundutrek-safaris/WhatsApp_Image_2023-07-09_at_20.29.38_1_ub3gjx.jpg',
	'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1689157207/bundutrek-safaris/WhatsApp_Image_2023-07-09_at_20.29.40_ayftgc.jpg'
);

const len = images.length;

let i = 0;

function slider() {
	if (i > len - 1) {
		i = 0;
	}
	slideImg.src = images[i];
	i++;
	setTimeout('slider()', 3000);
}

$(document).ready(function () {
	var scroll_start = 0;
	var startchange = $('.nav');
	var offset = startchange.offset();
	$(document).scroll(function () {
		scroll_start = $(this).scrollTop();
		if (scroll_start > offset.top) {
			$('.nav').css('background-color', '#FFDCC8');
		} else {
			$('.nav').css('background-color', 'transparent');
		}
	});
});

let tabsContainer = document.querySelector('#tabs');

let tabTogglers = tabsContainer.querySelectorAll('#tabs a');

tabTogglers.forEach(function (toggler) {
	toggler.addEventListener('click', function (e) {
		e.preventDefault();

		let tabName = this.getAttribute('href');

		let tabContents = document.querySelector('#tab-contents');

		for (let i = 0; i < tabContents.children.length; i++) {
			tabTogglers[i].parentElement.classList.remove(
				'border-r-2',
				'border-red-500'
			);
			tabContents.children[i].classList.remove('hidden');
			if ('#' + tabContents.children[i].id === tabName) {
				continue;
			}
			tabContents.children[i].classList.add('hidden');
		}
		e.target.parentElement.classList.add('border-r-2', 'border-red-500');
	});
});
