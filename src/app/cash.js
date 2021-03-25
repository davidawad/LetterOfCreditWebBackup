"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cash = (function () {
    function Cash() {
    }
    Cash.prototype.deserialize = function (input) {
        var temp = input.USD;
        this.currency = Object.keys(input)[0];
        this.amount = temp.substring(0, temp.length - 7);
        return this;
    };
    return Cash;
}());
exports.Cash = Cash;
//# sourceMappingURL=cash.js.map