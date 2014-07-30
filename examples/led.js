var Cylon = require('cylon');

// Initialize the robot
Cylon.robot({
  connection: { name: 'rapiro', adaptor: 'rapiro', port: '/dev/ttyUSB0' },
  device: {name: 'rapiro', driver: 'rapiro'},

  work: function(my) {
  	var on = false;
    every((1).second(), function() {
    	if (on == true) {
    		console.log('on');
    		my.rapiro.led(255, 0, 0);
    		on = false;
    	} else {
    		console.log('off');
    		my.rapiro.led(0, 0, 0);
    		on = true;
    	}
    });
  }
}).start();
