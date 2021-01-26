$(document).ready(function(){
		// preloader
	$(window).on('load',function(){
		$('#loader-inner').fadeOut(1000);
	});
});



$(function() {

	

	// hamburger
$('.hamburger').on('click',function(){
	$('.hamburger').toggleClass('active');
	$('.mobile_nav').toggleClass('active').removeClass('d-none').addClass('d-flex');	
});

	//	mobile menu
function screenSize(){
	var screenSize = $(window).width();

	if(screenSize > '992') {
		$('nav#scroll_nav').removeClass('mobile_nav');
	}
	else{
		$('nav#scroll_nav').addClass('mobile_nav');

		$('.mobile_nav a').click(function(){
			$('.hamburger').removeClass('active');
			$('.mobile_nav').removeClass('active');
		});
	}	
}		
	//scroll to top
function backToTop(){
	var height = $('#home').height();

	$(window).on('scroll',function() {
		if($(window).scrollTop() > height){
			$('a.back_to_top').addClass('active');
		}
		else{
			$('a.back_to_top').removeClass('active');
		}
	});
}
	
	/*	stick on reload	*/
var height2 = $('header').offset().top;

if(height2 > 65){
	$('header').addClass('stick');
}
else{
	$('header').removeClass('stick');
}

	//	stick on scroll	
$(window).on('scroll',function() {
	if($(window).scrollTop()){
		$('header').addClass('stick');
	}
	else{
		$('header').removeClass('stick');
	}
});

	//	smooth scroll	
smartScroll.init({
    speed: 1300, // default 500
    addActive: true, // default true
    activeClass: "active", // default active
    offset: 70 // default 100
});

	//	brand carousel	
$('.brand_content').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2
        },
        480:{
            items:3
        },
        768:{
            items:4
        },
        1000:{
            items:5
        }
    }
});

	//	testimonial carousel	
$('.testimonial_content').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:3000,
    items: 1,
    nav: true,
    dots: false
});

screenSize();
backToTop();
$(window).resize(screenSize);

});

