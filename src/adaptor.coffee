###
 * cylon-rapiro adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 Your Name Here
 * Licensed under the Apache 2.0 license.
###

"use strict"

namespace = require 'node-namespace'

require './cylon-rapiro'
require './driver'
SerialPort = require("serialport").SerialPort

namespace 'Cylon.Adaptors', ->
  class @Rapiro extends Cylon.Adaptor
    constructor: (opts = {}) ->
      super
      @serialPort = new SerialPort @connection.port.toString(), {baudrate: 57600}, false

    connect: (callback) ->
      @serialPort.open -> super

	write: (data, callback) ->
	  @serialPort.write(data, callback)
