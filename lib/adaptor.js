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
      this.serialPort = new SerialPort(this.connection.port, {
        baudrate: 57600
      }, false);
    }

    Rapiro.prototype.connect = function(callback) {
      var self = this ;
      var cb = callback ;
      this.serialPort.open(function() {
        Logger.info("Connecting to adaptor '" + self.name + "'...");
        callback(null);
        self.connection.emit('connect');
      });
    };

    Rapiro.prototype.commands = function() {
      return ['write']
    }

    Rapiro.prototype.write = function(data) {
      this.serialPort.write(data);
    }

    return Rapiro;

  })(Cylon.Adaptor);
});
