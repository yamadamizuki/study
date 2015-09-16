(function($){
	$.fn.yamada = function(options){
		var settings = $.extend({},{open:false},options);
		return this.each(function(num,cla){
			var dts = $(cla).children('dt');
			console.log(dts);
			dts.click(onClick);
			dts.each(reset);
			if(settings.open) $(this).children('dt:first-child').next().show;
		});

		function onClick() {
			$(this).siblings('dt').each(hide);
			$(this).next().slideDown('fast');
			return false;
		}
		function hide() {
			$(this).next().slideUp('fast');
		}
		function reset(){
			$(this).next().hide();
		}
	}
})(jQuery);