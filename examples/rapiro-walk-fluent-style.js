var cylon = require('cylon');

cylon.robot({
  connection: { name: 'rapiro', adaptor: 'rapiro', port: '/dev/ttyUSB0' },
  device: {name: 'rapiro', driver: 'rapiro'}
})

.on('ready', function(robot) {
    var walking = false ;

    var startWalking = function() {
      console.log("forward");
      walking = true ;

      setInterval(function() {
        if (walking === true) {
          robot.rapiro.forward();
        }
      }, 1000);
    };

    var stopWalking = function() {
      console.log("halt");
      walking = false;

      robot.rapiro.stop();

      setTimeout(function() {
        robot.rapiro.led(255, 0, 0);
      }, 1000);
    };

    startWalking();

    setTimeout(function() {
      stopWalking();
    }, 10000);
})

.start();
