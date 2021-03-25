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
var bol_1 = require("./../bol");
var docs_service_1 = require("./../services/docs.service");
var create_bol_modal_component_1 = require("./../modals/create-bol-modal.component");
var modal_1 = require("ngx-bootstrap/modal");
var loc_state_summary_1 = require("./../loc-state-summary");
var status_service_1 = require("../services/status.service");
var refresh_service_1 = require("../services/refresh.service");
var global = require("../globals");
var graphical_transactions_service_1 = require("../services/graphical-transactions.service");
var BillOfLadingComponent = (function () {
    function BillOfLadingComponent(docsService, modalComponent, modalService, statusService, refreshService, gtService) {
        this.docsService = docsService;
        this.modalComponent = modalComponent;
        this.modalService = modalService;
        this.statusService = statusService;
        this.refreshService = refreshService;
        this.gtService = gtService;
        this.bol = new bol_1.Bol();
        this.submitted = false;
    }
    BillOfLadingComponent.prototype.createBol = function () {
        var _this = this;
        this.bol.advisingBank = this.loc[0].advisory;
        this.bol.issuingBank = this.loc[0].issuer;
        this.refreshService.loading = true;
        this.gtService.setMarkers(global.sellerName, global.advisingBankName, global.issuingBankName, global.buyerName);
        this.docsService.createBol(this.bol)
            .then(function (result) { return _this.callResponse(result); })
            .catch(function (err) { return _this.refreshService.loading = false; });
    };
    BillOfLadingComponent.prototype.autoComplete = function () {
        var d = new Date();
        this.bol.billOfLadingId = this.loc[0].orderRef;
        this.bol.issueDate = d;
        this.bol.carrierOwner = 'Alice Shipping';
        this.bol.nameOfVessel = 'SurfRider';
        this.bol.goodsDescription = this.loc[0].description;
        this.bol.goodsQuantity = this.loc[0].quantity;
        this.bol.dateOfShipment = d;
        this.bol.portOfLoadingCountry = 'China';
        this.bol.portOfLoadingCity = 'Shenzhen';
        this.bol.portOfLoadingAddress = 'Dong Men Street';
        this.bol.portOfDischargeCountry = 'UK';
        this.bol.portOfDischargeCity = 'Liverpool';
        this.bol.portOfDischargeAddress = 'Maritime Centre';
        this.bol.shipper = this.loc[0].beneficiary;
        this.bol.notifyName = 'Analog Importers';
        this.bol.notifyAddress = '3 Smithdown Road. Liverpool, L2 6RE';
        this.bol.notifyPhone = '+447590043622';
        this.bol.consigneeName = this.loc[0].applicant;
        this.bol.consigneeAddress = '3 Smithdown Road. Liverpool, L2 6RE';
        this.bol.consigneePhone = '+447590043622';
        this.bol.grossWeight = 1000;
        this.bol.grossWeightUnit = 'KG';
        this.bol.placeOfReceiptCountry = 'UK';
        this.bol.placeOfReceiptCity = 'Liverpool';
        this.bol.buyer = this.bol.consigneeName;
        this.bol.advisingBank = this.loc[0].advisingBank;
    };
    BillOfLadingComponent.prototype.callResponse = function (result) {
        this.close();
        this.statusService.status = result;
        this.refreshService.confirmMission();
        this.refreshService.loading = false;
    };
    BillOfLadingComponent.prototype.close = function () {
        this.modalComponent.close();
    };
    BillOfLadingComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.createBol();
    };
    return BillOfLadingComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", loc_state_summary_1.LocStateSummary)
], BillOfLadingComponent.prototype, "loc", void 0);
BillOfLadingComponent = __decorate([
    core_1.Component({
        selector: 'bill-of-lading',
        templateUrl: './bill-of-lading.component.html',
        styleUrls: ['./bill-of-lading.component.css']
    }),
    __metadata("design:paramtypes", [docs_service_1.DocsService,
        create_bol_modal_component_1.CreateBolModalComponent,
        modal_1.BsModalService,
        status_service_1.StatusService,
        refresh_service_1.RefreshService,
        graphical_transactions_service_1.GraphicalTransactionsService])
], BillOfLadingComponent);
exports.BillOfLadingComponent = BillOfLadingComponent;
//# sourceMappingURL=bill-of-lading.component.js.map