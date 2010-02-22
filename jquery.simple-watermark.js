/**
 * Simple Water Mark
 * July 18, 2009
 * Corey Hart @ http://www.codenothing.com
 */
/**
 * @mainCSS: Default CSS class used if no metadata found
 */ 
;(function($){
	$.fn.simpleWaterMark = function(mainCSS){
		if (!mainCSS) mainCSS = 'non-404';
		return this.each(function(){
			var $obj = $(this), title = this.title, css = $.metadata && $obj.metadata().watermark ? $obj.metadata().watermark : mainCSS;

			// Add watermark to begin with
			if ($obj.val() == '' && title && title != '') 
				$obj.addClass(css).val(title);

			// Run operations
			$obj.focus(function(){
				if ($obj.hasClass(css))
					$obj.removeClass(css).val('');
			}).blur(function(){
				if ($obj.val() == '' && title && title != '')
					$obj.addClass(css).val(title);
			}).parents('form').eq(0).submit(function(){
				if ($obj.hasClass(css))
					$obj.val('');
			});

			// Clear fields on page unload
			$(window).unload(function(){
				if ($obj.hasClass(css))
					$obj.removeClass(css).val('');
			});
		});
	};
})(jQuery);
