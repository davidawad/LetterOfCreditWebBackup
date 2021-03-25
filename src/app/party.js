"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Party = (function () {
    function Party() {
    }
    Party.prototype.deserialize = function (input) {
        this.name = input.me;
        return this;
    };
    Party.prototype.deserializeName = function (input) {
        this.name = input;
        return this;
    };
    return Party;
}());
exports.Party = Party;
//# sourceMappingURL=party.js.map