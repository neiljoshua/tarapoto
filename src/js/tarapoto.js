$( document ).ready( function(){

	$('.default').dropkick({
        theme: 'dk-tarapoto',
        mobile: 'true',
        change: function (value, label) {
          $(this).dropkick('theme', value);
        }
      });

	$('.c-hamburger').on('click', function(e){
		e.preventDefault();
  		$(this).toggleClass('is-active');
  		$('.menu').toggleClass('active');
	});

} ); //End of Document Ready.
