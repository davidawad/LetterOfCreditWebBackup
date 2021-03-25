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
require("rxjs/add/operator/switchMap");
var ship_modal_component_1 = require("../modals/ship-modal.component");
var status_service_1 = require("../services/status.service");
var refresh_service_1 = require("../services/refresh.service");
var Rx_1 = require("rxjs/Rx");
var ShipComponent = (function () {
    function ShipComponent(locService, modalComponent, refreshService, statusService) {
        this.locService = locService;
        this.modalComponent = modalComponent;
        this.refreshService = refreshService;
        this.statusService = statusService;
    }
    ShipComponent.prototype.confirm = function () {
        var _this = this;
        this.locService.shipGoods(this.id)
            .then(function () {
            _this.statusService.shipAnimation = true;
            Rx_1.Observable.timer(1300).subscribe(function (x) {
                _this.statusService.shipAnimation = false;
                _this.modalComponent.close();
                _this.refreshService.confirmMission();
            });
        })
            .catch(function () { return _this.modalComponent.close(); });
    };
    return ShipComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ShipComponent.prototype, "id", void 0);
ShipComponent = __decorate([
    core_1.Component({
        selector: 'ship',
        templateUrl: './ship.component.html',
        styleUrls: ['./ship.component.css']
    }),
    __metadata("design:paramtypes", [loc_service_1.LocService, ship_modal_component_1.ShipModalComponent,
        refresh_service_1.RefreshService, status_service_1.StatusService])
], ShipComponent);
exports.ShipComponent = ShipComponent;
//# sourceMappingURL=ship.component.js.map