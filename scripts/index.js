let slideImg = document.getElementById('slideImg');
let landcruiserSlideImg = document.getElementById('landcruiserSlideImg');

const images = new Array(
	'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1683523811/bundutrek-safaris/mara-164_fti9zt.jpg',
	'https://res.cloudinary.com/dgisuffs0/image/upload/q_auto/v1683544556/bundutrek-safaris/_MG_1557_mqx5jl.jpg',
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
