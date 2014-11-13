/*
 * cylon-rapiro adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var SerialPort = require("serialport").SerialPort,
    Cylon = require('cylon');

var Adaptor = module.exports = function Adaptor() {
  Adaptor.__super__.constructor.apply(this, arguments);

  this.serialPort = new SerialPort(this.port, {
    baudrate: 57600
  }, false);
};

Cylon.Utils.subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.connect = function(callback) {
  this.serialPort.open(function() {
    this.emit('connect');
    callback(null);
  }.bind(this));
};

Adaptor.prototype.disconnect = function(callback) {
  this.serialPort.pause();

  this.serialPort.flush(function() {
    this.serialPort.close(function() {
      this.emit('disconnect');
      callback(null);
    }.bind(this));
  }.bind(this));
};

Adaptor.prototype.commands = ['write'];

Adaptor.prototype.write = function(data) {
  this.serialPort.write(data);
};
