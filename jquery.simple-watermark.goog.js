/*!
 * Simple Water Mark [VERSION]
 * [DATE]
 * Corey Hart @ http://www.codenothing.com
 */
(function(d,g){var h=!!("placeholder"in document.createElement("input"));d.fn.simpleWaterMark=function(i){return this.each(function(){var a=d(this),e=a.attr("placeholder"),b=this.title,f=!!((!e||e==="")&&b&&b!==""),c=d.metadata&&a.metadata().watermark?a.data(d.metadata.defaults.single).watermark:i;if(h)f&&a.attr("placeholder",b);else{if(f)b=e;a.val()==""&&b&&b!=""&&a.addClass(c).val(b);a.bind("focus.simple-watermark",function(){a.hasClass(c)&&a.removeClass(c).val("")}).bind("blur.simple-watermark",
function(){a.val()==""&&b&&b!=""&&a.addClass(c).val(b)}).parents("form").eq(0).bind("submit.simple-watermark",function(){a.hasClass(c)&&a.val("")});d(g).bind("unload.simple-watermark",function(){a.hasClass(c)&&a.removeClass(c).val("")})}})}})(jQuery,window);
