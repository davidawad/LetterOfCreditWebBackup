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
var view_loc_state_modal_component_1 = require("./../modals/view-loc-state-modal.component");
var view_bol_modal_component_1 = require("./../modals/view-bol-modal.component");
var refresh_service_1 = require("../services/refresh.service");
var status_service_1 = require("../services/status.service");
var global = require("../globals");
var graphical_transactions_service_1 = require("../services/graphical-transactions.service");
var purchase_order_component_1 = require("../purchase-order-create/purchase-order.component");
var material_1 = require("@angular/material");
var tour_service_1 = require("../services/tour.service");
var AllLocBuyerComponent = (function () {
    function AllLocBuyerComponent(modalService, locService, refreshService, statusService, gtService, dialog, tourService) {
        var _this = this;
        this.modalService = modalService;
        this.locService = locService;
        this.refreshService = refreshService;
        this.statusService = statusService;
        this.gtService = gtService;
        this.dialog = dialog;
        this.tourService = tourService;
        this.locs = [];
        refreshService.missionConfirmed$.subscribe(function (result) {
            _this.update();
        });
    }
    AllLocBuyerComponent.prototype.createPurchaseOrder = function () {
        this.dialog.open(purchase_order_component_1.PurchaseOrderCreateComponent);
    };
    AllLocBuyerComponent.prototype.openLocModal = function (ref) {
        this.bsModalRef = this.modalService.show(view_loc_state_modal_component_1.ViewLocStateModalComponent, Object.assign({}, { class: 'gray modal-lg' }));
        this.bsModalRef.content.title = 'Letter of Credit';
        this.bsModalRef.content.locId = ref;
    };
    AllLocBuyerComponent.prototype.openBol = function (id) {
        this.bsModalRef = this.modalService.show(view_bol_modal_component_1.ViewBolModalComponent);
        this.bsModalRef.content.id = id;
        this.bsModalRef.content.title = 'Bill of Lading';
    };
    AllLocBuyerComponent.prototype.payIssuer = function (id) {
        var _this = this;
        this.refreshService.loading = true;
        this.locService.payIssuer(id)
            .then(function (response) { return _this.callResponse(response); })
            .catch(function (err) { return err; });
    };
    AllLocBuyerComponent.prototype.callResponse = function (result) {
        this.refreshService.loading = false;
        this.gtService.setMarkers(global.buyerName, global.issuingBankName);
        this.gtService.cash = true;
        this.statusService.status = result;
        this.refreshService.confirmMission();
        this.update();
    };
    AllLocBuyerComponent.prototype.update = function () {
        var _this = this;
        this.locService.getActiveLocs().then(function (locs) { return _this.locs = locs; });
    };
    AllLocBuyerComponent.prototype.ngOnInit = function () {
        this.update();
    };
    return AllLocBuyerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AllLocBuyerComponent.prototype, "getAllUrl", void 0);
AllLocBuyerComponent = __decorate([
    core_1.Component({
        selector: 'all-loc-buyer',
        templateUrl: './all-loc-buyer.component.html',
        styleUrls: ['./all-loc-buyer.component.css']
    }),
    __metadata("design:paramtypes", [modal_1.BsModalService,
        loc_service_1.LocService,
        refresh_service_1.RefreshService,
        status_service_1.StatusService,
        graphical_transactions_service_1.GraphicalTransactionsService, material_1.MatDialog, tour_service_1.TourService])
], AllLocBuyerComponent);
exports.AllLocBuyerComponent = AllLocBuyerComponent;
//# sourceMappingURL=all-loc-buyer.component.js.map