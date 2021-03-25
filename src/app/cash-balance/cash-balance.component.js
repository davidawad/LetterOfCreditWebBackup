"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var loc_service_1 = require("./../loc.service");
var router_1 = require("@angular/router");
var refresh_service_1 = require("./../services/refresh.service");
var CashBalanceComponent = (function () {
    function CashBalanceComponent(locService, route, refreshService) {
        var _this = this;
        this.locService = locService;
        this.route = route;
        this.refreshService = refreshService;
        refreshService.missionConfirmed$.subscribe(function (result) {
            _this.getCashBalances();
        });
    }
    CashBalanceComponent.prototype.getCashBalances = function () {
        var _this = this;
        this.locService.getCashBalances().then(function (cashBalances) { return _this.cashBalances = cashBalances; });
    };
    CashBalanceComponent.prototype.ngOnInit = function () {
        this.getCashBalances();
    };
    return CashBalanceComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CashBalanceComponent.prototype, "node", void 0);
CashBalanceComponent = __decorate([
    core_1.Component({
        selector: 'cash-balance',
        templateUrl: './cash-balance.component.html',
        styleUrls: ['./cash-balance.component.css']
    }),
    __metadata("design:paramtypes", [loc_service_1.LocService,
        router_1.ActivatedRoute,
        refresh_service_1.RefreshService])
], CashBalanceComponent);
exports.CashBalanceComponent = CashBalanceComponent;
//# sourceMappingURL=cash-balance.component.js.map