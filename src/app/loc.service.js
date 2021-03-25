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
var loc_1 = require("./loc");
var loc_state_1 = require("./loc-state");
var loc_summary_1 = require("./loc-summary");
var loc_state_summary_1 = require("./loc-state-summary");
var cash_1 = require("./cash");
var party_1 = require("./party");
var stats_1 = require("./stats");
var tx_1 = require("./tx");
require("rxjs/add/operator/toPromise");
var port_provider_service_1 = require("./services/port-provider.service");
var url_provider_service_1 = require("./services/url-provider.service");
var material_1 = require("@angular/material");
var error_feedback_component_1 = require("./error-feedback/error-feedback.component");
var refresh_service_1 = require("./services/refresh.service");
var LocService = (function () {
    function LocService(http, portService, urlService, dialog, refreshService) {
        this.http = http;
        this.portService = portService;
        this.urlService = urlService;
        this.dialog = dialog;
        this.refreshService = refreshService;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    LocService.prototype.getLocApp = function (id) {
        var _this = this;
        var _url = this.getUrl('/api/loc/get-loc-app');
        var trimmedId = id[0];
        var url = _url + "?ref=" + trimmedId;
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return new loc_1.Loc().deserialize(res.json()); }, function (err) { return _this.handleError(err); });
    };
    LocService.prototype.getUrl = function (path) {
        return this.urlService.url + ':' + this.portService.current + path;
    };
    LocService.prototype.getLoc = function (id) {
        var _this = this;
        var _url = this.getUrl('/api/loc/get-loc');
        var trimmedId = id[0];
        var url = _url + "?ref=" + trimmedId;
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return new loc_state_1.LocState().deserialize(res.json()); }, function (err) { return _this.handleError(err); });
    };
    LocService.prototype.getAllLocApps = function (node) {
        var _this = this;
        var url = this.getUrl('/api/loc/all-app');
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return _this.createLocSummaryArray(res.json()); }, function (err) { return _this.handleError(err); });
    };
    LocService.prototype.getAwaitingApprovalLocs = function () {
        var _this = this;
        var url = this.getUrl('/api/loc/awaiting-approval');
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return _this.createLocSummaryArray(res.json()); }, function (err) { return _this.handleError(err); });
    };
    LocService.prototype.getAwaitingApprovalLocsIssuer = function () {
        var _this = this;
        var url = this.getUrl('/api/loc/awaiting-approval');
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return _this.createLocSummaryArray(response.json()); }, function (err) { return _this.handleError(err); });
    };
    LocService.prototype.getActiveLocsApps = function () {
        var _this = this;
        var url = this.getUrl('/api/loc/active');
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return _this.createLocSummaryArray(response.json()); }, function (err) { return _this.handleError(err); });
    };
    LocService.prototype.getActiveLocs = function () {
        var _this = this;
        var url = this.getUrl('/api/loc/all');
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return _this.createLocStateSummaryArray(res.json()); }, function (err) { return _this.handleError(err); });
    };
    LocService.prototype.getAllLocs = function () {
        var _this = this;
        var url = this.getUrl('/api/loc/all');
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return _this.createLocSummaryArray(res.json()); }, function (err) { return _this.handleError(err); });
    };
    LocService.prototype.getAwaitingPaymentLocs = function () {
        var _this = this;
        var url = this.getUrl('/api/loc/awaiting-payment');
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return _this.createLocSummaryArray(res.json()); }, function (err) { return _this.handleError(err); });
    };
    LocService.prototype.getCashBalances = function () {
        var _this = this;
        var url = this.getUrl('/api/loc/cash-balances');
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return new cash_1.Cash().deserialize(res.json()); }, function (err) { return _this.handleError(err); });
    };
    LocService.prototype.getMe = function () {
        var _this = this;
        var url = this.getUrl('/api/loc/me');
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return new party_1.Party().deserialize(res.json()); }, function (err) { return _this.handleError(err); });
    };
    LocService.prototype.getPeers = function () {
        var _this = this;
        var url = this.getUrl('/api/loc/peers');
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return _this.createPartyArray(res.json()); }, function (err) { return _this.handleError(err); });
    };
    LocService.prototype.getStats = function () {
        var _this = this;
        var url = this.getUrl('/api/loc/loc-stats');
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return new stats_1.Stats().deserialize(res.json()); }, function (err) { return _this.handleError(err); });
    };
    LocService.prototype.createLoc = function (loc) {
        var _this = this;
        var url = this.getUrl('/api/loc/apply-for-loc');
        return this.http
            .post(url, JSON.stringify(loc), { headers: this.headers })
            .toPromise()
            .then(function (res) { return new tx_1.Tx().deserialize(res).txResponse; }, function (err) { return _this.handleError(err); });
    };
    LocService.prototype.approveLoc = function (ref) {
        var _this = this;
        var _url = this.getUrl('/api/loc/approve-loc');
        var url = _url + "?ref=" + ref;
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return new tx_1.Tx().deserialize(res).txResponse; }, function (err) { return _this.handleError(err); });
    };
    LocService.prototype.paySeller = function (ref) {
        var _this = this;
        var _url = this.getUrl('/api/loc/pay-seller');
        var url = _url + "?locId=" + ref;
        return this.http.get(url).toPromise()
            .then(function (res) { return new tx_1.Tx().deserialize(res).txResponse; }, function (err) { return _this.handleError(err); });
    };
    LocService.prototype.payAdviser = function (ref) {
        var _this = this;
        var _url = this.getUrl('/api/loc/pay-adviser');
        var url = _url + "?locId=" + ref;
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return new tx_1.Tx().deserialize(res).txResponse; }, function (err) { return _this.handleError(err); });
    };
    LocService.prototype.payIssuer = function (ref) {
        var _this = this;
        var _url = this.getUrl('/api/loc/pay-issuer');
        var url = _url + "?locId=" + ref;
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return new tx_1.Tx().deserialize(res).txResponse; }, function (err) { return _this.handleError(err); });
    };
    LocService.prototype.createPartyArray = function (input) {
        var parties = new Array();
        input.peers.forEach(function (element) {
            var party = new party_1.Party().deserializeName(element);
            parties.push(party);
        });
        return parties;
    };
    LocService.prototype.createLocSummaryArray = function (input) {
        var locSummaries = new Array();
        input.forEach(function (element) {
            var locSummary = new loc_summary_1.LocSummary().deserialize(element);
            locSummaries.push(locSummary);
        });
        return locSummaries;
    };
    LocService.prototype.createLocStateSummaryArray = function (input) {
        var locStateSummaries = new Array();
        input.forEach(function (element) {
            var locStateSummary = new loc_state_summary_1.LocStateSummary().deserialize(element);
            locStateSummaries.push(locStateSummary);
        });
        return locStateSummaries;
    };
    LocService.prototype.shipGoods = function (ref) {
        var _this = this;
        var _url = this.getUrl('/api/loc/ship');
        var url = _url + "?ref=" + ref;
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return new tx_1.Tx().deserialize(res).txResponse; }, function (err) { return _this.handleError(err); });
    };
    LocService.prototype.handleError = function (response) {
        this.dialog.open(error_feedback_component_1.ErrorFeedbackComponent, { data: { error: response.text() } });
        this.refreshService.loading = false;
        return Promise.reject(response);
    };
    return LocService;
}());
LocService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, port_provider_service_1.PortProviderService,
        url_provider_service_1.UrlProviderService, material_1.MatDialog,
        refresh_service_1.RefreshService])
], LocService);
exports.LocService = LocService;
//# sourceMappingURL=loc.service.js.map