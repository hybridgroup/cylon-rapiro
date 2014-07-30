/*
 * cylon-rapiro driver
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Cylon = require('cylon');

var Driver = module.exports = function Driver() {
  Driver.__super__.constructor.apply(this, arguments);
}

Cylon.Utils.subclass(Driver, Cylon.Driver);

Driver.prototype.start = function() {
  // TODO: enable reading
  // this.connection.read(function(data) {
  //   this.device.emit('data', data);
  //   this.parse(data);
  // }.bind(this));

  Driver.__super__.start.apply(this, arguments);
};

Driver.prototype.commands = [
  'move', 'stop', 'forward', 'backward', 'right', 'left', 
  'happy', 'unhappy', 'concerned', 'mad', 'push', 'led', 
  'head', 'waist', 'setServo',
  'rightShoulderRoll', 'rightShoulderPitch', 'rightHand', 
  'rightFootYaw', 'rightFootPitch',
  'leftShoulderRoll', 'leftShoulderPitch', 'leftHand', 
  'leftFootYaw', 'leftFootPitch'
];

Driver.prototype.move = function(motionNumber) {
  return this.connection.write("#M" + motionNumber);
};

Driver.prototype.stop = function() {
  return this.move(0);
};

Driver.prototype.forward = function() {
  return this.move(1);
};

Driver.prototype.backward = function() {
  return this.move(2);
};

Driver.prototype.right = function() {
  return this.move(3);
};

Driver.prototype.left = function() {
  return this.move(4);
};

Driver.prototype.happy = function() {
  return this.move(5);
};

Driver.prototype.unhappy = function() {
  return this.move(6);
};

Driver.prototype.concerned = function() {
  return this.move(7);
};

Driver.prototype.mad = function() {
  return this.move(8);
};

Driver.prototype.push = function() {
  return this.move(9);
};

Driver.prototype.led = function(r, g, b) {
  this.connection.write("#P");
  this.connection.write("R" + pad(r, 3));
  this.connection.write("G" + pad(g, 3));
  this.connection.write("B" + pad(b, 3));
  this.connection.write("T001");
};

Driver.prototype.setServo = function(servo, angle) {
  this.connection.write("#P");
  this.connection.write("S" + pad(servo, 2));
  this.connection.write("A" + pad(angle, 3));
  this.connection.write("T001");
};

Driver.prototype.head = function(angle) {
  this.setServo(0, angle);
};

Driver.prototype.waist = function(angle) {
  this.setServo(1, angle);
};

Driver.prototype.rightShoulderRoll = function(angle) {
  this.setServo(2, angle);
};

Driver.prototype.rightShoulderPitch = function(angle) {
  this.setServo(3, angle);
};

Driver.prototype.rightHand = function(angle) {
  this.setServo(4, angle);
};

Driver.prototype.leftShoulderRoll = function(angle) {
  this.setServo(5, angle);
};

Driver.prototype.leftShoulderPitch = function(angle) {
  this.setServo(6, angle);
};

Driver.prototype.leftHand = function(angle) {
  this.setServo(7, angle);
};

Driver.prototype.rightFootYaw = function(angle) {
  this.setServo(8, angle);
};

Driver.prototype.rightFootPitch = function(angle) {
  this.setServo(9, angle);
};

Driver.prototype.leftFootYaw = function(angle) {
  this.setServo(10, angle);
};

Driver.prototype.leftFootPitch = function(angle) {
  this.setServo(11, angle);
};

function pad(num, len) {
  var s = "000" + num;
  return s.substr(s.length - len);
}
