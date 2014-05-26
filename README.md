# Cylon.js For Rapiro

Cylon.js (http://cylonjs.com) is a JavaScript framework for robotics and physical computing using Node.js

This module provides an adaptor for the Rapiro ([http://www.rapiro.com](http://www.rapiro.com)) bipedal robot.

Want to use Ruby on robots? Check out our sister project Artoo (http://artoo.io)

Want to use the Go programming language to power your robots? Check out our sister project Gobot (http://gobot.io).

[![Build Status](https://secure.travis-ci.org/hybridgroup/cylon-rapiro.png?branch=master)](http://travis-ci.org/hybridgroup/cylon-rapiro)

## Getting Started
Install the module with: `npm install cylon-rapiro`

## Examples

### JavaScript:
```javascript
var Cylon = require('cylon');

// Initialize the robot
Cylon.robot({
  connection: { name: 'rapiro', adaptor: 'rapiro', port: '/dev/ttyUSB0' },
  device: {name: 'rapiro', driver: 'rapiro'},

  work: function(my) {
    my['doneWalking'] = false ;

    my.rapiro.on('start', function() {
      Logger.info("forward");
    
      every(1..second(), function() {
        if (my['doneWalking'] == false)
          my.rapiro.forward();
      });
      after(10..seconds(), function() {
        Logger.info("halt");
        my.rapiro.halt();
        my['doneWalking'] = true;
      });
    });
  }
}).start();
```

### CoffeeScript:
```ruby
Cylon = require('cylon')

# Initialize the robot
Cylon.robot
  connection:
    name: 'rapiro', adaptor: 'rapiro', port: '/dev/ttyACM0'

  device:
    name: 'rapiro', driver: 'rapiro'

  work: (my) ->
    my['doneWalking'] = false

    my.rapiro.on 'start', ->
      Logger.info("forward")
    
      every 1.second(), ->
        my.rapiro.forward() if (my['doneWalking'] == false)
          
      after 10.seconds(), ->
        Logger.info("halt")
        my.rapiro.halt()
        my['doneWalking'] = true

.start()
```
## Connecting to Rapiro

### Linux

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

Version 0.3.0 - Compatibility with Cylon 0.14.0, remove node-namespace.

Version 0.2.0 - Update to Cylon 0.12.0

Version 0.1.0 - Initial release

## License
Copyright (c) 2013-2014 The Hybrid Group. Licensed under the Apache 2.0 license.
