import '../sass/styles.scss';

var Dropkick = require('dropkickjs');

$( document ).ready( function(){

  var selectList = $('.default').dropkick({
    theme: 'dk-tarapoto',
    mobile: 'true'
  });

  if ($('.preloader-wrapper').length > 0 && ($('body').hasClass('home'))) {
    $('.preloader-wrapper').delay(6500).fadeOut('slow');
  }

  $('.row__image').each(function() {
      var link = $(this).find("img").attr("src");
      $(this).css("background-image", "url(" + link + ")");
  });

  $('.hamburger').on('click', function(e) {
    e.preventDefault();
    var burger = $(this),
        menu = $('.menu');

    if( $('.hamburger').hasClass('is-active') ) {
      $('.hamburger').removeClass('is-active');
      $('.menu').removeClass('active');
    } else {
      $('.hamburger').addClass('is-active');
      $('.menu').addClass('active');
    }
  });

  $('.submit').on('click', function(e) {
    e.preventDefault();

    $('.default').dropkick({
      reset: 'true'
    });
    $( '#inquiry' ).each(function(){
      this.reset();
    });
    $('.success').show().delay(1500).fadeOut();
  });

  $('.success a').on('click', function(e) {
    e.preventDefault();
    $('.success').hide();
  });

  $(window).scroll( function() {
    var historyImages = $('.row__image'),
        historyCopies = $('.row__copy'),
        wrapper = $(window);

    isElementInView(historyImages,'visible');
    isElementInView(historyCopies,'visible');
    if ( !$('body').hasClass('home') ) {
      if (wrapper.width() > 980) {
        toggleFixedClass(wrapper);
      }
      if($(window).scrollTop() + $(window).height() == $(document).height()) {
        $('.menu').addClass('menu__fixed');
      }
    }
  });

  $(window).resize(removeClassesOnResize);

  function toggleFixedClass(window) {
    var iScrollPos = 0,
        iCurScrollPos = $(this).scrollTop();

    if ( (iCurScrollPos > iScrollPos)   ) {
      $('.menu').removeClass('menu__fixed');
    } else {
      $('.menu').addClass('menu__fixed');
    }
    iScrollPos = iCurScrollPos;
  }

  function isElementInView(el,className) {

    $(el).each( function(i){
      var top_of_object = $(this).offset().top,
          bottom_of_window = $(window).scrollTop() + $(window).height();
      if( bottom_of_window > top_of_object ){
        $(this).addClass(className);
      } else if (top_of_object > bottom_of_window) {
        $(this).removeClass(className);
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
