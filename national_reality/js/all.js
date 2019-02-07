jQuery(document).ready(function($){	
$('.slider_inner').owlCarousel({
		loop: true,
		nav: true,
		dots: true,
		items : 1,
		autoplay:false,
		margin: 0,
		navText: [ '', '' ],
		navigation : true,
		//animateOut: 'fadeOut',
		singleItem : true,   
		slideSpeed : 1000,   
		smartSpeed: 1000, 
		rtl:false,		
	});	
	
	
    $(".expand-menu").click(function(){
       $('.menu-list').show();
    });
    $('.menu-list').click(function(){
        $('.menu-list').hide();
    });
    $('#close').click(function(){
        $('.menu-list').hide();
    });

	
		
});	