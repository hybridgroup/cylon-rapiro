/*
 * cylon-rapiro adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 Your Name Here
 * Licensed under the Apache 2.0 license.
*/

"use strict";

require('./cylon-rapiro');
require('./driver');
var SerialPort = require("serialport").SerialPort;
var namespace = require('node-namespace');

namespace("Cylon.Adaptors", function() {
  this.Rapiro = (function(klass) {
    subclass(Rapiro, klass);

    function Rapiro(opts) {
      if (opts == null) {
        opts = {};
      }
      Rapiro.__super__.constructor.apply(this, arguments);
      this.serialPort = new SerialPort(this.connection.port.toString(), {
        baudrate: 57600
      }, false);
    }

    Rapiro.prototype.connect = function(callback) {
      return this.serialPort.open(function() {
        return Rapiro.__super__.connect.apply(this, arguments);
      });
    };

    return Rapiro;

  })(Cylon.Adaptor);
});
