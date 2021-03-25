"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mock_currency_1 = require("./mock-currency");
var mock_weight_unit_1 = require("./mock-weight-unit");
var CommonService = (function () {
    function CommonService() {
    }
    CommonService.prototype.getCurrencies = function () {
        return Promise.resolve(mock_currency_1.CURRENCY);
    };
    CommonService.prototype.getWeightUnits = function () {
        return Promise.resolve(mock_weight_unit_1.WEIGHTUNIT);
    };
    return CommonService;
}());
CommonService = __decorate([
    core_1.Injectable()
], CommonService);
exports.CommonService = CommonService;
//# sourceMappingURL=common.service.js.map