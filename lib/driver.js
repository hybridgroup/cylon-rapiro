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
      return ['move', 'halt', 'forward', 'backward', 'right', 'left', 
              'happy', 'unhappy', 'concerned', 'mad', 'push', 'led', 
              'head', 'waist', 'rightShoulderRoll', 'rightShoulderPitch', 'rightHand',
              'leftShoulderRoll', 'leftShoulderPitch', 'leftHand', 'rightFootYaw', 'rightFootPitch',
              'leftFootYaw', 'leftFootPitch', 'setServo'];
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
      this.connection.write("R" + pad(r, 3));
      this.connection.write("G" + pad(g, 3));
      this.connection.write("B" + pad(b, 3));
      this.connection.write("T001");
    };

    Rapiro.prototype.setServo = function(servo, angle) {
      this.connection.write("#P");
      this.connection.write("S" + pad(servo, 2));
      this.connection.write("A" + pad(angle, 3));
      this.connection.write("T001");
    };

    Rapiro.prototype.head = function(angle) {
      this.setServo(0, angle);
    };

    Rapiro.prototype.waist = function(angle) {
      this.setServo(1, angle);
    };

    Rapiro.prototype.rightShoulderRoll = function(angle) {
      this.setServo(2, angle);
    };

    Rapiro.prototype.rightShoulderPitch = function(angle) {
      this.setServo(3, angle);
    };

    Rapiro.prototype.rightHand = function(angle) {
      this.setServo(4, angle);
    };

    Rapiro.prototype.leftShoulderRoll = function(angle) {
      this.setServo(5, angle);
    };

    Rapiro.prototype.leftShoulderPitch = function(angle) {
      this.setServo(6, angle);
    };

    Rapiro.prototype.leftHand = function(angle) {
      this.setServo(7, angle);
    };

    Rapiro.prototype.rightFootYaw = function(angle) {
      this.setServo(8, angle);
    };

    Rapiro.prototype.rightFootPitch = function(angle) {
      this.setServo(9, angle);
    };

    Rapiro.prototype.leftFootYaw = function(angle) {
      this.setServo(10, angle);
    };

    Rapiro.prototype.leftFootPitch = function(angle) {
      this.setServo(11, angle);
    };


    function pad(num, len) {
      var s = "000" + num;
      return s.substr(s.length - len);
    }

    return Rapiro;

  })(Cylon.Driver);
});
