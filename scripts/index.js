let slideImg = document.getElementById('slideImg');
let landcruiserSlideImg = document.getElementById('landcruiserSlideImg');

const images = new Array(
	'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1686608771/bundutrek-safaris/_MG_2825_pjmleh.jpg',
	'https://res.cloudinary.com/dgisuffs0/image/upload/v1684393890/bundutrek-safaris/IMG_0309_zme15z.jpg',
	// 'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1683525739/bundutrek-safaris/mara-130_ydnvw4.jpg',
	// 'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1683528315/bundutrek-safaris/mara-22_xfrlbx.jpg',
	'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1683270724/bundutrek-safaris/_MG_4886-2_ay3goq.jpg',
	// 'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1683528315/bundutrek-safaris/mara-26_aox8et.jpg',
	// 'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1683544557/bundutrek-safaris/_MG_1963_gltorp.jpg',
	'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1683270722/bundutrek-safaris/39b756_46f36f46f87744688c0a12fa5f97b0f1_mv2_d_4996_3129_s_4_2.jpg_sgmz87.webp',
	'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1684949015/bundutrek-safaris/WhatsApp_Image_2023-05-22_at_21.05.07_nmz39l.jpg',
	'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1686428600/bundutrek-safaris/14beff4c-7fdc-4c5c-acd7-d9931e14221b_w6srd8.jpg',
	'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1686428973/bundutrek-safaris/7168e364-5ad0-4761-ac56-9069016ad192_uys4jq.jpg',
	'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1686429148/bundutrek-safaris/a995d521-6f6c-46cc-9f0e-72ebeec154bb_gyjxw3.jpg'
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
