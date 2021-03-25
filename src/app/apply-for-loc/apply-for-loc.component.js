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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var loc_1 = require("./../loc");
var credit_type_service_1 = require("./../services/credit-types/credit-type.service");
var common_service_1 = require("./../services/common/common.service");
var loc_service_1 = require("./../loc.service");
var modal_1 = require("ngx-bootstrap/modal");
var status_service_1 = require("../services/status.service");
var refresh_service_1 = require("../services/refresh.service");
var tour_service_1 = require("../services/tour.service");
var identity_service_1 = require("../services/identity.service");
var material_1 = require("@angular/material");
var peers_component_1 = require("../peers/peers.component");
var graphical_transactions_service_1 = require("../services/graphical-transactions.service");
var ApplyForLocComponent = (function () {
    function ApplyForLocComponent(creditTypesService, commonService, locService, modalService, dialog, dialogRef, statusService, refreshService, identityService, tourService, gtService, data) {
        this.creditTypesService = creditTypesService;
        this.commonService = commonService;
        this.locService = locService;
        this.modalService = modalService;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.statusService = statusService;
        this.refreshService = refreshService;
        this.identityService = identityService;
        this.tourService = tourService;
        this.gtService = gtService;
        this.data = data;
        this.today = Date.now();
        this.loc = new loc_1.Loc();
        this.submitted = false;
    }
    ApplyForLocComponent.prototype.getCreditTypes = function () {
        var _this = this;
        this.creditTypesService.getCreditTypes().then(function (creditTypes) { return _this.creditTypes = creditTypes; });
    };
    ApplyForLocComponent.prototype.getCurrencies = function () {
        var _this = this;
        this.commonService.getCurrencies().then(function (currencies) { return _this.currencies = currencies; });
    };
    ApplyForLocComponent.prototype.getWeightUnits = function () {
        var _this = this;
        this.commonService.getWeightUnits().then(function (weightunits) { return _this.weightunits = weightunits; });
    };
    ApplyForLocComponent.prototype.getMe = function () {
        var _this = this;
        this.locService.getMe().then(function (me) { return _this.applicant = me.name; });
    };
    ApplyForLocComponent.prototype.createLoc = function () {
        var _this = this;
        if (!this.loc.issuer || !this.loc.advisingBank) {
            this.error = true;
            return;
        }
        this.error = false;
        this.refreshService.loading = true;
        this.locService.createLoc(this.loc).then(function (result) { return _this.callResponse(result); });
    };
    ApplyForLocComponent.prototype.callResponse = function (result) {
        this.close();
        this.statusService.status = result;
        this.refreshService.confirmMission();
        this.refreshService.loading = false;
        this.tourService.buyerTour.show('application-created');
    };
    ApplyForLocComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    ApplyForLocComponent.prototype.lookupIssuer = function () {
        var _this = this;
        var dialogRef = this.dialog.open(peers_component_1.PeersComponent);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.loc.issuer = _this.identityService.peer.name;
            _this.issuerGlow = false;
        });
    };
    ApplyForLocComponent.prototype.lookupAdvising = function () {
        var _this = this;
        var dialogRef = this.dialog.open(peers_component_1.PeersComponent);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.loc.advisingBank = _this.identityService.peer.name;
            _this.advisingGlow = false;
        });
    };
    ApplyForLocComponent.prototype.autoComplete = function () {
        var _this = this;
        var d = new Date();
        this.loc.applicationDate = d;
        this.loc.applicationId = this.data.purchaseOrder.purchaseOrderID;
        this.loc.typeCredit = 'SIGHT';
        this.loc.amount = '1300000 USD';
        var year = d.getFullYear() + 1;
        // TODO: Use a real date, instead of padded strings.
        var month = ("000" + d.getMonth()).slice(-2);
        var day = ("000" + d.getDay()).slice(-2);
        this.loc.expiryDate = year + "-" + month + "-" + day;
        this.loc.portLoadingAddress = 'The Port';
        this.loc.portLoadingCity = 'Shenzhen';
        this.loc.portLoadingCountry = 'CN';
        this.loc.portDischargeAddress = 'Maritime Centre';
        this.loc.portDischargeCity = 'Liverpool';
        this.loc.portDischargeCountry = 'UK';
        this.loc.goodsDescription = 'OLED 6" Screens';
        this.loc.goodsQuantity = 100000;
        this.loc.goodsWeight = 1000;
        this.loc.goodsWeightUnit = 'KG';
        this.loc.goodsUnitPrice = 13;
        this.loc.goodsPurchaseOrderRef = this.data.purchaseOrder.purchaseOrderID;
        this.loc.placePresentationCountry = 'UK';
        this.loc.placePresentationCity = 'Liverpool';
        this.loc.placePresentationState = 'Liverpool';
        this.loc.lastShipmentDate = this.loc.expiryDate;
        this.loc.periodPresentation = 1;
        this.loc.beneficiary = this.data.purchaseOrder.sellerName;
        this.identityService.getMe().then(function (response) { return _this.loc.applicant = response.json().me; });
        this.loc.issuer = '';
        this.loc.advisingBank = '';
        this.issuerGlow = true;
        this.advisingGlow = true;
    };
    ApplyForLocComponent.prototype.ngOnInit = function () {
        this.getMe();
        this.loc.applicant = this.applicant;
        this.loc.applicationId = this.data.purchaseOrder.purchaseOrderID;
        this.purchaseOrder = this.data;
    };
    ApplyForLocComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.gtService.setMarkers(this.loc.applicant, this.loc.issuer);
        this.createLoc();
    };
    return ApplyForLocComponent;
}());
ApplyForLocComponent = __decorate([
    core_1.Component({
        selector: 'apply-for-loc',
        templateUrl: './apply-for-loc.component.html',
        styleUrls: ['./apply-for-loc.component.css'],
        providers: [credit_type_service_1.CreditTypeService, common_service_1.CommonService, loc_service_1.LocService]
    }),
    __param(11, core_1.Inject(material_1.MAT_DIALOG_DATA)),
    __metadata("design:paramtypes", [credit_type_service_1.CreditTypeService,
        common_service_1.CommonService,
        loc_service_1.LocService,
        modal_1.BsModalService,
        material_1.MatDialog,
        material_1.MatDialogRef,
        status_service_1.StatusService,
        refresh_service_1.RefreshService,
        identity_service_1.IdentityService,
        tour_service_1.TourService,
        graphical_transactions_service_1.GraphicalTransactionsService, Object])
], ApplyForLocComponent);
exports.ApplyForLocComponent = ApplyForLocComponent;
//# sourceMappingURL=apply-for-loc.component.js.map