$( document ).ready( function(){
	var lastScrollTop = 0;
	var iScrollPos = 0;
	var $window = $(window);

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
		$('.success').show().delay(3800).fadeOut();
	});

	$('.success a').on('click', function(e){
		e.preventDefault();
		$('.success').hide();
	})

	var toggleFixedClass = function($window) {

		var iCurScrollPos = $(this).scrollTop();
    if ( (iCurScrollPos > iScrollPos)   ) {
       $('.menu').removeClass('menu__fixed');
    } else {
       $('.menu').addClass('menu__fixed');
    }
    iScrollPos = iCurScrollPos;
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
		var $historyImages = $('.row-image');
		var $historyCopies = $('.row-copy');
		isElementInView($historyImages,'is-Visible');
		isElementInView($historyCopies,'is-Visible');
		if ( !$('body').hasClass('home') ) {
			if ($window.width() > 980) {
				toggleFixedClass($window);
			}
			if($(window).scrollTop() + $(window).height() == $(document).height()) {
       $('.menu').addClass('menu__fixed');
   		}
		}
	});

} ); //End of Document Ready.
