"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TxSummary = (function () {
    function TxSummary() {
    }
    TxSummary.prototype.deserialize = function (input) {
        this.hash = input.hash.substring(0, 8);
        this.inputs = input.inputs;
        this.outputs = input.outputs;
        this.signers = input.signers;
        return this;
    };
    return TxSummary;
}());
exports.TxSummary = TxSummary;
//# sourceMappingURL=tx-summary.js.map