"use strict";

var module = source("cylon-rapiro");

var Adaptor = source('adaptor'),
    Driver = source('driver');

describe("cylon-rapiro", function() {
  describe("#adaptors", function() {
    it('is an array of supplied adaptors', function() {
      expect(module.adaptors).to.be.eql(['rapiro']);
    });
  });

  describe("#drivers", function() {
    it('is an array of supplied drivers', function() {
      expect(module.drivers).to.be.eql(['rapiro']);
    });
  });

  describe("#adaptor", function() {
    it("returns a new instance of the Adaptor class", function() {
      var opts = { port: '/dev/null' };
      expect(module.adaptor(opts)).to.be.an.instanceOf(Adaptor);
    });
  });

  describe("#driver", function() {
    it("returns a new instance of the Driver class", function() {
      expect(module.driver({ adaptor: {} })).to.be.an.instanceOf(Driver);
    });
  });
});
