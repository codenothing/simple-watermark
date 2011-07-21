/*
 * Simple Watermark [VERSION]
 * [DATE]
 * Corey Hart @ http://www.codenothing.com
 */
(function( $, window ){

	// Because IE adds the placeholder attribute to Elements that have it set in the DOM,
	// we need to create a list of possible use elements and store their default placeholder
	// handling
	var placeholder = {
		input: 'placeholder' in document.createElement( 'input' ),
		textarea: 'placeholder' in document.createElement( 'textarea' )
	};

	// @mainCSS: Default CSS class used if no metadata found
	$.fn.simpleWaterMark = function( mainCSS ){
		return this.each(function(){
			var self = this,
				$input = $( self ),
				title = self.getAttribute( 'title' ) || '',
				inplace = self.getAttribute( 'placeholder' ) || '',
				useinplace = !!( inplace && inplace !== '' ),
				css = $.metadata ? $input.metadata().watermark : mainCSS;

			// Prevent watermark initialization on elements that already have it
			if ( $.data( self, 'simple-watermark' ) === true ) {
				return;
			}
			$.data( self, 'simple-watermark', true );

			// Clear out the title first (so html5 capable browser don't have it lingering)
			if ( $.fn.simpleWaterMark.removeTitle === true ) {
				self.removeAttribute( 'title' );
			}

			// If browser is HTML5 compatible, use native placeholder
			if ( $.fn.simpleWaterMark.HTML5 === true && placeholder[ self.nodeName.toLowerCase() ] ) {
				if ( ! useinplace ) {
					self.placeholder = title;
				}
				return;
			} 

			// Use the placeholder attribute, devs can just set that instead of the title attribute
			if ( useinplace ) {
				title = inplace;
			}

			// Add watermark to begin with
			if ( $input.val() === '' && title && title !== '') {
				$input.addClass( css ).val( title );
			}

			$input.bind({
				'focus.simple-watermark': function(){
					if ( $input.hasClass( css ) ) {
						$input.removeClass( css ).val('');
					}
				},

				'blur.simple-watermark': function(){
					if ( $input.val() === '' && title && title !== '' ) {
						$input.addClass( css ).val( title );
					}
				}
			})
			.closest('form').bind( 'submit.simple-watermark', function(){
				if ( $input.hasClass( css ) ) {
					$input.val('');
				}
			});

			// Clear fields on page unload
			$( window ).bind( 'unload.simple-watermark', function(){
				$input.val('');
			});
		});
	};

	// Tell the plugin to use native HTML5 placeholder attribute instead if available
	$.fn.simpleWaterMark.HTML5 = true;

	// Remove the title attribute after events are bound (so it doesn't pop up on hover)
	$.fn.simpleWaterMark.removeTitle = true;

})( jQuery, window );
