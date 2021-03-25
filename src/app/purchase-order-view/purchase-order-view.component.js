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
var view_purchase_order_modal_component_1 = require("./../modals/view-purchase-order-modal.component");
var PurchaseOrderViewComponent = (function () {
    function PurchaseOrderViewComponent(docsService, modalComponent, modalService) {
        this.docsService = docsService;
        this.modalComponent = modalComponent;
        this.modalService = modalService;
    }
    PurchaseOrderViewComponent.prototype.close = function () {
        this.modalComponent.close();
    };
    PurchaseOrderViewComponent.prototype.isArray = function (val) { return val instanceof Array; };
    PurchaseOrderViewComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.ref[0] !== undefined) {
            this.docsService.getPurchaseOrder(this.ref).then(function (purchaseOrder) { return _this.purchaseOrder = purchaseOrder; });
        }
    };
    return PurchaseOrderViewComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PurchaseOrderViewComponent.prototype, "ref", void 0);
PurchaseOrderViewComponent = __decorate([
    core_1.Component({
        selector: 'purchase-order-view',
        templateUrl: './purchase-order-view.component.html',
        styleUrls: ['./purchase-order-view.component.css']
    }),
    __metadata("design:paramtypes", [docs_service_1.DocsService,
        view_purchase_order_modal_component_1.ViewPurchaseOrderModalComponent,
        modal_1.BsModalService])
], PurchaseOrderViewComponent);
exports.PurchaseOrderViewComponent = PurchaseOrderViewComponent;
//# sourceMappingURL=purchase-order-view.component.js.map