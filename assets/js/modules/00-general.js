var GENERAL = (function(general) {

	var $img = $('.bg-img');

	general = {
		init: function(){
			general.Images();
			console.log('::: GENERAL :::');
		},
		Images: function(){
			$img.imgLiquid();
		}
	}

	return general;

}(GENERAL || {}));