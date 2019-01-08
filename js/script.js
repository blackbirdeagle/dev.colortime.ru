$('.show__menu').click(function(){
	$('.top-menu_wrapper').animate({left: 0}, 300);
});

$('.hide__menu').click(function(){
	$('.top-menu_wrapper').animate({left: -270}, 300);
});

$('[popup-target]').click(function(e) {
	var el = $(this);
	var target = el.attr('popup-target');

	$('.overlay').fadeIn(200, function(){
		$('.popup.'+target).fadeIn(200);
		var top = document.documentElement.clientHeight / 2 - $('.popup.'+target).height() / 2 + $(window).scrollTop();
		var left = $('body').width() / 2 - $('.popup.'+target).width() / 2;
		left = left - 38;
		$('.popup.'+target).css('top', top).css('left', left);
	})
	
	
	return false;
});

$('.overlay, .close1').click(function(e) {
	var popup = $('.popup:visible');
	popup.fadeOut(200, function(){
		$('.overlay').fadeOut(200);
	});
	return false;
});

function keyExit(e){
	if(e.keyCode == 27){

		var popup = $('.popup:visible');
		popup.fadeOut(200, function(){
			$('.overlay').fadeOut(200);
		});				
			
	}
}

addEventListener("keydown", keyExit);

$('.fancybox').fancybox();

$('.jobName').click(function(){
	var vac = $(this).attr('vac');
	
	$('.vac_desc').hide();
	$('.jobName img').hide();
	
	$(this).children('img').show();
	$('#' + vac).fadeIn(100);
	
});

jQuery(function(){
	jQuery(".phone").mask("+7(999) 999-9999");
});

$('.popupbox__video').fancybox({
        openEffect  : 'none',
        closeEffect : 'none',
        helpers : {
            media : {}
        }	
});

$('.carousel').carousel({interval: false});

$(".left").click(function(){
	$("#carousel-example-generic").carousel('prev');
});

$(".right").click(function(){
	$("#carousel-example-generic").carousel('next');
});

$('.slider__posts__menu ul li').click(function(){
	var item = $(this).attr('item');
	
	$('.slider__posts__menu ul li').removeClass('active');
	$(this).addClass('active');
	$('.slides__item').removeClass('active');
	
	$('#' + item).addClass('active');
});