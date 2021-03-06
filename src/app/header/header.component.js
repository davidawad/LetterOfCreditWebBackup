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
var platform_browser_1 = require("@angular/platform-browser");
var HeaderComponent = (function () {
    function HeaderComponent(locService, titleService) {
        this.locService = locService;
        this.titleService = titleService;
    }
    HeaderComponent.prototype.getMe = function () {
        var _this = this;
        this.locService.getMe().then(function (me) { return _this.setup(me.name); });
    };
    HeaderComponent.prototype.setup = function (me) {
        this.me = me;
        this.titleService.setTitle(me);
    };
    HeaderComponent.prototype.ngOnInit = function () {
        this.getMe();
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.css']
    }),
    __metadata("design:paramtypes", [loc_service_1.LocService, platform_browser_1.Title])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map