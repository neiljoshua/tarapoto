$( document ).ready( function(){
	
	$('.mobilemenu').on('click', function(e){
		e.preventDefault();
  		if ( $('footer li').hasClass('active') ) {
   			 $('footer li').removeClass('active');
  		}else{
 			 $('footer li').addClass('active');
  		}
	});

} ); //End of Document Ready.