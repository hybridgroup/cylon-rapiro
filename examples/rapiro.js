var Cylon = require('cylon');

// Initialize the robot
Cylon.robot({
  connection: { name: 'rapiro', adaptor: 'rapiro', port: '/dev/ttyUSB0' },
  device: {name: 'rapiro', driver: 'rapiro'},

  work: function(my) {
  	my['doneWalking'] = false ;

  	my.rapiro.on('start', function() {
	  	Logger.info("forward");
	  
	    every(1..second(), function() {
	    	if (my['doneWalking'] == false)
	    		my.rapiro.forward();
	    });
	    // after((3).seconds(), function() { 
	    //   my.rapiro.backward();
	    // });
	    after(10..seconds(), function() {
	    	Logger.info("halt");
	    	my.rapiro.halt();
	    	my['doneWalking'] = true;
	    });
	  });
  }
}).start();
