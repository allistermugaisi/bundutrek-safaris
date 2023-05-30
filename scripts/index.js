let slideImg = document.getElementById('slideImg');
let landcruiserSlideImg = document.getElementById('landcruiserSlideImg');

const images = new Array(
	'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1684949105/bundutrek-safaris/WhatsApp_Image_2023-05-22_at_21.05.07_3_tmhjrj.jpg',
	'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1684758416/bundutrek-safaris/mara-42_hvldqi.jpg',
	'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1684949015/bundutrek-safaris/WhatsApp_Image_2023-05-22_at_21.05.07_nmz39l.jpg',
	'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1685483018/bundutrek-safaris/WhatsApp_Image_2023-05-25_at_11.10.28_k6dqz8.jpg',
	'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1683544556/bundutrek-safaris/_MG_1613_oe9oxv.jpg',
	'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1683544556/bundutrek-safaris/_MG_1892_bqsf96.jpg'
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
