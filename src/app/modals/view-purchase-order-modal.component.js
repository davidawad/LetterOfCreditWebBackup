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
var modal_1 = require("ngx-bootstrap/modal");
var ViewPurchaseOrderModalComponent = (function () {
    function ViewPurchaseOrderModalComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
    }
    ViewPurchaseOrderModalComponent.prototype.close = function () {
        this.bsModalRef.hide();
    };
    return ViewPurchaseOrderModalComponent;
}());
ViewPurchaseOrderModalComponent = __decorate([
    core_1.Component({
        selector: 'modal-content',
        styleUrls: ['./modal.component.scss'],
        template: "\n  <div class=\"modal-main\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">{{title}}</h4>\n      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n    <purchase-order-view [ref]=\"[purchaseOrderID]\"></purchase-order-view>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">Close</button>\n    </div>\n  </div>\n  "
    }),
    __metadata("design:paramtypes", [modal_1.BsModalRef])
], ViewPurchaseOrderModalComponent);
exports.ViewPurchaseOrderModalComponent = ViewPurchaseOrderModalComponent;
//# sourceMappingURL=view-purchase-order-modal.component.js.map