(function(window) {
button_24 = function() {
	this.initialize();
}
button_24._SpriteSheet = new SpriteSheet({images: ["playButton.png"], frames: [[0,0,114,43,0,56.25,20.95],[114,0,114,43,0,56.25,20.95],[228,0,114,43,0,56.25,20.95],[342,0,114,43,0,56.25,20.95]]});
var button_24_p = button_24.prototype = new BitmapAnimation();
button_24_p.BitmapAnimation_initialize = button_24_p.initialize;
button_24_p.initialize = function() {
	this.BitmapAnimation_initialize(button_24._SpriteSheet);
	this.paused = false;
}
window.button_24 = button_24;
}(window));

