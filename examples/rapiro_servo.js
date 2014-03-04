var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'rapiro', adaptor: 'rapiro', port: '/dev/ttyUSB0' },
  device: {name: 'rapiro', driver: 'rapiro'},

  work: function(my) {
    my.rapiro.on('start', function() {
      after(3..seconds(), function() {
        my.rapiro.setServo(7, 50);
      });
    
      after(6..seconds(), function() {
        my.rapiro.setServo(7, 90);
      });

      after(9..seconds(), function() {
        my.rapiro.setServo(7, 50);
      });

      after(12..seconds(), function() {
        my.rapiro.setServo(4, 50);
      });

      after(15..seconds(), function() {
        my.rapiro.setServo(4, 90);
      });

      after(18..seconds(), function() {
        my.rapiro.setServo(4, 50);
      });

    });
  }
}).start();