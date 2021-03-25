"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Peer = (function () {
    function Peer() {
        this.peers = new Array();
    }
    Peer.prototype.deserialize = function (input) {
        var _this = this;
        input.peers.forEach(function (element) {
            var split = element.split(",");
            var peer = new Peer();
            peer.name = split[0].split("=")[1];
            peer.locality = split[1].split("=")[1];
            ;
            peer.country = split[2].split("=")[1];
            ;
            _this.peers.push(peer);
        });
        return this;
    };
    return Peer;
}());
exports.Peer = Peer;
//# sourceMappingURL=peer.js.map