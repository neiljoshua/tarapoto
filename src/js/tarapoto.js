$( document ).ready( function(){

	$('.default').dropkick({
        theme: 'dk-tarapoto',
        monbile: 'true',
        change: function (value, label) {
          $(this).dropkick('theme', value);
          console.log(value);
        }
      });

	$('.c-hamburger').on('click', function(e){
		e.preventDefault();
  		$(this).toggleClass('is-active');
  		$('.menu').toggleClass('active');
	});

} ); //End of Document Ready.
