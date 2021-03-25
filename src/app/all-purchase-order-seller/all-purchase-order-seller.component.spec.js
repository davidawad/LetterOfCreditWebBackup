"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var all_purchase_order_seller_component_1 = require("./all-purchase-order-seller.component");
describe('AllPurchaseOrderSellerComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [all_purchase_order_seller_component_1.AllPurchaseOrderSellerComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(all_purchase_order_seller_component_1.AllPurchaseOrderSellerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=all-purchase-order-seller.component.spec.js.map