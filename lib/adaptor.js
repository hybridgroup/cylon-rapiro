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

var Adaptor = module.exports = function Adaptor(opts) {
  Adaptor.__super__.constructor.apply(this, arguments);

  this.serialPort = new SerialPort(this.connection.port, {
    baudrate: 57600
  }, false);
};

Cylon.Utils.subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.connect = function(callback) {
  var self = this;

  this.serialPort.open(function() {
    self.connection.emit('connect');
    callback(null);
  });
};

Adaptor.prototype.disconnect = function(callback) {
  var self = this;

  this.serialPort.pause();

  this.serialPort.flush(function() {
    self.serialPort.close(function() {
      self.connection.emit('disconnect');
      callback(null);
    });
  });
};

Adaptor.prototype.commands = ['write'];

Adaptor.prototype.write = function(data) {
  this.serialPort.write(data);
}
