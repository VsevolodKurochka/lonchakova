jQuery(document).ready(function($){

	function scroll(scrollLink, speed){
		$('html, body').animate({
			scrollTop: scrollLink.offset().top
		}, speed);
		return false;
	}
	$('.anchor').click(function(e){
		e.preventDefault();
		scroll($( $(this).attr('href') ), 1500);
	});

	$("#home-last-reviews").owlCarousel({
		loop: true,
		margin: 15,
		nav: false,
		items: 1,
		dots: true,
		autoplay: false,
		autoplayTimeout: 3000,
		autoHeight: true,
		responsive: {
			768: {
				items: 2,
				autoHeight: false,
				dots: true,
			}
		}
	});

	//if($(window).width() < 768){
		$('.home-reviews__content').addClass('owl-carousel');
		$('.home-reviews__content').owlCarousel({
			loop: true,
			margin: 0,
			nav: false,
			items: 1,
			dots: true,
			autoplay: false,
			autoplayTimeout: 3000,
			autoHeight: true
		});
	//}

	// Tabs
		$('[data-action="tab"]').click(function(){			
			// Tab links toggle class
				$(this).closest(".tabs__list").children("li").removeClass('active');
				$(this).parent().addClass('active');
			// Show tab content
				var tabTarget = $(this).attr('data-target');
				$(tabTarget).fadeIn(0);
				$(".tabs__content > div").not($(tabTarget)).fadeOut(0);
		});

	$('[data-type]').click(function(){
		var text = $(this).attr('data-type');
		var open = $(this).attr('data-open');
		$(open).find('form input[name="your-type"]').val(text);
	});

	$('[data-title]').click(function(){
		var text = $(this).attr('data-title');
		var open = $(this).attr('data-open');
		$(open).find('.modal__title').text(text);
	});


	// Appear modal
	if ($('#modal-form-appear').length > 0) {
		if(Cookies.get('modal-form-appear') == null){
			Cookies.set('modal-form-appear', '1', { expires: 2 });
		}
		$('.modal__footer-close').click(function () {
			Cookies.set('modal-form-appear', '0', { expires: 2 });
			$('#modal-form-appear').removeClass('modal_showing_in');
			$('body').removeClass('modal-open');
		});

		if (Cookies.get('modal-form-appear') == '1') {
			var allowShow = 0;
			setInterval(function () {
				if ($('.modal.modal_showing_in').length == 0) {
					allowShow = 1;
				} else {
					allowShow = 0;
				}
			}, 500);
			setTimeout(function () {
				if (allowShow) {
					$('#modal-form-appear').addClass('modal_showing_in');
					$('body').addClass('modal-open');
				}
			}, 10000);
		}
	}
});	