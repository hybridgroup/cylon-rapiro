"use strict";

var module = source("cylon-rapiro");

var Adaptor = source('adaptor'),
    Driver = source('driver');

describe("cylon-rapiro", function() {
  describe("#register", function() {
    var bot, adaptor, driver;

    beforeEach(function() {
      bot = {}
      adaptor = bot.registerAdaptor = spy();
      driver = bot.registerDriver = spy();

      module.register(bot);
    });

    it("registers the 'rapiro' adaptor with the robot", function() {
      expect(adaptor).to.be.calledWith('cylon-rapiro', 'rapiro');
    });

    it("registers the 'rapiro' driver with the robot", function() {
      expect(driver).to.be.calledWith('cylon-rapiro', 'rapiro');
    });
  });

  describe("#adaptor", function() {
    it("returns a new instance of the Adaptor class", function() {
      var opts = { connection: { port: '/dev/null' } };
      expect(module.adaptor(opts)).to.be.an.instanceOf(Adaptor);
    });
  });

  describe("#driver", function() {
    it("returns a new instance of the Driver class", function() {
      expect(module.driver({ device: {} })).to.be.an.instanceOf(Driver);
    });
  });
});
