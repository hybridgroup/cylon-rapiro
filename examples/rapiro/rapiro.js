"use strict";

var Cylon = require("cylon");

// Initialize the robot
Cylon.robot({
  connection: { name: "rapiro", adaptor: "rapiro", port: "/dev/ttyUSB0" },
  device: {name: "rapiro", driver: "rapiro"},

  connections: {
    rapiro: { adaptor: "rapiro", port: "/dev/ttyUSB0" }
  },

  devices: {
    rapiro: { driver: "rapiro" }
  },

  work: function(my) {
    my.doneWalking = false;

    console.log("forward");
    my.rapiro.led(255, 0, 0);

    every((1).second(), function() {
      if (!my.doneWalking) {
        my.rapiro.forward();
      }
    });

    after((10).seconds(), function() {
      console.log("stop");
      my.rapiro.stop();
      my.rapiro.led(0, 0, 0);
      my.doneWalking = true;
    });
  }
}).start();
