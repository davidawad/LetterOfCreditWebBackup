"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stats = (function () {
    function Stats() {
    }
    Stats.prototype.deserialize = function (input) {
        this.awaitingApproval = input.awaitingApproval;
        this.active = input.active;
        this.awaitingPayment = input.awaitingPayment;
        return this;
    };
    return Stats;
}());
exports.Stats = Stats;
//# sourceMappingURL=stats.js.map