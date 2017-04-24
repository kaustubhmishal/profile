$(window).scroll(function(){
	if($('.navbar').offset().top > 50){
		$('.navbar-fixed-top').addClass('top-nav-collapse');
	} else {
		$('.navbar-fixed-top').removeClass('top-nav-collapse');
	}
});



 function scrollNav() {
  $('.navbar-collapse .nav-pad a').click(function(){  
    //Toggle Class
   
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href')).offset().top - 10
    }, 400);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();






$(function() {
    $('.nav-pad a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });
});
