/*!
 * Simple Water Mark [VERSION]
 * [DATE]
 * Corey Hart @ http://www.codenothing.com
 */
(function( $, window ){

	// Check for HTML5 capabilities
	var placeholder = ( 'placeholder' in document.createElement('input') );

	// @mainCSS: Default CSS class used if no metadata found
	$.fn.simpleWaterMark = function( mainCSS ){
		return this.each(function(){
			var $obj = $( this ),
				inplace = $obj.attr('placeholder'),
				title = this.title,
				useinplace = ( inplace && inplace !== '' ),
				css = $.metadata && $obj.metadata().watermark ? $obj.data( $.metadata.defaults.single ).watermark : mainCSS;

			// If browser is HTML5 compatible, use native placeholder
			if ( placeholder && $.fn.simpleWaterMark.force === false ) {
				if ( ! useinplace ) {
					$obj.attr( 'placeholder', title );
				}
				return;
			} 
			else if ( useinplace ) {
				title = inplace;
			}

			// Add watermark to begin with
			if ( $obj.val() == '' && title && title !== '') {
				$obj.addClass( css ).val( title );
			}

			$obj.bind({
				'focus.simple-watermark': function(){
					console.log('focused');
					$obj.removeClass( css ).val('');
				},

				'blur.simple-watermark': function(){
					if ( $obj.val() === '' && title && title !== '' ) {
						$obj.addClass( css ).val( title );
					}
				}
			})
			.closest('form').bind( 'submit.simple-watermark', function(){
				if ( $obj.hasClass( css ) ) {
					$obj.val('');
				}
			});

			// Clear fields on page unload
			$( window ).bind( 'unload.simple-watermark', function(){
				$obj.removeClass( css ).val('');
			});
		});
	};


	// Force the browser to use simpleWaterMark instead of placeholder (when applicable)
	$.fn.simpleWaterMark.force = false;

})( jQuery, window );
