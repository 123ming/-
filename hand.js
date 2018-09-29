
var Hand = (function(window,document){
	var Hand = function(){
		 
		Hand.prototype.bindEvent = function(callback,callback1,callback2,callback3){
			var that = this
			
			document.addEventListener('gest', function(gesture) {
				
			that.getDirect(gesture,callback,callback1,callback2,callback3)
			
		})
			gest.start();
			gest.options.sensitivity(80);
			}
			Hand.prototype.getDirect = function(gesture,callback,callback1,callback2,callback3){
		
			if (gesture.up) {
                   callback()
                } else if (gesture.down) {
                  callback1()
                } else if (gesture.left) {
                	callback2()
                } else if(gesture.right){
                callback3()
                }
		}
		
		
		
	}
	return Hand
})(window,document)
