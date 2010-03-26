/*
 * Simple Water Mark [VERSION]
 * [DATE]
 * Corey Hart @ http://www.codenothing.com
 */
(function(c,g){var h="placeholder"in document.createElement("input");c.fn.simpleWaterMark=function(i){return this.each(function(){var a=c(this),e=a.attr("placeholder"),b=this.title,f=e&&e!=="",d=c.metadata&&a.metadata().watermark?a.data(c.metadata.defaults.single).watermark:i;if(h&&c.fn.simpleWaterMark.force===false)f||a.attr("placeholder",b);else{if(f)b=e;a.val()==""&&b&&b!==""&&a.addClass(d).val(b);a.bind({"focus.simple-watermark":function(){console.log("focused");a.removeClass(d).val("")},"blur.simple-watermark":function(){a.val()===
""&&b&&b!==""&&a.addClass(d).val(b)}}).closest("form").bind("submit.simple-watermark",function(){a.hasClass(d)&&a.val("")});c(g).bind("unload.simple-watermark",function(){a.removeClass(d).val("")})}})};c.fn.simpleWaterMark.force=false})(jQuery,window);
