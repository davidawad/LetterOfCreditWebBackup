"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NodeMarker = (function () {
    function NodeMarker() {
    }
    NodeMarker.prototype.deserialize = function (input) {
        var nameTypeAddress = input.title.split('|');
        this.id = input.id;
        this.name = nameTypeAddress[0].trim();
        if (nameTypeAddress.length > 2) {
            this.type = nameTypeAddress[1].trim();
            this.address = nameTypeAddress[2].trim();
        }
        this.lat = input.lat;
        this.lng = input.lng;
        return this;
    };
    return NodeMarker;
}());
exports.NodeMarker = NodeMarker;
//# sourceMappingURL=node-marker.js.map