/*
 * cylon-rapiro driver
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 Your Name Here
 * Licensed under the Apache 2.0 license.
*/

'use strict';

require('./cylon-rapiro');
require('./adaptor');
var namespace = require('node-namespace');

namespace("Cylon.Drivers", function() {
  this.Rapiro = (function(klass) {
    subclass(Rapiro, klass);

    function Rapiro() {
      Rapiro.__super__.constructor.apply(this, arguments);
    }

    Rapiro.prototype.start = function(callback) {
      return Rapiro.__super__.start.apply(this, arguments);
    };

    Rapiro.prototype.commands = function() {
      return ['move', 'halt', 'forward', 'backward', 'right', 'left', 'happy', 'unhappy', 'concerned', 'mad', 'push', 'led'];
    };

    Rapiro.prototype.move = function(motionNumber) {
      return this.connection.write("#M" + motionNumber.toString());
    };

    Rapiro.prototype.halt = function() {
      return this.move(0);
    };

    Rapiro.prototype.forward = function() {
      return this.move(1);
    };

    Rapiro.prototype.backward = function() {
      return this.move(2);
    };

    Rapiro.prototype.right = function() {
      return this.move(3);
    };

    Rapiro.prototype.left = function() {
      return this.move(4);
    };

    Rapiro.prototype.happy = function() {
      return this.move(5);
    };

    Rapiro.prototype.unhappy = function() {
      return this.move(6);
    };

    Rapiro.prototype.concerned = function() {
      return this.move(7);
    };

    Rapiro.prototype.mad = function() {
      return this.move(8);
    };

    Rapiro.prototype.push = function() {
      return this.move(9);
    };

    Rapiro.prototype.led = function(r, g, b) {
      this.connection.write("#P");
      this.connection.write("R" + pad(r));
      this.connection.write("G" + pad(g));
      this.connection.write("B" + pad(b));
      this.connection.write("T001");
    };

    function pad(num) {
      var s = "000" + num;
      return s.substr(s.length-3);
    }

    return Rapiro;

  })(Cylon.Driver);
});
