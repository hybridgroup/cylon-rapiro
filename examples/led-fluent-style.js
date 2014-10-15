var cylon = require('cylon');

// Initialize the robot
cylon.robot({
  connection: { name: 'rapiro', adaptor: 'rapiro', port: '/dev/ttyUSB0' },
  device: {name: 'rapiro', driver: 'rapiro'}
})

.on('ready', function(robot) {
  var on = false;

  setInterval(function() {
    if (on === true) {
      console.log('on');
      robot.rapiro.led(255, 0, 0);
      on = false;
    } else {
      console.log('off');
      robot.rapiro.led(0, 0, 0);
      on = true;
    }
  }, 1000);
})

.start();
