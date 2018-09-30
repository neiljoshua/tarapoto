$( document ).ready( function(){
	var lastScrollTop = 0,
			iScrollPos = 0,
			$window = $(window);

	$('.default').dropkick({
      theme: 'dk-tarapoto',
      mobile: 'true',
      change: function (value, label) {
        $(this).dropkick('theme', value);
      }
   });

	$('.hamburger').on('click', function(e){
			e.preventDefault();

			var burger = $(this),
					menu = $('.menu');

			if( $('.hamburger').hasClass('is-active') ) {
				$('.hamburger').removeClass('is-active');
				$('.menu').removeClass('active');
			}	else {
				$('.hamburger').addClass('is-active');
				$('.menu').addClass('active');
			}


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

	$(window).scroll( function(){
		var $historyImages = $('.row-image'),
				$historyCopies = $('.row-copy');

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

	$(window).resize(removeClassesOnResize);

	function toggleFixedClass($window) {

		var iCurScrollPos = $(this).scrollTop();

    if ( (iCurScrollPos > iScrollPos)   ) {
       $('.menu').removeClass('menu__fixed');
    } else {
       $('.menu').addClass('menu__fixed');
    }

    iScrollPos = iCurScrollPos;
	}

	function isElementInView(el,prop) {

		$(el).each( function(i){
        var top_of_object = $(this).offset().top,
        		bottom_of_window = $(window).scrollTop() + $(window).height();

        if( bottom_of_window > top_of_object ){
            $(this).addClass(prop);
        }
    });
	}

	function removeClassesOnResize() {
		var windowWidth = $(window).width();

		if( windowWidth >= 768 ) {
			$('.hamburger').removeClass('is-active');
			$('.menu').removeClass('active');
		}

	}

	removeClassesOnResize();

});
