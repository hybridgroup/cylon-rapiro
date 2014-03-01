var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'rapiro', adaptor: 'rapiro', port: '/dev/ttyUSB0' },
  device: {name: 'rapiro', driver: 'rapiro'},

  work: function(my) {
    var doneWalking = false ;

    var startWalking = function() {
      Logger.info("forward");

      every(1..second(), function() {
        if (doneWalking == false)
          my.rapiro.forward();
      });
    }

    var stopWalking = function() {
      Logger.info("halt");
      my.rapiro.halt();
      doneWalking = true;
    }

    my.rapiro.on('start', function() {
      startWalking();
    
      after(10..seconds(), stopWalking);
    });
  }
}).start();
