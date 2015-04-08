# Cylon.js For Rapiro

Cylon.js (http://cylonjs.com) is a JavaScript framework for robotics and physical computing using Node.js

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

* All patches must be provided under the Apache 2.0 License
* Please use the -s option in git to "sign off" that the commit is your work and you are providing it under the Apache 2.0 License
* Submit a Github Pull Request to the appropriate branch and ideally discuss the changes with us in IRC.
* We will look at the patch, test it out, and give you feedback.
* Avoid doing minor whitespace changes, renamings, etc. along with merged content. These will be done by the maintainers from time to time but they can complicate merges and should be done seperately.
* Take care to maintain the existing coding style.
* Add unit tests for any new or changed functionality & Lint and test your code using [Grunt](http://gruntjs.com/).
* All pull requests should be "fast forward"
  * If there are commits after yours use “git rebase -i <new_head_branch>”
  * If you have local changes you may need to use “git stash”
  * For git help see [progit](http://git-scm.com/book) which is an awesome (and free) book on git

## Release History

Version 0.12.0 - Compatibility with Cylon 1.0.0

Version 0.11.0 - Compatibility with Cylon 0.22.0

Version 0.10.0 - Compatibility with Cylon 0.21.0

Version 0.9.0 - Compatibility with Cylon 0.20.0

Version 0.8.0 - Compatibility with Cylon 0.19.0

Version 0.7.0 - Compatibility with Cylon 0.18.0

Version 0.6.0 - Compatibility and example updates

Version 0.5.0 - Compatibility with Cylon 0.16.0

Version 0.4.1 - Add peerDependencies to package.json

Version 0.4.0 - Compatibility with Cylon 0.15.0

Version 0.3.0 - Compatibility with Cylon 0.14.0, remove node-namespace.

Version 0.2.0 - Update to Cylon 0.12.0

Version 0.1.0 - Initial release

## License
Copyright (c) 2013-2014 The Hybrid Group. Licensed under the Apache 2.0 license.
