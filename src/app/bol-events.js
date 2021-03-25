"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BolEvents = (function () {
    function BolEvents() {
        this.dict = [];
    }
    BolEvents.prototype.deserialize = function (input) {
        var _this = this;
        input.forEach(function (element) {
            _this.dict.push({
                key: element.first,
                value: element.second
            });
        });
        return this;
    };
    return BolEvents;
}());
exports.BolEvents = BolEvents;
//# sourceMappingURL=bol-events.js.map