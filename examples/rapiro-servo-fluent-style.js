var cylon = require('cylon');

cylon.robot({
  connection: { name: 'rapiro', adaptor: 'rapiro', port: '/dev/ttyUSB0' },
  device: {name: 'rapiro', driver: 'rapiro'}
})

.on('ready', function(robot) {
    setTimeout(function() {
      robot.rapiro.setServo(7, 50);
    }, 3000);

    setTimeout(function() {
      robot.rapiro.setServo(7, 90);
    }, 6000);

    setTimeout(function() {
      robot.rapiro.setServo(7, 50);
    }, 9000);

    setTimeout(function() {
      robot.rapiro.setServo(4, 50);
    }, 12000);

    setTimeout(function() {
      robot.rapiro.setServo(4, 90);
    }, 15000);

    setTimeout(function() {
      robot.rapiro.setServo(4, 50);
    }, 18000);
})

.start();
