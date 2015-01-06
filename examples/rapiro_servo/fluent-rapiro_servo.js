"use strict";

var Cylon = require("cylon");

Cylon
  .robot()
  .connection("rapiro", { adaptor: "rapiro", port: "/dev/ttyUSB0" })
  .device("rapiro", { driver: "rapiro" })
  .on("ready", function(bot) {
    setTimeout(function() {
      bot.rapiro.setServo(7, 50);
    }, 3000);

    setTimeout(function() {
      bot.rapiro.setServo(7, 90);
    }, 6000);

    setTimeout(function() {
      bot.rapiro.setServo(7, 50);
    }, 9000);

    setTimeout(function() {
      bot.rapiro.setServo(4, 50);
    }, 12000);

    setTimeout(function() {
      bot.rapiro.setServo(4, 90);
    }, 15000);

    setTimeout(function() {
      bot.rapiro.setServo(4, 50);
    }, 18000);
  });

Cylon.start();
