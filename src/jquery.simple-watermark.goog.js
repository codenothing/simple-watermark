/*
 * Simple Watermark [VERSION]
 * [DATE]
 * Corey Hart @ http://www.codenothing.com
 */
(function(b,h){b.fn.simpleWaterMark=function(i){return this.each(function(){var d=this,a=b(d),c=d.title,f=d.placeholder||"",g=f&&f!=="",e=b.metadata?a.metadata().watermark:i;if(b.fn.simpleWaterMark.removeTitle===true)d.title="";if(b.fn.simpleWaterMark.HTML5===true&&"placeholder"in d){if(!g)d.placeholder=c}else{if(g)c=f;a.val()===""&&c&&c!==""&&a.addClass(e).val(c);a.bind({"focus.simple-watermark":function(){a.hasClass(e)&&a.removeClass(e).val("")},"blur.simple-watermark":function(){a.val()===""&&
c&&c!==""&&a.addClass(e).val(c)}}).closest("form").bind("submit.simple-watermark",function(){a.hasClass(e)&&a.val("")});b(h).bind("unload.simple-watermark",function(){a.val("")})}})};b.fn.simpleWaterMark.HTML5=true;b.fn.simpleWaterMark.removeTitle=true})(jQuery,window);
