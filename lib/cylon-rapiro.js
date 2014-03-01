/*
 * cylon-rapiro
 * http://cylonjs.com
 *
 * Copyright (c) 2013 Your Name Here
 * Your License Here
*/

"use strict";

var namespace = require('node-namespace');

require('cylon');
require('./adaptor');
require('./driver');

module.exports = {
  adaptor: function(opts) {
    return new Cylon.Adaptors.Rapiro(opts);
  },

  driver: function(opts) {
    return new Cylon.Drivers.Rapiro(opts);
  },

  register: function(robot) {
    Logger.info("Registering Rapiro adaptor for " + robot.name);
    robot.registerAdaptor('cylon-rapiro', 'rapiro');

    Logger.info("Registering Rapiro driver for " + robot.name);
    return robot.registerDriver('cylon-rapiro', 'rapiro');
  }
};
