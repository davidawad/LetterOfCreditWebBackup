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
var identity_service_1 = require("../services/identity.service");
var router_1 = require("@angular/router");
var LogoComponent = (function () {
    function LogoComponent(identityService, router) {
        this.identityService = identityService;
        this.router = router;
        this.folder = 'assets/';
    }
    LogoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.identityService.getMe().then(function (response) { return _this.me = response.json().me; });
        switch (this.router.url) {
            case '/seller':
                this.logoImagePath = this.folder + 'seller.png';
                break;
            case '/buyer':
                this.logoImagePath = this.folder + 'buyer.png';
                break;
            case '/advising':
                this.logoImagePath = this.folder + 'advising.png';
                break;
            case '/issuing':
                this.logoImagePath = this.folder + 'issuing.png';
                break;
            default:
                this.logoImagePath = this.folder + this.identityService.current + '.png';
        }
    };
    return LogoComponent;
}());
LogoComponent = __decorate([
    core_1.Component({
        selector: 'app-logo',
        templateUrl: './logo.component.html',
        styleUrls: ['./logo.component.scss']
    }),
    __metadata("design:paramtypes", [identity_service_1.IdentityService, router_1.Router])
], LogoComponent);
exports.LogoComponent = LogoComponent;
//# sourceMappingURL=logo.component.js.map