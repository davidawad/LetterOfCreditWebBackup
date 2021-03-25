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
var tx_service_1 = require("./../services/tx.service");
var modal_1 = require("ngx-bootstrap/modal");
var refresh_service_1 = require("./../services/refresh.service");
var TransactionsComponent = (function () {
    function TransactionsComponent(txService, modalService, refreshService) {
        var _this = this;
        this.txService = txService;
        this.modalService = modalService;
        this.refreshService = refreshService;
        this.txs = [];
        refreshService.missionConfirmed$.subscribe(function (result) {
            _this.update();
        });
    }
    TransactionsComponent.prototype.update = function () {
        var _this = this;
        this.txService.getTransactions().then(function (txs) { return _this.txs = txs; });
    };
    TransactionsComponent.prototype.ngOnInit = function () {
        this.update();
    };
    return TransactionsComponent;
}());
TransactionsComponent = __decorate([
    core_1.Component({
        selector: 'app-transactions',
        templateUrl: './transactions.component.html',
        styleUrls: ['./transactions.component.scss']
    }),
    __metadata("design:paramtypes", [tx_service_1.TxService,
        modal_1.BsModalService,
        refresh_service_1.RefreshService])
], TransactionsComponent);
exports.TransactionsComponent = TransactionsComponent;
//# sourceMappingURL=transactions.component.js.map