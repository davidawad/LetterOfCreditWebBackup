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
require("rxjs/add/operator/toPromise");
var port_provider_service_1 = require("./port-provider.service");
var url_provider_service_1 = require("./url-provider.service");
var peer_with_port_1 = require("../peer-with-port");
var IdentityService = (function () {
    function IdentityService(http, portService, urlService) {
        this.http = http;
        this.portService = portService;
        this.urlService = urlService;
        this.scannedPeers = new Array();
        this.removedPeers = new Set();
    }
    IdentityService.prototype.getUrl = function (path) {
        return this.urlService.url + ':' + this.portService.current + path;
    };
    IdentityService.prototype.getMe = function () {
        var url = this.getUrl('/api/loc/me');
        return this.http.get(url)
            .toPromise();
    };
    IdentityService.prototype.getPeers = function () {
        var url = this.getUrl('/api/loc/peers');
        return this.http.get(url)
            .toPromise();
    };
    ;
    IdentityService.prototype.removeScannedPeer = function (peer) {
        this.removedPeers.add(peer);
    };
    IdentityService.prototype.addPeer = function (peer) {
        this.removedPeers.delete(peer);
    };
    IdentityService.prototype.sync = function (peers) {
        this.removedPeers.clear();
        var _loop_1 = function (p) {
            var peer = this_1.scannedPeers.filter(function (s) { return s.name === p.name; })[0];
            this_1.removedPeers.add(peer);
        };
        var this_1 = this;
        for (var _i = 0, peers_1 = peers; _i < peers_1.length; _i++) {
            var p = peers_1[_i];
            _loop_1(p);
        }
    };
    IdentityService.prototype.scanForPeers = function () {
        var _this = this;
        if (this.scannedPeers.length === 0) {
            var i = void 0;
            var _loop_2 = function () {
                var url = this_2.urlService.url + ':' + i + '/api/loc/me';
                var port = i;
                this_2.http.get(url)
                    .toPromise()
                    .then(function (response) { return _this.scannedPeers.push(new peer_with_port_1.PeerWithPort().deserialize(response.json().me + '|' + port)); })
                    .catch(this_2.handleError);
            };
            var this_2 = this;
            for (i = 10014; i <= 10023; i += 3) {
                _loop_2();
            }
        }
    };
    IdentityService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return IdentityService;
}());
IdentityService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, port_provider_service_1.PortProviderService, url_provider_service_1.UrlProviderService])
], IdentityService);
exports.IdentityService = IdentityService;
//# sourceMappingURL=identity.service.js.map