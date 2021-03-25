"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tx = (function () {
    function Tx() {
    }
    Tx.prototype.deserialize = function (input) {
        this.txResponse = input._body;
        return this;
    };
    Tx.prototype.text = function (input) {
        this.txResponse = input;
        return this;
    };
    return Tx;
}());
exports.Tx = Tx;
//# sourceMappingURL=tx.js.map