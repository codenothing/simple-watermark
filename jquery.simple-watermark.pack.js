/**
 * Simple Water Mark
 * July 18, 2009
 * Corey Hart @ http://www.codenothing.com
 */
(function(a){a.fn.simpleWaterMark=function(b){if(!b){b="non-404"}return this.each(function(){var e=a(this),d=this.title,c=a.metadata&&e.metadata().watermark?e.metadata().watermark:b;if(e.val()==""&&d&&d!=""){e.addClass(c).val(d)}e.focus(function(){if(e.hasClass(c)){e.removeClass(c).val("")}}).blur(function(){if(e.val()==""&&d&&d!=""){e.addClass(c).val(d)}}).parents("form").eq(0).submit(function(){if(e.hasClass(c)){e.val("")}});a(window).unload(function(){if(e.hasClass(c)){e.removeClass(c).val("")}})})}})(jQuery);
