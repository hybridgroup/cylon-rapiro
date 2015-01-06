// jshint expr:true
"use strict";

var rapiro = source("cylon-rapiro");

var Adaptor = source("adaptor"),
    Driver = source("driver");

describe("cylon-rapiro", function() {
  describe("#adaptors", function() {
    it("is an array of supplied adaptors", function() {
      expect(rapiro.adaptors).to.be.eql(["rapiro"]);
    });
  });

  describe("#drivers", function() {
    it("is an array of supplied drivers", function() {
      expect(rapiro.drivers).to.be.eql(["rapiro"]);
    });
  });

  describe("#adaptor", function() {
    it("returns a new instance of the Adaptor class", function() {
      var opts = { port: "/dev/null" };
      expect(rapiro.adaptor(opts)).to.be.an.instanceOf(Adaptor);
    });
  });

  describe("#driver", function() {
    it("returns a new instance of the Driver class", function() {
      expect(rapiro.driver({ adaptor: {} })).to.be.an.instanceOf(Driver);
    });
  });
});
