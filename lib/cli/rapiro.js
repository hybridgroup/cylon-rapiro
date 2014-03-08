var namespace = require('node-namespace'),
    path = require('path');

namespace('Cylon.CLI', function() {
  this.Rapiro = (function(_parent) {
    subclass(Rapiro, _parent)

    function Rapiro(serialPort, hexFile) {
      Rapiro.__super__.constructor.apply(this, arguments);

      this.bkpHexFile = path.join(__dirname, "hex/rapiro_v_0_0.cpp.hex");
      this.hexFile = (hexFile === null || hexFile === void 0) ? this.bkpHexFile : hexFile;
    }

    return Rapiro;

  })();
});
