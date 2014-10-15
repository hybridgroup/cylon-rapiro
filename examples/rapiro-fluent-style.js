var cylon = require('cylon');

// Initialize the robot
cylon.robot({
  connection: { name: 'rapiro', adaptor: 'rapiro', port: '/dev/ttyUSB0' },
  device: {name: 'rapiro', driver: 'rapiro'}
})

.on('ready', function(robot) {
  robot['doneWalking'] = false ;
  console.log("forward");
  robot.rapiro.led(255, 0, 0);

  setInterval(function() {
    if (robot['doneWalking'] === false) {
      robot.rapiro.forward();
    }
  }, 1000);

  setTimeout(function() {
    console.log("stop");
    robot.rapiro.stop();
    robot.rapiro.led(0, 0, 0);
    robot['doneWalking'] = true;
  }, 10000);
})

.start();
