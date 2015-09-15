(function($){
	$.fn.yamada = function(options){
		var settings = $.extention({},{open:false},options);
		return this.each(function(){
			var dts = (this).children('dt');
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