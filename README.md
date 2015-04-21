# JqueryPopUpPlugin
Jquery PopUp Plugin

Copy an paste into a new js file like original name: 'jquery.popup.js'


    jQuery.fn.popup = function(options) {
	var defaults = {
		width: screen.width/2,
		height: screen.height/2,
		titlebar: false,
		status: false,
		resizable: true,
		toolbar: false,
		scrollbars: true,
		menubar: false
	};
	var options = jQuery.extend(defaults, options);
	
	Boolean.prototype.setProperty = function() {
		if (this == true) { return "yes"; } else { return "no"; }
	};
	
	jQuery(this).click( function() {
		var target = this.target;
		var href = this.href;
		var posY = (parseInt(screen.height/2)) - (parseInt(options.height/2));
		var posX = (parseInt(screen.width/2)) - (parseInt(options.width/2));
		var win = window.open(href, target, 'titlebar=' + options.titlebar.setProperty() + ', screenX='+ posX +', screenY='+ posY +', left='+ posX +', top='+ posY +', status=' + options.status.setProperty() + ', resizable=' + options.resizable.setProperty() + ', toolbar=' + options.toolbar.setProperty() + ', scrollbars=' + options.scrollbars.setProperty() + ', menubar=' + options.menubar.setProperty() + ', width='+ options.width +', height='+ options.height);
		win.focus();
		return false;
	});
	return this;
    };    
    
 

USAGE:

    <script src="jquery.last.js"></script>

    <script src="jquery.popup.js"></script>
    
    <script>
    jQuery(function(){
     //simple load
     jQuery(".popupLink").popup({ width: 640, height: 480 });
     });
    </script>
    <a class='popupLink' href="https://www.facebook.com/share.php?u=<?php echo URL;?>">Share Facebook</a>

ALSO YOU CAN PASS OPTIONS LIKE THE PLUGIN EXAMPLE OPTIONS   

    <script>
    jQuery(".popupLink").popup({ width: 640, height: 480, resizable: false, menubar: true });
    </script>


The author website dont exist any more. This are the information that comes with the plugin comments 

/*
 * jQuery popup v1 - A jQuery popup plugin.
 * By Jordan Thomas 
 * Licensed under the do whatever you want to license.
 * If you like, keep this message intact so 
 * someone else can find the origin.
*/
