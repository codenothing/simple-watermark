/*!
 * Simple Water Mark [VERSION]
 * [DATE]
 * Corey Hart @ http://www.codenothing.com
 */
(function($, window){
	// Check for HTML5 capabilities
	var placeholder = !!('placeholder' in document.createElement('input'));

	// Plugin Space
	// @mainCSS: Default CSS class used if no metadata found
	$.fn.simpleWaterMark = function(mainCSS){
		return this.each(function(){
			var $obj = $(this),
				inplace = $obj.attr('placeholder'),
				title = this.title,
				useinplace = !!((!inplace || inplace === '') && (title && title !== '')),
				css = $.metadata && $obj.metadata().watermark ? $obj.data($.metadata.defaults.single).watermark : mainCSS;

			// If browser is HTML5 compatible, use native placeholder
			if (placeholder){
				if (useinplace)
					$obj.attr('placeholder', title);
				return;
			} 
			else if (useinplace)
				title = inplace;

			// Add watermark to begin with
			if ($obj.val() == '' && title && title != '') 
				$obj.addClass(css).val(title);

			// Run operations
			$obj.bind('focus.simple-watermark', function(){
				if ( $obj.hasClass(css) )
					$obj.removeClass(css).val('');
			})
			.bind('blur.simple-watermark', function(){
				if ( $obj.val() == '' && title && title != '' )
					$obj.addClass(css).val(title);
			})
			.parents('form').eq(0).bind('submit.simple-watermark', function(){
				if ( $obj.hasClass(css) )
					$obj.val('');
			});

			// Clear fields on page unload
			$(window).bind('unload.simple-watermark', function(){
				if ( $obj.hasClass(css) )
					$obj.removeClass(css).val('');
			});
		});
	};
})(jQuery, window);
