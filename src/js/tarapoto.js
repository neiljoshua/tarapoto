$( document ).ready( function(){

	$('.default').dropkick({
        theme: 'dk-tarapoto',
        mobile: 'true',
        change: function (value, label) {
          $(this).dropkick('theme', value);
        }
   });

	$('.hamburger').on('click', function(e){
		e.preventDefault();
  		$(this).toggleClass('is-active');
  		$('.menu').toggleClass('active');
	});

	$('.submit').on('click', function(e){
		e.preventDefault();
		$( '#inquiry' ).each(function(){
		    this.reset();
		});
		$('.success').show().delay(4000).fadeOut();
	});

} ); //End of Document Ready.
