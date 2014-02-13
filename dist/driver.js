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

      return Rapiro;

    })(Cylon.Driver);
  });

}).call(this);
