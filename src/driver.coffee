###
 * cylon-rapiro driver
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 Your Name Here
 * Licensed under the Apache 2.0 license.
###

'use strict'

require './cylon-rapiro'
require './adaptor'

namespace = require 'node-namespace'

namespace "Cylon.Drivers", ->
  class @Rapiro extends Cylon.Driver
    start: (callback) ->
      super

    move: (motionNumber) ->
      @connection.write "#M#{motionNumber}"

    stop: () ->
      @move(0)

    forward: () ->
      @move(1)

    backward: () ->
      @move(2)

   	right: () ->
	    @move(3)

   	left: () ->
	    @move(4)

   	green: () ->
      @move(5)

   	yellow: () ->
      @move(6)

   	blue: () ->
      @move(7)

   	red: () ->
      @move(8)

   	push: () ->
      @move(9)

