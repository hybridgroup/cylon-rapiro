"use strict";

var Cylon = require("cylon");

Cylon
  .robot()
  .connection("rapiro", { adaptor: "rapiro", port: "/dev/ttyUSB0" })
  .device("rapiro", { driver: "rapiro" })
  .on("ready", function(bot) {
    var walking = false;

    var startWalking = function() {
      console.log("forward");
      walking = true;

      setInterval(function() {
        if (walking === true) {
          bot.rapiro.forward();
        }
      }, 1000);
    };

    var stopWalking = function() {
      console.log("halt");
      walking = false;

      bot.rapiro.stop();

      setTimeout(function() {
        bot.rapiro.led(255, 0, 0);
      }, 1000);
    };

    startWalking();

    setTimeout(function() {
      stopWalking();
    }, 10000);
  });

Cylon.start();
