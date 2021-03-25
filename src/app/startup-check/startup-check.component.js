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
var port_provider_service_1 = require("../services/port-provider.service");
var router_1 = require("@angular/router");
var StartupCheckComponent = (function () {
    function StartupCheckComponent(http, router, portProvider) {
        this.http = http;
        this.router = router;
        this.portProvider = portProvider;
    }
    StartupCheckComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () { _this.scanForNodes(); }, 3000);
    };
    StartupCheckComponent.prototype.scanForNodes = function () {
        var _this = this;
        var index = 0;
        console.log('running');
        for (var _i = 0, _a = this.portProvider.nodes; _i < _a.length; _i++) {
            var i = _a[_i];
            var url = 'http://localhost:' + i + '/api/loc/me';
            this.http.get(url)
                .toPromise()
                .then(function (response) { return _this.portProvider.nodes = _this.portProvider.nodes.splice(index, 1); });
            index++;
        }
        if (this.portProvider.nodes.length === 0) {
            this.router.navigate(['/map']);
        }
    };
    return StartupCheckComponent;
}());
StartupCheckComponent = __decorate([
    core_1.Component({
        selector: 'app-startup-check',
        templateUrl: './startup-check.component.html',
        styleUrls: ['./startup-check.component.scss']
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router, port_provider_service_1.PortProviderService])
], StartupCheckComponent);
exports.StartupCheckComponent = StartupCheckComponent;
//# sourceMappingURL=startup-check.component.js.map