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
require("./cli/rapiro");

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
  },

  registerCommands: function() {
    var commands;
    commands = {
      rapiro: {
        description: "Upload rapiro protocol to arduino",
        command: function(args) {
          var subcmd = args[0],
              serialPort = args[1],
              hexFile = args.length > 2 ? args[2] : null,
              rapiro = new Cylon.CLI.Rapiro(serialPort, hexFile);

          switch (subcmd) {
            case 'upload':
              rapiro.upload();
              break;
            case 'install':
              rapiro.install();
              break;
            default:
              console.log("cylon rapiro argument not recognized, try:\n");
              console.log("1.- cylon rapiro upload <serial_port> [optional_hex_file]");
              console.log("2.- cylon rapiro install\n");
          }
        }
      }
    };

    return commands;
  }


};
