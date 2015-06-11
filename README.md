# Cylon.js For Rapiro

Cylon.js (http://cylonjs.com) is a JavaScript framework for robotics, physical computing, and the Internet of Things (IoT).

This module provides an adaptor for the Rapiro ([http://www.rapiro.com](http://www.rapiro.com)) bipedal robot.

Want to use Ruby on robots? Check out our sister project Artoo (http://artoo.io)

Want to use the Go programming language to power your robots? Check out our sister project Gobot (http://gobot.io).

[![Build Status](https://secure.travis-ci.org/hybridgroup/cylon-rapiro.png?branch=master)](http://travis-ci.org/hybridgroup/cylon-rapiro) [![Code Climate](https://codeclimate.com/github/hybridgroup/cylon-rapiro/badges/gpa.svg)](https://codeclimate.com/github/hybridgroup/cylon-rapiro) [![Test Coverage](https://codeclimate.com/github/hybridgroup/cylon-rapiro/badges/coverage.svg)](https://codeclimate.com/github/hybridgroup/cylon-rapiro)

## How to Install

Install the module with:

    $ npm install cylon cylon-rapiro

## How to Use

Here is an example of a simple program that makes the Rapiro walk:

```javascript
var Cylon = require('cylon');

// Initialize the robot
Cylon.robot({
  connections: {
    rapiro: { adaptor: 'rapiro', port: '/dev/ttyUSB0' }
  },

  devices: {
    rapiro: { driver: 'rapiro' }
  },

  work: function(my) {
    my['doneWalking'] = false ;

    console.log("forward");

    every(1..second(), function() {
      if (my['doneWalking'] == false) {
        my.rapiro.forward();
      }
    });
    after(10..seconds(), function() {
      console.log("halt");
      my.rapiro.stop();
      my['doneWalking'] = true;
    });

  }
}).start();
```

## How to Connect

If you are connected from a Raspberry Pi to the Rapiro board, it will appear as serial port `/dev/ttyACM0`.
You can find out by running [Gort](http://gort.io)'s `gort scan serial` command.

## Documentation

We're busy adding documentation to our web site at http://cylonjs.com/ please check there as we continue to work on Cylon.js

Thank you!

## Contributing

For our contribution guidelines, please go to [https://github.com/hybridgroup/cylon/blob/master/CONTRIBUTING.md
](https://github.com/hybridgroup/cylon/blob/master/CONTRIBUTING.md
).

## Release History

For the release history, please go to [https://github.com/hybridgroup/cylon-rapiro/blob/master/RELEASES.md
](https://github.com/hybridgroup/cylon-rapiro/blob/master/RELEASES.md
).

## License
Copyright (c) 2013-2015 The Hybrid Group. Licensed under the Apache 2.0 license.
