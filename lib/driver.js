/*
 * cylon-rapiro driver
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 Your Name Here
 * Licensed under the Apache 2.0 license.
*/


(function() {
  'use strict';
  var namespace,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  require('./cylon-rapiro');

  require('./adaptor');

  namespace = require('node-namespace');

  namespace("Cylon.Drivers", function() {
    var _ref;
    return this.Rapiro = (function(_super) {
      __extends(Rapiro, _super);

      function Rapiro() {
        _ref = Rapiro.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Rapiro.prototype.start = function(callback) {
        return Rapiro.__super__.start.apply(this, arguments);
      };

      Rapiro.prototype.move = function(motionNumber) {
        return this.connection.write("#M" + motionNumber);
      };

      Rapiro.prototype.stop = function() {
        return this.move(0);
      };

      Rapiro.prototype.forward = function() {
        return this.move(1);
      };

      Rapiro.prototype.backward = function() {
        return this.move(2);
      };

      Rapiro.prototype.right = function() {
        return this.move(3);
      };

      Rapiro.prototype.left = function() {
        return this.move(4);
      };

      Rapiro.prototype.green = function() {
        return this.move(5);
      };

      Rapiro.prototype.yellow = function() {
        return this.move(6);
      };

      Rapiro.prototype.blue = function() {
        return this.move(7);
      };

      Rapiro.prototype.red = function() {
        return this.move(8);
      };

      Rapiro.prototype.push = function() {
        return this.move(9);
      };

      return Rapiro;

    })(Cylon.Driver);
  });

}).call(this);


'use strict';

require('./cylon-rapiro');
require('./adaptor');
var namespace = require('node-namespace');

namespace("Cylon.Drivers", function() {
  this.Rapiro = (function(klass) {
    subclass(Rapiro, klass);

    function Rapiro() {
      Rapiro.__super__.constructor.apply(this, arguments);
    }

    Rapiro.prototype.start = function(callback) {
      return Rapiro.__super__.start.apply(this, arguments);
    };

    Rapiro.prototype.move = function(motionNumber) {
      return this.connection.write("#M" + motionNumber);
    };

    Rapiro.prototype.stop = function() {
      return this.move(0);
    };

    Rapiro.prototype.forward = function() {
      return this.move(1);
    };

    Rapiro.prototype.backward = function() {
      return this.move(2);
    };

    Rapiro.prototype.right = function() {
      return this.move(3);
    };

    Rapiro.prototype.left = function() {
      return this.move(4);
    };

    Rapiro.prototype.green = function() {
      return this.move(5);
    };

    Rapiro.prototype.yellow = function() {
      return this.move(6);
    };

    Rapiro.prototype.blue = function() {
      return this.move(7);
    };

    Rapiro.prototype.red = function() {
      return this.move(8);
    };

    Rapiro.prototype.push = function() {
      return this.move(9);
    };

    return Rapiro;

  })(Cylon.Driver);
});
