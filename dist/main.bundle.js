/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","dropkickjs","jquery"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/styles.scss */ \"./src/sass/styles.scss\");\n/* harmony import */ var _sass_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Dropkick = __webpack_require__(/*! dropkickjs */ \"./node_modules/dropkickjs/dist/dropkick.js\");\n\n$(document).ready(function () {\n  var selectList = $('.default').dropkick({\n    theme: 'dk-tarapoto',\n    mobile: 'true'\n  });\n\n  if ($('.preloader-wrapper').length > 0 && $('body').hasClass('home')) {\n    $('.preloader-wrapper').delay(6500).fadeOut('slow');\n  }\n\n  $('.row__image').each(function () {\n    var link = $(this).find(\"img\").attr(\"src\");\n    $(this).css(\"background-image\", \"url(\" + link + \")\");\n  });\n  $('.hamburger').on('click', function (e) {\n    e.preventDefault();\n    var burger = $(this),\n        menu = $('.menu');\n\n    if ($('.hamburger').hasClass('is-active')) {\n      $('.hamburger').removeClass('is-active');\n      $('.menu').removeClass('active');\n    } else {\n      $('.hamburger').addClass('is-active');\n      $('.menu').addClass('active');\n    }\n  });\n  $('.submit').on('click', function (e) {\n    e.preventDefault();\n    $('.default').dropkick({\n      reset: 'true'\n    });\n    $('#inquiry').each(function () {\n      this.reset();\n    });\n    $('.success').show().delay(1500).fadeOut();\n  });\n  $('.success a').on('click', function (e) {\n    e.preventDefault();\n    $('.success').hide();\n  });\n  $(window).scroll(function () {\n    var historyImages = $('.row__image'),\n        historyCopies = $('.row__copy'),\n        wrapper = $(window);\n    isElementInView(historyImages, 'visible');\n    isElementInView(historyCopies, 'visible');\n\n    if (!$('body').hasClass('home')) {\n      if (wrapper.width() > 980) {\n        toggleFixedClass(wrapper);\n      }\n\n      if ($(window).scrollTop() + $(window).height() == $(document).height()) {\n        $('.menu').addClass('menu__fixed');\n      }\n    }\n  });\n  $(window).resize(removeClassesOnResize);\n\n  function toggleFixedClass(window) {\n    var iScrollPos = 0,\n        iCurScrollPos = $(this).scrollTop();\n\n    if (iCurScrollPos > iScrollPos) {\n      $('.menu').removeClass('menu__fixed');\n    } else {\n      $('.menu').addClass('menu__fixed');\n    }\n\n    iScrollPos = iCurScrollPos;\n  }\n\n  function isElementInView(el, className) {\n    $(el).each(function (i) {\n      var top_of_object = $(this).offset().top,\n          bottom_of_window = $(window).scrollTop() + $(window).height();\n\n      if (bottom_of_window > top_of_object) {\n        $(this).addClass(className);\n      } else if (top_of_object > bottom_of_window) {\n        $(this).removeClass(className);\n      }\n    });\n  }\n\n  function removeClassesOnResize() {\n    var windowWidth = $(window).width();\n\n    if (windowWidth >= 768) {\n      $('.hamburger').removeClass('is-active');\n      $('.menu').removeClass('active');\n    }\n  }\n\n  removeClassesOnResize();\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\")))\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJuYW1lcyI6WyJEcm9wa2ljayIsInJlcXVpcmUiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInNlbGVjdExpc3QiLCJkcm9wa2ljayIsInRoZW1lIiwibW9iaWxlIiwibGVuZ3RoIiwiaGFzQ2xhc3MiLCJkZWxheSIsImZhZGVPdXQiLCJlYWNoIiwibGluayIsImZpbmQiLCJhdHRyIiwiY3NzIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJidXJnZXIiLCJtZW51IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInJlc2V0Iiwic2hvdyIsImhpZGUiLCJ3aW5kb3ciLCJzY3JvbGwiLCJoaXN0b3J5SW1hZ2VzIiwiaGlzdG9yeUNvcGllcyIsIndyYXBwZXIiLCJpc0VsZW1lbnRJblZpZXciLCJ3aWR0aCIsInRvZ2dsZUZpeGVkQ2xhc3MiLCJzY3JvbGxUb3AiLCJoZWlnaHQiLCJyZXNpemUiLCJyZW1vdmVDbGFzc2VzT25SZXNpemUiLCJpU2Nyb2xsUG9zIiwiaUN1clNjcm9sbFBvcyIsImVsIiwiY2xhc3NOYW1lIiwiaSIsInRvcF9vZl9vYmplY3QiLCJvZmZzZXQiLCJ0b3AiLCJib3R0b21fb2Zfd2luZG93Iiwid2luZG93V2lkdGgiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBLElBQUlBLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQyw4REFBRCxDQUF0Qjs7QUFFQUMsQ0FBQyxDQUFFQyxRQUFGLENBQUQsQ0FBY0MsS0FBZCxDQUFxQixZQUFVO0FBRTdCLE1BQUlDLFVBQVUsR0FBR0gsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjSSxRQUFkLENBQXVCO0FBQ3RDQyxTQUFLLEVBQUUsYUFEK0I7QUFFdENDLFVBQU0sRUFBRTtBQUY4QixHQUF2QixDQUFqQjs7QUFLQSxNQUFJTixDQUFDLENBQUMsb0JBQUQsQ0FBRCxDQUF3Qk8sTUFBeEIsR0FBaUMsQ0FBakMsSUFBdUNQ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UXNCLFFBQVIsQ0FBaUJtQixTQUFqQjtBQUNELE9BRkQsTUFFTyxJQUFJRSxhQUFhLEdBQUdHLGdCQUFwQixFQUFzQztBQUMzQzlDLFNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFCLFdBQVIsQ0FBb0JvQixTQUFwQjtBQUNEO0FBQ0YsS0FSRDtBQVNEOztBQUVELFdBQVNKLHFCQUFULEdBQWlDO0FBQy9CLFFBQUlVLFdBQVcsR0FBRy9DLENBQUMsQ0FBQzBCLE1BQUQsQ0FBRCxDQUFVTSxLQUFWLEVBQWxCOztBQUVBLFFBQUllLFdBQVcsSUFBSSxHQUFuQixFQUF5QjtBQUN2Qi9DLE9BQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JxQixXQUFoQixDQUE0QixXQUE1QjtBQUNBckIsT0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXcUIsV0FBWCxDQUF1QixRQUF2QjtBQUNEO0FBQ0Y7O0FBRURnQix1QkFBcUI7QUFFdEIsQ0F0R0QsRSIsImZpbGUiOiIuL3NyYy9qcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc2Fzcy9zdHlsZXMuc2Nzcyc7XG5cbnZhciBEcm9wa2ljayA9IHJlcXVpcmUoJ2Ryb3BraWNranMnKTtcblxuJCggZG9jdW1lbnQgKS5yZWFkeSggZnVuY3Rpb24oKXtcblxuICB2YXIgc2VsZWN0TGlzdCA9ICQoJy5kZWZhdWx0JykuZHJvcGtpY2soe1xuICAgIHRoZW1lOiAnZGstdGFyYXBvdG8nLFxuICAgIG1vYmlsZTogJ3RydWUnXG4gIH0pO1xuXG4gIGlmICgkKCcucHJlbG9hZGVyLXdyYXBwZXInKS5sZW5ndGggPiAwICYmICgkKCdib2R5JykuaGFzQ2xhc3MoJ2hvbWUnKSkpIHtcbiAgICAkKCcucHJlbG9hZGVyLXdyYXBwZXInKS5kZWxheSg2NTAwKS5mYWRlT3V0KCdzbG93Jyk7XG4gIH1cblxuICAkKCcucm93X19pbWFnZScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbGluayA9ICQodGhpcykuZmluZChcImltZ1wiKS5hdHRyKFwic3JjXCIpO1xuICAgICAgJCh0aGlzKS5jc3MoXCJiYWNrZ3JvdW5kLWltYWdlXCIsIFwidXJsKFwiICsgbGluayArIFwiKVwiKTtcbiAgfSk7XG5cbiAgJCgnLmhhbWJ1cmdlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIGJ1cmdlciA9ICQodGhpcyksXG4gICAgICAgIG1lbnUgPSAkKCcubWVudScpO1xuXG4gICAgaWYoICQoJy5oYW1idXJnZXInKS5oYXNDbGFzcygnaXMtYWN0aXZlJykgKSB7XG4gICAgICAkKCcuaGFtYnVyZ2VyJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgJCgnLm1lbnUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5oYW1idXJnZXInKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAkKCcubWVudScpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9XG4gIH0pO1xuXG4gICQoJy5zdWJtaXQnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgJCgnLmRlZmF1bHQnKS5kcm9wa2ljayh7XG4gICAgICByZXNldDogJ3RydWUnXG4gICAgfSk7XG4gICAgJCggJyNpbnF1aXJ5JyApLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9KTtcbiAgICAkKCcuc3VjY2VzcycpLnNob3coKS5kZWxheSgxNTAwKS5mYWRlT3V0KCk7XG4gIH0pO1xuXG4gICQoJy5zdWNjZXNzIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQoJy5zdWNjZXNzJykuaGlkZSgpO1xuICB9KTtcblxuICAkKHdpbmRvdykuc2Nyb2xsKCBmdW5jdGlvbigpIHtcbiAgICB2YXIgaGlzdG9yeUltYWdlcyA9ICQoJy5yb3dfX2ltYWdlJyksXG4gICAgICAgIGhpc3RvcnlDb3BpZXMgPSAkKCcucm93X19jb3B5JyksXG4gICAgICAgIHdyYXBwZXIgPSAkKHdpbmRvdyk7XG5cbiAgICBpc0VsZW1lbnRJblZpZXcoaGlzdG9yeUltYWdlcywndmlzaWJsZScpO1xuICAgIGlzRWxlbWVudEluVmlldyhoaXN0b3J5Q29waWVzLCd2aXNpYmxlJyk7XG4gICAgaWYgKCAhJCgnYm9keScpLmhhc0NsYXNzKCdob21lJykgKSB7XG4gICAgICBpZiAod3JhcHBlci53aWR0aCgpID4gOTgwKSB7XG4gICAgICAgIHRvZ2dsZUZpeGVkQ2xhc3Mod3JhcHBlcik7XG4gICAgICB9XG4gICAgICBpZigkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAkKHdpbmRvdykuaGVpZ2h0KCkgPT0gJChkb2N1bWVudCkuaGVpZ2h0KCkpIHtcbiAgICAgICAgJCgnLm1lbnUnKS5hZGRDbGFzcygnbWVudV9fZml4ZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gICQod2luZG93KS5yZXNpemUocmVtb3ZlQ2xhc3Nlc09uUmVzaXplKTtcblxuICBmdW5jdGlvbiB0b2dnbGVGaXhlZENsYXNzKHdpbmRvdykge1xuICAgIHZhciBpU2Nyb2xsUG9zID0gMCxcbiAgICAgICAgaUN1clNjcm9sbFBvcyA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XG5cbiAgICBpZiAoIChpQ3VyU2Nyb2xsUG9zID4gaVNjcm9sbFBvcykgICApIHtcbiAgICAgICQoJy5tZW51JykucmVtb3ZlQ2xhc3MoJ21lbnVfX2ZpeGVkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5tZW51JykuYWRkQ2xhc3MoJ21lbnVfX2ZpeGVkJyk7XG4gICAgfVxuICAgIGlTY3JvbGxQb3MgPSBpQ3VyU2Nyb2xsUG9zO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNFbGVtZW50SW5WaWV3KGVsLGNsYXNzTmFtZSkge1xuXG4gICAgJChlbCkuZWFjaCggZnVuY3Rpb24oaSl7XG4gICAgICB2YXIgdG9wX29mX29iamVjdCA9ICQodGhpcykub2Zmc2V0KCkudG9wLFxuICAgICAgICAgIGJvdHRvbV9vZl93aW5kb3cgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gICAgICBpZiggYm90dG9tX29mX3dpbmRvdyA+IHRvcF9vZl9vYmplY3QgKXtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhjbGFzc05hbWUpO1xuICAgICAgfSBlbHNlIGlmICh0b3Bfb2Zfb2JqZWN0ID4gYm90dG9tX29mX3dpbmRvdykge1xuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVDbGFzc2VzT25SZXNpemUoKSB7XG4gICAgdmFyIHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICBpZiggd2luZG93V2lkdGggPj0gNzY4ICkge1xuICAgICAgJCgnLmhhbWJ1cmdlcicpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICQoJy5tZW51JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUNsYXNzZXNPblJlc2l6ZSgpO1xuXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ }),

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9zdHlsZXMuc2Nzcz8xN2FhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vc3JjL3Nhc3Mvc3R5bGVzLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/sass/styles.scss\n");

/***/ })

/******/ });