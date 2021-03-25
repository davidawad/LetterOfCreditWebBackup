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
var http_1 = require("@angular/http");
var tx_summary_1 = require("../tx-summary");
require("rxjs/add/operator/toPromise");
var port_provider_service_1 = require("../services/port-provider.service");
var url_provider_service_1 = require("../services/url-provider.service");
var material_1 = require("@angular/material");
var error_feedback_component_1 = require("../error-feedback/error-feedback.component");
var TxService = (function () {
    function TxService(http, portService, urlService, dialog) {
        this.http = http;
        this.portService = portService;
        this.urlService = urlService;
        this.dialog = dialog;
    }
    TxService.prototype.getUrl = function (path) {
        return this.urlService.url + ':' + this.portService.current + path;
    };
    TxService.prototype.getTransactions = function () {
        var _this = this;
        var url = this.getUrl('/api/loc/transactions');
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return _this.createTransactionSummaryArray(res.json()); }, function (err) { return _this.handleError(err); });
    };
    TxService.prototype.createTransactionSummaryArray = function (input) {
        var txSummaries = new Array();
        input.forEach(function (element) {
            var txSummary = new tx_summary_1.TxSummary().deserialize(element);
            txSummaries.push(txSummary);
        });
        return txSummaries;
    };
    TxService.prototype.handleError = function (response) {
        this.dialog.open(error_feedback_component_1.ErrorFeedbackComponent, { data: { error: response.text() } });
        return Promise.reject(response);
    };
    return TxService;
}());
TxService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, port_provider_service_1.PortProviderService,
        url_provider_service_1.UrlProviderService, material_1.MatDialog])
], TxService);
exports.TxService = TxService;
//# sourceMappingURL=tx.service.js.map