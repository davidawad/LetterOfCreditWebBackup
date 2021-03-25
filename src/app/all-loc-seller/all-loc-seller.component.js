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
var modal_1 = require("ngx-bootstrap/modal");
var ship_modal_component_1 = require("./../modals/ship-modal.component");
var create_bol_modal_component_1 = require("./../modals/create-bol-modal.component");
var view_loc_state_modal_component_1 = require("./../modals/view-loc-state-modal.component");
var refresh_service_1 = require("../services/refresh.service");
var AllLocSellerComponent = (function () {
    function AllLocSellerComponent(locService, modalService, refreshService) {
        var _this = this;
        this.locService = locService;
        this.modalService = modalService;
        this.refreshService = refreshService;
        this.locs = [];
        refreshService.missionConfirmed$.subscribe(function (result) {
            _this.update();
        });
    }
    AllLocSellerComponent.prototype.shipGoods = function (id) {
        this.bsModalRef = this.modalService.show(ship_modal_component_1.ShipModalComponent);
        this.bsModalRef.content.title =
            "Confirm Shipped - " +
                this.locs.filter(function (x) { return x.orderRef === id; })[0].description;
        this.bsModalRef.content.orderId = id;
    };
    AllLocSellerComponent.prototype.addBol = function (loc) {
        this.bsModalRef = this.modalService.show(create_bol_modal_component_1.CreateBolModalComponent);
        this.bsModalRef.content.title = "Bill of Lading";
        this.bsModalRef.content.locSummary = loc;
    };
    AllLocSellerComponent.prototype.openLocModal = function (ref) {
        this.bsModalRef = this.modalService.show(view_loc_state_modal_component_1.ViewLocStateModalComponent, Object.assign({}, { class: "gray modal-lg" }));
        this.bsModalRef.content.title = "Letter of Credit";
        this.bsModalRef.content.locId = ref;
    };
    AllLocSellerComponent.prototype.rejectOrder = function (loc) { };
    AllLocSellerComponent.prototype.update = function () {
        var _this = this;
        this.locService.getActiveLocs().then(function (locs) { return (_this.locs = locs); });
    };
    AllLocSellerComponent.prototype.ngOnInit = function () {
        this.update();
    };
    return AllLocSellerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AllLocSellerComponent.prototype, "getAllUrl", void 0);
AllLocSellerComponent = __decorate([
    core_1.Component({
        selector: "all-loc-seller",
        templateUrl: "./all-loc-seller.component.html",
        styleUrls: ["./all-loc-seller.component.css"]
    }),
    __metadata("design:paramtypes", [loc_service_1.LocService,
        modal_1.BsModalService,
        refresh_service_1.RefreshService])
], AllLocSellerComponent);
exports.AllLocSellerComponent = AllLocSellerComponent;
//# sourceMappingURL=all-loc-seller.component.js.map