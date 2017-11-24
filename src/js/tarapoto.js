$( document ).ready( function(){
	var lastScrollTop = 0;

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

	var toggleFooter = function() {
		var st = $(this).scrollTop();
	   if (st > lastScrollTop){
	       $('.menu').removeClass('menu__fixed');
	   } else {
	      $('.menu').addClass('menu__fixed');
	   }
   lastScrollTop = st;
	}

	var isElementInView = function(el,prop) {
		$(el).each( function(i){
        var top_of_object = $(this).offset().top;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > top_of_object ){
            $(this).addClass(prop);
        }
    });
	}

	$(window).scroll( function(){
		var $historyImages = $('.row__image');
		var $historyCopies = $('.row__copy');
		isElementInView($historyImages,'is_Visible');
		isElementInView($historyCopies,'is_Visible');
		toggleFooter();
	});

} ); //End of Document Ready.
