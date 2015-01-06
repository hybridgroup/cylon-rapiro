// jshint expr:true
"use strict";

var Cylon = require("cylon");

var Driver = source("driver");

describe("Cylon.Drivers.Rapiro", function() {
  var driver;

  beforeEach(function() {
    driver = new Driver({ connection: {} });
  });

  it("subclasses Cylon.Driver", function() {
    expect(driver).to.be.an.instanceOf(Cylon.Driver);
    expect(driver).to.be.an.instanceOf(Driver);
  });

  describe("#commands", function() {
    it("is an object containing Rapiro commands", function() {
      for (var c in driver.commands) {
        expect(driver.commands[c]).to.be.a("function");
      }
    });
  });

  describe("#move", function() {
    beforeEach(function() {
      driver.connection = { write: spy() };
    });

    it("writes the motion number to the connection", function() {
      driver.move(10);
      expect(driver.connection.write).to.be.calledWith("#M10");
    });
  });

  describe("#stop", function() {
    it("calls the #move method", function() {
      driver.move = spy();
      driver.stop();
      expect(driver.move).to.be.calledWith(0);
    });
  });

  describe("#forward", function() {
    it("calls the #move method", function() {
      driver.move = spy();
      driver.forward();
      expect(driver.move).to.be.calledWith(1);
    });
  });

  describe("#backward", function() {
    it("calls the #move method", function() {
      driver.move = spy();
      driver.backward();
      expect(driver.move).to.be.calledWith(2);
    });
  });

  describe("#right", function() {
    it("calls the #move method", function() {
      driver.move = spy();
      driver.right();
      expect(driver.move).to.be.calledWith(3);
    });
  });

  describe("#left", function() {
    it("calls the #move method", function() {
      driver.move = spy();
      driver.left();
      expect(driver.move).to.be.calledWith(4);
    });
  });

  describe("#happy", function() {
    it("calls the #move method", function() {
      driver.move = spy();
      driver.happy();
      expect(driver.move).to.be.calledWith(5);
    });
  });

  describe("#unhappy", function() {
    it("calls the #move method", function() {
      driver.move = spy();
      driver.unhappy();
      expect(driver.move).to.be.calledWith(6);
    });
  });

  describe("#concerned", function() {
    it("calls the #move method", function() {
      driver.move = spy();
      driver.concerned();
      expect(driver.move).to.be.calledWith(7);
    });
  });

  describe("#mad", function() {
    it("calls the #move method", function() {
      driver.move = spy();
      driver.mad();
      expect(driver.move).to.be.calledWith(8);
    });
  });

  describe("#push", function() {
    it("calls the #move method", function() {
      driver.move = spy();
      driver.push();
      expect(driver.move).to.be.calledWith(9);
    });
  });

  describe("#led", function() {
    beforeEach(function() {
      driver.connection = { write: spy() };
    });

    it("writes the LED values to the connection", function() {
      var write = driver.connection.write;
      driver.led(255, 0, 10);
      expect(write).to.be.calledWith("#P");
      expect(write).to.be.calledWith("R255");
      expect(write).to.be.calledWith("G000");
      expect(write).to.be.calledWith("B010");
      expect(write).to.be.calledWith("T001");
    });
  });

  describe("#setServo", function() {
    beforeEach(function() {
      driver.connection = { write: spy() };
    });

    it("writes servo values to the connection", function() {
      var write = driver.connection.write;
      driver.setServo(1, 180);
      expect(write).to.be.calledWith("#P");
      expect(write).to.be.calledWith("S01");
      expect(write).to.be.calledWith("A180");
      expect(write).to.be.calledWith("T001");
    });
  });

  describe("#head", function() {
    it("sets the appropriate servo to the provided value", function() {
      driver.setServo = spy();
      driver.head(180);
      expect(driver.setServo).to.be.calledWith(0, 180);
    });
  });

  describe("#waist", function() {
    it("sets the appropriate servo to the provided value", function() {
      driver.setServo = spy();
      driver.waist(180);
      expect(driver.setServo).to.be.calledWith(1, 180);
    });
  });

  describe("#rightShoulderRoll", function() {
    it("sets the appropriate servo to the provided value", function() {
      driver.setServo = spy();
      driver.rightShoulderRoll(180);
      expect(driver.setServo).to.be.calledWith(2, 180);
    });
  });

  describe("#rightShoulderPitch", function() {
    it("sets the appropriate servo to the provided value", function() {
      driver.setServo = spy();
      driver.rightShoulderPitch(180);
      expect(driver.setServo).to.be.calledWith(3, 180);
    });
  });

  describe("#rightHand", function() {
    it("sets the appropriate servo to the provided value", function() {
      driver.setServo = spy();
      driver.rightHand(180);
      expect(driver.setServo).to.be.calledWith(4, 180);
    });
  });

  describe("#leftShoulderRoll", function() {
    it("sets the appropriate servo to the provided value", function() {
      driver.setServo = spy();
      driver.leftShoulderRoll(180);
      expect(driver.setServo).to.be.calledWith(5, 180);
    });
  });

  describe("#leftShoulderPitch", function() {
    it("sets the appropriate servo to the provided value", function() {
      driver.setServo = spy();
      driver.leftShoulderPitch(180);
      expect(driver.setServo).to.be.calledWith(6, 180);
    });
  });

  describe("#leftHand", function() {
    it("sets the appropriate servo to the provided value", function() {
      driver.setServo = spy();
      driver.leftHand(180);
      expect(driver.setServo).to.be.calledWith(7, 180);
    });
  });

  describe("#rightFootYaw", function() {
    it("sets the appropriate servo to the provided value", function() {
      driver.setServo = spy();
      driver.rightFootYaw(180);
      expect(driver.setServo).to.be.calledWith(8, 180);
    });
  });

  describe("#rightFootPitch", function() {
    it("sets the appropriate servo to the provided value", function() {
      driver.setServo = spy();
      driver.rightFootPitch(180);
      expect(driver.setServo).to.be.calledWith(9, 180);
    });
  });

  describe("#leftFootYaw", function() {
    it("sets the appropriate servo to the provided value", function() {
      driver.setServo = spy();
      driver.leftFootYaw(180);
      expect(driver.setServo).to.be.calledWith(10, 180);
    });
  });

  describe("#leftFootPitch", function() {
    it("sets the appropriate servo to the provided value", function() {
      driver.setServo = spy();
      driver.leftFootPitch(180);
      expect(driver.setServo).to.be.calledWith(11, 180);
    });
  });
});
