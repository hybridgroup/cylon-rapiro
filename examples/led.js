var Cylon = require('cylon');

// Initialize the robot
Cylon.robot({
  connection: { name: 'rapiro', adaptor: 'rapiro', port: '/dev/ttyUSB0' },
  device: {name: 'rapiro', driver: 'rapiro'},

  work: function(my) {
    //my.rapiro.forward();
    every((1).second(), function() { 
      my.rapiro.blue();
    });
  }
}).start();
