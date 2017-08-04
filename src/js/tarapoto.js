$( document ).ready( function(){

	$('.default').dropkick({
        monbile: 'true',
  });

	$('.c-hamburger').on('click', function(e){
		e.preventDefault();
  		$(this).toggleClass('is-active');
  		$('.menu').toggleClass('active');
	});

} ); //End of Document Ready.
