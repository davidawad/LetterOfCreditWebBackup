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
var bol_1 = require("./../bol");
var bol_events_1 = require("./../bol-events");
var purchase_order_1 = require("./../purchase-order");
var tx_1 = require("./../tx");
require("rxjs/add/operator/toPromise");
var port_provider_service_1 = require("./port-provider.service");
var url_provider_service_1 = require("./url-provider.service");
var material_1 = require("@angular/material");
var error_feedback_component_1 = require("../error-feedback/error-feedback.component");
var refresh_service_1 = require("./refresh.service");
var DocsService = (function () {
    function DocsService(http, portService, urlService, dialog, refreshService) {
        this.http = http;
        this.portService = portService;
        this.urlService = urlService;
        this.dialog = dialog;
        this.refreshService = refreshService;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    DocsService.prototype.getUrl = function (path) {
        return this.urlService.url + ':' + this.portService.current + path;
    };
    DocsService.prototype.createBol = function (bol) {
        var _this = this;
        var url = this.getUrl('/api/loc/submit-bol');
        return this.http
            .post(url, JSON.stringify(bol), { headers: this.headers })
            .toPromise()
            .then(function (res) { return new tx_1.Tx().deserialize(res).txResponse; }, function (err) { return _this.handleError(err); });
    };
    DocsService.prototype.createPurchaseOrder = function (purchaseOrder) {
        var _this = this;
        var url = this.getUrl('/api/loc/create-trade');
        return this.http
            .post(url, JSON.stringify(purchaseOrder), { headers: this.headers })
            .toPromise()
            .then(function (res) { return new tx_1.Tx().deserialize(res).txResponse; }, function (err) { return _this.handleError(err); });
    };
    DocsService.prototype.getBol = function (id, requestor) {
        var _url = this.getUrl('/api/loc/get-bol');
        var url = _url + "?ref=" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return new bol_1.Bol().deserialize(response.json()); }, function (err) { return Promise.reject('Bill of lading not yet created.'); });
    };
    DocsService.prototype.getBolEvents = function (id, requestor) {
        var _this = this;
        var _url = this.getUrl('/api/loc/get-bol-events');
        var url = _url + "?ref=" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return new bol_events_1.BolEvents().deserialize(response.json()); }, function (err) { return _this.handleError(err); });
    };
    DocsService.prototype.getPurchaseOrders = function () {
        var _this = this;
        var url = this.getUrl('/api/loc/purchase-orders');
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return _this.createPurchaseOrderArray(response.json()); }, function (err) { return _this.handleError(err); });
    };
    DocsService.prototype.getPurchaseOrder = function (id) {
        var _url = this.getUrl('/api/loc/get-purchase-order');
        var url = _url + "?ref=" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return new purchase_order_1.PurchaseOrder().deserialize(response.json()); }, function (err) { return Promise.reject(err); });
    };
    DocsService.prototype.createPurchaseOrderArray = function (input) {
        var purchaseOrders = new Array();
        input.forEach(function (element) {
            var purchaseOrder = new purchase_order_1.PurchaseOrder().deserialize(element);
            purchaseOrders.push(purchaseOrder);
        });
        return purchaseOrders;
    };
    DocsService.prototype.handleError = function (response) {
        this.dialog.open(error_feedback_component_1.ErrorFeedbackComponent, { data: { error: response.text() } });
        this.refreshService.loading = false;
        return Promise.reject(response);
    };
    return DocsService;
}());
DocsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, port_provider_service_1.PortProviderService,
        url_provider_service_1.UrlProviderService, material_1.MatDialog,
        refresh_service_1.RefreshService])
], DocsService);
exports.DocsService = DocsService;
//# sourceMappingURL=docs.service.js.map