var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'rapiro', adaptor: 'rapiro', port: '/dev/ttyUSB0' },
  device: {name: 'rapiro', driver: 'rapiro'},

  work: function(my) {
    var walking = false ;

    var startWalking = function() {
      Logger.info("forward");
      walking = true ;

      my.rapiro.red();
      
      every(1..second(), function() {
        if (walking == true)
          my.rapiro.forward();
      });
    }

    var stopWalking = function() {
      Logger.info("halt");
      walking = false;

      my.rapiro.halt();
    }

    my.rapiro.on('start', function() {
      startWalking();
    
      after(10..seconds(), stopWalking);
    });
  }
}).start();
