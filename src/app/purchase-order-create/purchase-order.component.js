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
var purchase_order_1 = require("./../purchase-order");
var docs_service_1 = require("./../services/docs.service");
var status_service_1 = require("../services/status.service");
var refresh_service_1 = require("../services/refresh.service");
var tour_service_1 = require("../services/tour.service");
var identity_service_1 = require("../services/identity.service");
var peers_component_1 = require("../peers/peers.component");
var material_1 = require("@angular/material");
var graphical_transactions_service_1 = require("../services/graphical-transactions.service");
var PurchaseOrderCreateComponent = (function () {
    function PurchaseOrderCreateComponent(docsService, dialog, statusService, refreshService, identityService, tourService, dialog2, gtService) {
        this.docsService = docsService;
        this.dialog = dialog;
        this.statusService = statusService;
        this.refreshService = refreshService;
        this.identityService = identityService;
        this.tourService = tourService;
        this.dialog2 = dialog2;
        this.gtService = gtService;
        this.purchaseOrder = new purchase_order_1.PurchaseOrder();
        this.submitted = false;
    }
    PurchaseOrderCreateComponent.prototype.lookupSeller = function () {
        var _this = this;
        var dialogRef = this.dialog.open(peers_component_1.PeersComponent, { viewContainerRef: this.vc });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.purchaseOrder.sellerName = _this.identityService.peer.name;
            _this.glow = false;
        });
    };
    PurchaseOrderCreateComponent.prototype.createPurchaseOrder = function () {
        var _this = this;
        if (!this.purchaseOrder.buyerName) {
            this.error = true;
            return;
        }
        this.error = false;
        this.refreshService.loading = true;
        this.docsService.createPurchaseOrder(this.purchaseOrder).then(function (result) { return _this.callResponse(result); });
        this.gtService.setMarkers(this.purchaseOrder.buyerName, this.purchaseOrder.sellerName);
        this.close();
    };
    PurchaseOrderCreateComponent.prototype.autoComplete = function () {
        var _this = this;
        this.identityService.getMe().then(function (response) { return _this.purchaseOrder.buyerName = response.json().me; });
        var d = new Date();
        this.purchaseOrder.purchaseOrderDate = d;
        this.purchaseOrder.purchaseOrderID = Math.round(Math.random() * 1000000).toString();
        this.purchaseOrder.sellerName = '';
        this.purchaseOrder.sellerAddress = 'Dong Men Street';
        this.purchaseOrder.buyerAddress = '3 Smithdown Road. Liverpool, L2 6RE';
        this.purchaseOrder.term = 5;
        this.purchaseOrder.goodsDescription = 'OLED 6" Screens';
        this.purchaseOrder.goodsPurchaseOrderRef = 'REF' + Math.round(Math.random() * 1000000).toString();
        this.purchaseOrder.goodsQuantity = 100000;
        this.purchaseOrder.goodsUnitPrice = 13;
        this.purchaseOrder.goodsGrossWeight = 1000;
        this.glow = true;
    };
    PurchaseOrderCreateComponent.prototype.callResponse = function (result) {
        var _this = this;
        this.statusService.status = result;
        this.refreshService.confirmMission();
        setTimeout(function () { return _this.tourService.sellerTour.show('purchase-order-created'); }, 5000);
        this.refreshService.loading = false;
    };
    PurchaseOrderCreateComponent.prototype.close = function () {
        this.dialog2.close();
    };
    PurchaseOrderCreateComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.createPurchaseOrder();
    };
    return PurchaseOrderCreateComponent;
}());
__decorate([
    core_1.ViewChild('PurchaseOrder', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], PurchaseOrderCreateComponent.prototype, "vc", void 0);
PurchaseOrderCreateComponent = __decorate([
    core_1.Component({
        selector: 'create-purchase-order',
        templateUrl: './purchase-order.component.html',
        styleUrls: ['./purchase-order.component.css']
    }),
    __metadata("design:paramtypes", [docs_service_1.DocsService,
        material_1.MatDialog,
        status_service_1.StatusService,
        refresh_service_1.RefreshService,
        identity_service_1.IdentityService,
        tour_service_1.TourService,
        material_1.MatDialogRef,
        graphical_transactions_service_1.GraphicalTransactionsService])
], PurchaseOrderCreateComponent);
exports.PurchaseOrderCreateComponent = PurchaseOrderCreateComponent;
//# sourceMappingURL=purchase-order.component.js.map