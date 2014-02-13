(function() {
  'use strict';
  var driver;

  driver = source("driver");

  describe("Cylon.Drivers.Rapiro", function() {
    var module;
    module = new Cylon.Drivers.Rapiro({
      device: {
        connection: 'connect'
      }
    });
    return it("needs tests");
  });

}).call(this);
