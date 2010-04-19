/*
 * Simple Watermark [VERSION]
 * [DATE]
 * Corey Hart @ http://www.codenothing.com
 */
(function(b,h){var i={input:"placeholder"in document.createElement("input"),textarea:"placeholder"in document.createElement("textarea")};b.fn.simpleWaterMark=function(j){return this.each(function(){var c=this,a=b(c),d=c.getAttribute("title"),f=c.getAttribute("placeholder"),g=!!(f&&f!==""),e=b.metadata?a.metadata().watermark:j;if(b.data(c,"simple-watermark")!==true){b.data(c,"simple-watermark",true);b.fn.simpleWaterMark.removeTitle===true&&c.removeAttribute("title");if(b.fn.simpleWaterMark.HTML5===
true&&i[c.nodeName.toLowerCase()]){if(!g)c.placeholder=d}else{if(g)d=f;a.val()===""&&d&&d!==""&&a.addClass(e).val(d);a.bind({"focus.simple-watermark":function(){a.hasClass(e)&&a.removeClass(e).val("")},"blur.simple-watermark":function(){a.val()===""&&d&&d!==""&&a.addClass(e).val(d)}}).closest("form").bind("submit.simple-watermark",function(){a.hasClass(e)&&a.val("")});b(h).bind("unload.simple-watermark",function(){a.val("")})}}})};b.fn.simpleWaterMark.HTML5=true;b.fn.simpleWaterMark.removeTitle=true})(jQuery,
window);
