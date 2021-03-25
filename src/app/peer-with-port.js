"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PeerWithPort = (function () {
    function PeerWithPort() {
    }
    PeerWithPort.prototype.deserialize = function (input) {
        var split = input.split("|");
        this.name = split[0];
        this.port = split[1];
        return this;
    };
    ;
    return PeerWithPort;
}());
exports.PeerWithPort = PeerWithPort;
//# sourceMappingURL=peer-with-port.js.map