var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'rapiro', adaptor: 'rapiro', port: '/dev/ttyUSB0' },
  device: {name: 'rapiro', driver: 'rapiro'},

  work: function(my) {
    var walking = false ;

    var startWalking = function() {
      console.log("forward");
      walking = true ;

      every(1..second(), function() {
        if (walking == true) {
          my.rapiro.forward();
        }
      });
    }

    var stopWalking = function() {
      console.log("halt");
      walking = false;

      my.rapiro.stop();
      after(1..second(), function() {
        my.rapiro.led(255, 0, 0);
      });
    }

    startWalking();    
    after(10..seconds(), stopWalking);
  }
}).start();
