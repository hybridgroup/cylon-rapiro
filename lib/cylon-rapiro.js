/*
 * cylon-rapiro
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Cylon = require('cylon');

var Adaptor = require('./adaptor'),
    Driver = require('./driver');

module.exports = {
  adaptor: function(opts) {
    return new Adaptor(opts);
  },

  driver: function(opts) {
    return new Driver(opts);
  },

  register: function(robot) {
    Cylon.Logger.info("Registering Rapiro adaptor for " + robot.name);
    robot.registerAdaptor('cylon-rapiro', 'rapiro');

    Cylon.Logger.info("Registering Rapiro driver for " + robot.name);
    robot.registerDriver('cylon-rapiro', 'rapiro');
  }
};
