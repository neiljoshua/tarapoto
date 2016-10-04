$( document ).ready( function(){
	
	$('.c-hamburger').on('click', function(e){
		e.preventDefault();
  		$(this).toggleClass('is-active');s
  		$('footer').toggleClass('active');
	});

} ); //End of Document Ready.