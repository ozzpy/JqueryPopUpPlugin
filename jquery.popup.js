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
