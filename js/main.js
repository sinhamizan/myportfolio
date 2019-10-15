$(document).ready(function(){

	//wow-js-active
	new WOW().init();

	// menu-fixed
	$(window).scroll(function(){

		var top = $(window).scrollTop();
		if (top > 120) {
			$('header').addClass('header-bg');
		}
		else{
			if ($('header').hasClass('header-bg')){
				$('header').removeClass('header-bg');
			}
		} 
	});
	
	// barfilter js
	$('#bar1').barfiller({barColor: "#7CB342",duration: 800});
	$('#bar2').barfiller({barColor: "#7CB342",duration: 800});
	$('#bar3').barfiller({barColor: "#7CB342",duration: 800});
	$('#bar4').barfiller({barColor: "#7CB342",duration: 800});
	$('#bar5').barfiller({barColor: "#7CB342",duration: 800});

	// mixitup
	var mixer = mixitup('.active-portfolio');

	// counterup
	$('.counter').counterUp();

	// one page nav
	$('#menu').onePageNav({
		currentClass: 'active',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing',

	});

	//go to top
	$(window).scroll(function(){
		if($(this).scrollTop() > 100)
		{
			$('#gotopbtn').fadeIn();
		}
		else{
			$('#gotopbtn').fadeOut();
		}
	});
	$('#gotopbtn').click(function(){

		$('html ,body').animate({scrollTop : 0},800);

	});
	
	// slicnav js
	$('#menu').slicknav();




})