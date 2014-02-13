/*
 * cylon-rapiro adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 Your Name Here
 * Licensed under the Apache 2.0 license.
*/


(function() {
  "use strict";
  var SerialPort, namespace,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace = require('node-namespace');

  require('./cylon-rapiro');

  require('./driver');

  SerialPort = require("serialport").SerialPort;

  namespace('Cylon.Adaptors', function() {
    return this.Rapiro = (function(_super) {
      __extends(Rapiro, _super);

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

  ({
    write: function(data, callback) {
      return this.serialPort.write(data, callback);
    }
  });

}).call(this);
