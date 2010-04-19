[jQuery Simple Watermark](http://www.codenothing.com/archives/jquery/simple-watermark/)
========================

Gives a simple watermark feature for input fields that dissapears on focus, reappears on blur.


HTML5 Placeholder
-----------------
simpleWaterMark defaults to the elements placeholder attribute in HTML5 capable browsers. To force use of the plugin, either
change the HTML5 key to true towards the bottom of the script, or add the following before calling simpleWaterMark:

	jQuery.fn.simpleWaterMark.HTML5 = false;


Removing Title
--------------
This plugin also removes the title attribute by default to prevent the native browser title bar that appears on hover.
To prevent this behavior, either change the removeTitle key to false towards the bottom of the script, or add the following
before calling simpleWaterMark:

	jQuery.fn.simpleWaterMark.removeTitle = false;


Browser Support
--------------

**IE** 6, 7, 8  
**FireFox** 2.0.0.20, 3.0.17, 3.5.7, 3.6  
**Safari** 3.0.4, 3.1.2, 3.2.1, 4.0.5  
**Opera** 9.52, 9.64, 10.01, 10.10  
**Chrome** 5.0  


Credits
--------
[Corey Hart](http://www.codenothing.com) - Creator
