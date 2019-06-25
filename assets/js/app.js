/*!
	📐 APP | JAVASCRIPT

	💾️ Jorge Fco. // D e v.
	www.jorge-frac.com — ©2019

	❤️ We do things of the internet™
*/

(function($){

	Pages = [
		'.js-home'
	];

	APP = {
		init: function(){
			console.log('📐 APP | JAVASCRIPT \n💾️ J org e Fco. // Dev.\nwww.jorge-frac.com — ©2019\n❤️ We do things of the internet™');
			console.log('------------------------------------------');

			//NAVIGATION.init();
			GENERAL.init();

			if($(Pages[0]).length){
				HOME.init();
				console.log('::: HOME :::');
			}
		}
	};

	window.theme = APP;

	window.onload = function() {
		APP.init();
	};

})(jQuery);

//@prepros-prepend modules/*.js
