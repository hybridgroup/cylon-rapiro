(function() {
  'use strict';
  var adaptor;

  adaptor = source("adaptor");

  describe("Cylon.Adaptors.Rapiro", function() {
    var module;
    module = new Cylon.Adaptors.Rapiro({
      connection: {
        port: "/dev/ABCD"
      }
    });
    return it("needs tests");
  });

}).call(this);
