/*
 * cylon-rapiro driver
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Cylon = require("cylon");

var Driver = module.exports = function Driver() {
  Driver.__super__.constructor.apply(this, arguments);
  this.setupCommands([
    "move", "stop", "forward", "backward", "right", "left",
    "happy", "unhappy", "concerned", "mad", "push", "led",
    "head", "waist", "setServo",
    "rightShoulderRoll", "rightShoulderPitch", "rightHand",
    "rightFootYaw", "rightFootPitch",
    "leftShoulderRoll", "leftShoulderPitch", "leftHand",
    "leftFootYaw", "leftFootPitch"
  ]);
};

Cylon.Utils.subclass(Driver, Cylon.Driver);

Driver.prototype.start = function(callback) {
  callback();
};

Driver.prototype.halt = function(callback) {
  callback();
};

/**
 * Makes the Rapiro move, the specific movement is dependent on the provided
 * motion number.
 *
 * @param {Number} motionNumber which movement to make
 * @return {null}
 * @publish
 */
Driver.prototype.move = function(motionNumber) {
  return this.connection.write("#M" + motionNumber);
};

/**
 * Makes the Rapiro stop moving
 *
 * @return {null}
 * @publish
 */
Driver.prototype.stop = function() {
  return this.move(0);
};

/**
 * Makes the Rapiro move forward
 *
 * @return {null}
 * @publish
 */
Driver.prototype.forward = function() {
  return this.move(1);
};

/**
 * Makes the Rapiro move backward
 *
 * @return {null}
 * @publish
 */
Driver.prototype.backward = function() {
  return this.move(2);
};

/**
 * Makes the Rapiro move to the right
 *
 * @return {null}
 * @publish
 */
Driver.prototype.right = function() {
  return this.move(3);
};

/**
 * Makes the Rapiro move to the left
 *
 * @return {null}
 * @publish
 */
Driver.prototype.left = function() {
  return this.move(4);
};

/**
 * Makes the Rapiro make a 'happy' expression
 *
 * @return {null}
 * @publish
 */
Driver.prototype.happy = function() {
  return this.move(5);
};

/**
 * Makes the Rapiro make a 'unhappy' expression
 *
 * @return {null}
 * @publish
 */
Driver.prototype.unhappy = function() {
  return this.move(6);
};

/**
 * Makes the Rapiro make a 'concerned' expression
 *
 * @return {null}
 * @publish
 */
Driver.prototype.concerned = function() {
  return this.move(7);
};

/**
 * Makes the Rapiro make a 'mad' expression
 *
 * @return {null}
 * @publish
 */
Driver.prototype.mad = function() {
  return this.move(8);
};

/**
 * Makes the Rapiro make a 'push' motion
 *
 * @return {null}
 * @publish
 */
Driver.prototype.push = function() {
  return this.move(9);
};

/**
 * Sets the Rapiro's LED color
 *
 * @param {Number} r
 * @param {Number} g
 * @param {Number} b
 * @return {null}
 * @publish
 */
Driver.prototype.led = function(r, g, b) {
  this.connection.write("#P");
  this.connection.write("R" + this.pad(r, 3));
  this.connection.write("G" + this.pad(g, 3));
  this.connection.write("B" + this.pad(b, 3));
  this.connection.write("T001");
};

/**
 * Sets the angle of a specific Rapiro servo
 *
 * The servos are:
 *
 * - 0: Head
 * - 1: waist
 * - 2: right shoulder roll
 * - 3: right shoulder pitch
 * - 4: right hand
 * - 5: left shoulder roll
 * - 6: left shoulder pitch
 * - 7: left hand
 * - 8: right foot yaw
 * - 9: right foot pitch
 * - 10: left foot yaw
 * - 11: left foot pitch
 *
 * @param {Number} servo
 * @param {Number} angle
 * @return {null}
 * @publish
 */
Driver.prototype.setServo = function(servo, angle) {
  this.connection.write("#P");
  this.connection.write("S" + this.pad(servo, 2));
  this.connection.write("A" + this.pad(angle, 3));
  this.connection.write("T001");
};

/**
 * Sets the angle of Rapiro's head servo
 *
 * @param {Number} angle
 * @return {null}
 * @publish
 */
Driver.prototype.head = function(angle) {
  this.setServo(0, angle);
};

/**
 * Sets the angle of Rapiro's waist servo
 *
 * @param {Number} angle
 * @return {null}
 * @publish
 */
Driver.prototype.waist = function(angle) {
  this.setServo(1, angle);
};

/**
 * Sets the angle of Rapiro's right shoulder roll servo
 *
 * @param {Number} angle
 * @return {null}
 * @publish
 */
Driver.prototype.rightShoulderRoll = function(angle) {
  this.setServo(2, angle);
};

/**
 * Sets the angle of Rapiro's right shoulder pitch servo
 *
 * @param {Number} angle
 * @return {null}
 * @publish
 */
Driver.prototype.rightShoulderPitch = function(angle) {
  this.setServo(3, angle);
};

/**
 * Sets the angle of Rapiro's right hand servo
 *
 * @param {Number} angle
 * @return {null}
 * @publish
 */
Driver.prototype.rightHand = function(angle) {
  this.setServo(4, angle);
};

/**
 * Sets the angle of Rapiro's left shoulder roll servo
 *
 * @param {Number} angle
 * @return {null}
 * @publish
 */
Driver.prototype.leftShoulderRoll = function(angle) {
  this.setServo(5, angle);
};

/**
 * Sets the angle of Rapiro's left shoulder pitch servo
 *
 * @param {Number} angle
 * @return {null}
 * @publish
 */
Driver.prototype.leftShoulderPitch = function(angle) {
  this.setServo(6, angle);
};

/**
 * Sets the angle of Rapiro's left hand servo
 *
 * @param {Number} angle
 * @return {null}
 * @publish
 */
Driver.prototype.leftHand = function(angle) {
  this.setServo(7, angle);
};

/**
 * Sets the angle of Rapiro's right foot yaw servo
 *
 * @param {Number} angle
 * @return {null}
 * @publish
 */
Driver.prototype.rightFootYaw = function(angle) {
  this.setServo(8, angle);
};

/**
 * Sets the angle of Rapiro's right foot pitch servo
 *
 * @param {Number} angle
 * @return {null}
 * @publish
 */
Driver.prototype.rightFootPitch = function(angle) {
  this.setServo(9, angle);
};

/**
 * Sets the angle of Rapiro's left foot yaw servo
 *
 * @param {Number} angle
 * @return {null}
 * @publish
 */
Driver.prototype.leftFootYaw = function(angle) {
  this.setServo(10, angle);
};

/**
 * Sets the angle of Rapiro's left foot pitch servo
 *
 * @param {Number} angle
 * @return {null}
 * @publish
 */
Driver.prototype.leftFootPitch = function(angle) {
  this.setServo(11, angle);
};

Driver.prototype.pad = function(num, len) {
  var s = "000" + num;
  return s.substr(s.length - len);
};
