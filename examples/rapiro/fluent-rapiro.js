var Cylon = require('cylon');

Cylon
  .robot()
  .connection("rapiro", { adaptor: 'rapiro', port: '/dev/ttyUSB0' })
  .device("rapiro", { driver: 'rapiro' })

  .on('ready', function(bot) {
    bot.doneWalking = false;

    console.log("forward");
    bot.rapiro.led(255, 0, 0);

    setInterval(function() {
      if (!bot.doneWalking) {
        bot.rapiro.forward();
      }
    }, 1000);

    setTimeout(function() {
      console.log("stop");
      bot.rapiro.stop();
      bot.rapiro.led(0, 0, 0);
      bot.doneWalking = true;
    }, 10000);
  });

Cylon.start();
