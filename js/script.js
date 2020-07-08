$(function(){

	setTimeout(function(){$('.block__bg-door span').eq(0).animate({right: 50},600)},200)
	$('.block__bg-door span').eq(1).animate({right: -80},600)
	setTimeout(function(){$('.block__decor-bg span').eq(0).animate({left: 310,top:20},600)},600)
	$('.block__decor-bg span').eq(1).animate({left: -205,top:30},1000)

	$('.patina__img').cocoen()

	// function checkOn(num) {
		
	// 	var p = Math.round((num * 100) / parseInt($(".patina__img").width()));
		
	// 	if (p >= 80) {
	// 		$(".patina__switch").addClass("patina__switch_active");
	// 		$(".patina__switch").siblings().removeClass('active')
	// 		$(".patina__switch").next().addClass("active");
	// 	}

	// 	if (p <= 20) {
	// 		$(".patina__switch").removeClass("patina__switch_active");
	// 		$(".patina__switch").siblings().removeClass('active')
	// 		$(".patina__switch").prev().addClass("active");
	// 	}
	// }

	// $('.cocoen-drag').on("mousedown", function () {
	// 	$(".patina__img").on("mousemove", function (e) {
	// 		checkOn(parseInt($(".patina__img > div").css("width")))
	// 	})
	// });


	// $(".patina__img").on("click", function (e) {
	// 	setTimeout(function() {
	// 		checkOn(parseInt($(".patina__img > div").css("width")))
	// 	}, 100)
	// })
	
	// $('.cocoen-drag').on("mouseup", function() {
	// 	console.log("awdwad");
	// 	$(".patina__img").unbind("mousemove");
	// });

	$('.patina__switch').click(function(){
		var t = $(this);
		var img = $('.patina__img').attr('data-img')
		t.toggleClass('patina__switch_active')
		if (t.hasClass('patina__switch_active')) {
			t.siblings().removeClass('active');
			t.next().addClass('active');
			$('.patina__img img').eq(1).attr('src', 'img/patina/' + img + 'z.jpg')
		}
		else {
			t.siblings().removeClass('active');
			t.prev().addClass('active');
			$('.patina__img img').eq(1).attr('src', 'img/patina/' + img + 'zs.jpg')
		}
	})

	$('.patina__item').click(function(){
		var img = $(this).data('img');
		$(this).addClass('patina__item_active').siblings().removeClass('patina__item_active');
		$('.patina__img').attr('data-img', img)
		$('.patina__img img').eq(0).attr('src', 'img/patina/' + img + '.jpg')
		$('.patina__img img').eq(1).attr('src', 'img/patina/' + img + 'zs.jpg')
		if ($('.patina__switch').hasClass('patina__switch_active'))
			$('.patina__img img').eq(1).attr('src', 'img/patina/' + img + 'z.jpg')
		// $('.patina__new-img').css('background-image', 'url(img/patina/' + img + 'z.jpg)')
	})

	$('.frez-more span,.frez-more div').click(function (e) {
		let t = $(this).parent();
		let p = t.prev();
		let h = p[0].scrollHeight;
		let d = h - parseInt(p.css("padding-bottom")) + 30;
		let ih = p.find('> div').outerHeight(true);
		let ihf = ih * 2.3;
		t.toggleClass('active');
		if (t.hasClass('active')) {
			p.animate({height: d, paddingBottom: 0}, d)
		// t.fadeOut();
		}
		else {
			p.animate({height: ihf}, d);
		}

	})

	$('.sch-toggle span').click(function(){
		$(this).toggleClass('active')
		$(this).parent().next().slideToggle();
	})

	$('[data-anchor]').click(function(){
		let tag = $('[data-anc="'+$(this).data('anchor')+'"]');
		$('html,body').animate({
			scrollTop: tag.offset().top - 30
		}, 'slow');
	})

	var bLazy = new Blazy();

	$('.p-photo').slick({
		arrows: false,
		dots: false,
		vertical: true,
		verticalSwiping: true,
		adaptiveHeight: true,
	});

	$('.p-photo').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		$('.b-ph-print-btn').siblings().removeClass('active');
		$('.b-ph-print-btn').eq(nextSlide).addClass('active')
	});
	$('.b-ph-print-btn').click(function(){
		$('.p-photo').slick('slickGoTo', $(this).index())
	})

	$('.shelf__title').mouseover(function(){
		$(this).prevAll('.shelf__cover').addClass('hover');
	}).mouseleave(function(){
		$(this).prevAll('.shelf__cover').removeClass('hover');
	})

	AOS.init({
		duration: 600
	});

})