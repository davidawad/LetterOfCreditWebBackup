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
var MapLegendComponent = (function () {
    function MapLegendComponent(identityService) {
        this.identityService = identityService;
    }
    MapLegendComponent.prototype.ngOnInit = function () {
        this.peers = new Array();
        this.identityService.scanForPeers();
    };
    return MapLegendComponent;
}());
MapLegendComponent = __decorate([
    core_1.Component({
        selector: 'app-map-legend',
        templateUrl: './map-legend.component.html',
        styleUrls: ['./map-legend.component.scss']
    }),
    __metadata("design:paramtypes", [identity_service_1.IdentityService])
], MapLegendComponent);
exports.MapLegendComponent = MapLegendComponent;
//# sourceMappingURL=map-legend.component.js.map