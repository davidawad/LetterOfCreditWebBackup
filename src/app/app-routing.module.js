"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dashboard_issuer_component_1 = require("./dashboard-issuer/dashboard-issuer.component");
var dashboard_advising_component_1 = require("./dashboard-advising/dashboard-advising.component");
var dashboard_buyer_component_1 = require("./dashboard-buyer/dashboard-buyer.component");
var dashboard_seller_component_1 = require("./dashboard-seller/dashboard-seller.component");
var active_loc_component_1 = require("./active-loc/active-loc.component");
var apply_for_loc_component_1 = require("./apply-for-loc/apply-for-loc.component");
var approve_loc_component_1 = require("./approve-loc/approve-loc.component");
var bill_of_lading_component_1 = require("./bill-of-lading/bill-of-lading.component");
var purchase_order_component_1 = require("./purchase-order-create/purchase-order.component");
var ship_component_1 = require("./ship/ship.component");
var all_loc_seller_component_1 = require("./all-loc-seller/all-loc-seller.component");
var static_map_component_1 = require("./static-map/static-map.component");
var graphical_transactions_component_1 = require("./graphical-transactions/graphical-transactions.component");
var routes = [
    { path: 'approve/:id', component: approve_loc_component_1.ApproveLocComponent },
    { path: 'activeloc', component: active_loc_component_1.ActiveLocComponent },
    { path: 'buyer', component: dashboard_buyer_component_1.DashboardBuyerComponent },
    { path: 'seller', component: dashboard_seller_component_1.DashboardSellerComponent },
    { path: 'issuing', component: dashboard_issuer_component_1.DashboardIssuerComponent },
    { path: 'advising', component: dashboard_advising_component_1.DashboardAdvisingComponent },
    { path: 'applyforloc', component: apply_for_loc_component_1.ApplyForLocComponent },
    { path: 'billoflading', component: bill_of_lading_component_1.BillOfLadingComponent },
    { path: 'purchase-order', component: purchase_order_component_1.PurchaseOrderCreateComponent },
    { path: 'purchase-order/:id', component: purchase_order_component_1.PurchaseOrderCreateComponent },
    { path: 'ship/:id', component: ship_component_1.ShipComponent },
    { path: 'locsummary/:first', component: all_loc_seller_component_1.AllLocSellerComponent },
    { path: 'test', component: graphical_transactions_component_1.GraphicalTransactionsComponent },
    { path: 'map', component: static_map_component_1.StaticMapComponent },
    { path: '**', component: static_map_component_1.StaticMapComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map