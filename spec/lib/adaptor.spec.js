"use strict";

var serialport = require('serialport'),
    Cylon = require('cylon');

var Adaptor = source("adaptor");

describe("Cylon.Adaptors.Rapiro", function() {
  var adaptor;

  beforeEach(function() {
    adaptor = new Adaptor({
      port: "/dev/null"
    })
  });

  it("subclasses Cylon.Adaptor", function() {
    expect(adaptor).to.be.an.instanceOf(Cylon.Adaptor);
    expect(adaptor).to.be.an.instanceOf(Adaptor);
  });

  describe("#constructor", function() {
    it('sets @serialPort to a SerialPort instance', function() {
      expect(adaptor.serialPort).to.be.a.instanceOf(serialport.SerialPort);
      expect(adaptor.serialPort.path).to.be.eql("/dev/null");
    });
  });

  describe("#connect", function() {
    var open, callback;

    beforeEach(function() {
      adaptor.serialPort = { open: stub() };

      callback = spy();
      open = adaptor.serialPort.open;
    });

    it('tells the serialport to open', function() {
      adaptor.connect(callback);
      expect(open).to.be.called;
    })

    context("when the serialport is open", function() {
      beforeEach(function() {
        open.yields();
        adaptor.emit = spy();
        adaptor.connect(callback);
      });

      it("triggers the callback", function() {
        expect(callback).to.be.called;
      });

      it("emits the 'connect' event", function() {
        expect(adaptor.emit).to.be.calledWith('connect');
      });
    });
  });

  describe("#disconnect", function() {
    var pause, flush, close, emit, callback;

    beforeEach(function() {
      adaptor.serialPort = {};
      emit = adaptor.emit = spy();

      pause = adaptor.serialPort.pause = spy();
      flush = adaptor.serialPort.flush = stub();
      close = adaptor.serialPort.close = stub();

      callback = spy();
    });

    it("pauses the serialport", function() {
      adaptor.disconnect(callback);
      expect(pause).to.be.called;
    });

    it("flushes the serialport", function() {
      adaptor.disconnect(callback);
      expect(flush).to.be.called;
    });

    context("after the serialport is flushed", function() {
      beforeEach(function() {
        flush.yields();
        adaptor.disconnect(callback);
      });

      it("closes the serialport", function() {
        expect(close).to.be.called;
      });
    });

    context("after the serialport is closed", function() {
      beforeEach(function() {
        flush.yields();
        close.yields();
        adaptor.disconnect(callback);
      });

      it("emits the 'disconnect' event", function() {
        expect(emit).to.be.calledWith('disconnect');
      });

      it("triggers the callback", function() {
        expect(callback).to.be.called;
      });
    });
  });

  describe("#commands", function() {
    it("is an array of Rapiro commands", function() {
      var commands = adaptor.commands;
      expect(commands).to.be.an('array');

      commands.forEach(function(command) {
        expect(command).to.be.a('string');
      });
    });
  });

  describe("#write", function() {
    beforeEach(function() {
      adaptor.serialPort = { write: spy() };
    });

    it("tells the serialport to write data", function() {
      adaptor.write("hello, world!");
      expect(adaptor.serialPort.write).to.be.calledWith("hello, world!");
    });
  });
});
