var Cylon = require('cylon');

Cylon
  .robot()
  .connection("rapiro", { adaptor: 'rapiro', port: '/dev/ttyUSB0' })
  .device("rapiro", { driver: 'rapiro' })
  .on('ready', function(bot) {
    var on = false;

    setInterval(function() {
      if (on) {
        console.log('on');
        bot.rapiro.led(255, 0, 0);
        on = false;
      } else {
        console.log('off');
        bot.rapiro.led(0, 0, 0);
        on = true;
      }
    }, 1000);
  });

Cylon.start();
