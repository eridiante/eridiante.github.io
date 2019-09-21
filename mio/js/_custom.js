document.addEventListener("DOMContentLoaded", function() {

	// Custom JS
	$('.reviews__slide').slick({
		infinite: true,
		slidesToShow: 3,
		edgeFriction: 0.05,
		slidesToScroll: 3
	});
	$('.meeting__slider').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
		]
	});
});
