'use strict';

var module = source("cylon-rapiro");

describe("Cylon.Rapiro", function() {
  it("should be able to register", function() {
    module.register.should.be.a('function');
  });

  it("should be able to create adaptor", function() {
    module.adaptor.should.be.a('function');
  });
});
