var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'rapiro', adaptor: 'rapiro', port: '/dev/ttyUSB0' },
  device: {name: 'rapiro', driver: 'rapiro'},

  work: function(my) {
    my.startWalking = function() {
      Logger.info("forward");
      my['doneWalking'] = false ;

      every(1..second(), function() {
        if (my['doneWalking'] == false)
          my.rapiro.forward();
      });
    }

    my.stopWalking = function() {
      Logger.info("halt");
      my.rapiro.halt();
      my['doneWalking'] = true;
    }

    my.rapiro.on('start', function() {
      my.startWalking();
    
      after(10..seconds(), my.stopWalking);
    });
  }
}).start();
