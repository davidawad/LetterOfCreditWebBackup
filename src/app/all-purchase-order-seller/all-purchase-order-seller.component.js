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
var docs_service_1 = require("./../services/docs.service");
var modal_1 = require("ngx-bootstrap/modal");
var refresh_service_1 = require("./../services/refresh.service");
var view_purchase_order_modal_component_1 = require("./../modals/view-purchase-order-modal.component");
var AllPurchaseOrderSellerComponent = (function () {
    function AllPurchaseOrderSellerComponent(docService, modalService, refreshService) {
        var _this = this;
        this.docService = docService;
        this.modalService = modalService;
        this.refreshService = refreshService;
        this.purchaseOrders = [];
        refreshService.missionConfirmed$.subscribe(function (result) {
            _this.update();
        });
    }
    AllPurchaseOrderSellerComponent.prototype.openPurchaseOrderModal = function (ref) {
        this.bsModalRef = this.modalService.show(view_purchase_order_modal_component_1.ViewPurchaseOrderModalComponent, Object.assign({}, { class: 'gray modal-lg' }));
        this.bsModalRef.content.title = 'PurchaseOrder';
        this.bsModalRef.content.purchaseOrderID = ref;
    };
    AllPurchaseOrderSellerComponent.prototype.update = function () {
        var _this = this;
        this.docService.getPurchaseOrders().then(function (purchaseOrders) { return _this.purchaseOrders = purchaseOrders; });
    };
    AllPurchaseOrderSellerComponent.prototype.ngOnInit = function () {
        this.update();
    };
    return AllPurchaseOrderSellerComponent;
}());
AllPurchaseOrderSellerComponent = __decorate([
    core_1.Component({
        selector: 'all-purchase-order-seller',
        templateUrl: './all-purchase-order-seller.component.html',
        styleUrls: ['./all-purchase-order-seller.component.scss']
    }),
    __metadata("design:paramtypes", [docs_service_1.DocsService,
        modal_1.BsModalService,
        refresh_service_1.RefreshService])
], AllPurchaseOrderSellerComponent);
exports.AllPurchaseOrderSellerComponent = AllPurchaseOrderSellerComponent;
//# sourceMappingURL=all-purchase-order-seller.component.js.map