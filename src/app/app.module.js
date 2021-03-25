"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var material_1 = require("@angular/material");
var material_2 = require("@angular/material");
var material_3 = require("@angular/material");
var app_routing_module_1 = require("./app-routing.module");
var refresh_service_1 = require("./services/refresh.service");
var app_component_1 = require("./app.component");
var active_loc_component_1 = require("./active-loc/active-loc.component");
var apply_for_loc_component_1 = require("./apply-for-loc/apply-for-loc.component");
var loc_service_1 = require("./loc.service");
var docs_service_1 = require("./services/docs.service");
var credit_type_service_1 = require("./services/credit-types/credit-type.service");
var common_service_1 = require("./services/common/common.service");
var issuing_bank_service_1 = require("./services/issuing-bank.service");
var advising_bank_service_1 = require("./services/advising-bank.service");
var header_component_1 = require("./header/header.component");
var awaiting_approval_component_1 = require("./awaiting-approval/awaiting-approval.component");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var date_picker_component_1 = require("./helpers/date-picker/date-picker.component");
var ngx_bootstrap_2 = require("ngx-bootstrap");
var docs_modal_component_1 = require("./modals/docs-modal.component");
var ship_modal_component_1 = require("./modals/ship-modal.component");
var create_bol_modal_component_1 = require("./modals/create-bol-modal.component");
var view_purchase_order_modal_component_1 = require("./modals/view-purchase-order-modal.component");
var approve_loc_modal_component_1 = require("./modals/approve-loc-modal.component");
var view_loc_state_modal_component_1 = require("./modals/view-loc-state-modal.component");
var view_loc_app_modal_component_1 = require("./modals/view-loc-app-modal.component");
var view_bol_modal_component_1 = require("./modals/view-bol-modal.component");
var cash_balance_component_1 = require("./cash-balance/cash-balance.component");
var all_loc_component_1 = require("./all-loc/all-loc.component");
var all_loc_seller_component_1 = require("./all-loc-seller/all-loc-seller.component");
var approve_loc_component_1 = require("./approve-loc/approve-loc.component");
var bill_of_lading_component_1 = require("./bill-of-lading/bill-of-lading.component");
var purchase_order_component_1 = require("./purchase-order-create/purchase-order.component");
var purchase_order_view_component_1 = require("./purchase-order-view/purchase-order-view.component");
var dashboard_issuer_component_1 = require("./dashboard-issuer/dashboard-issuer.component");
var dashboard_advising_component_1 = require("./dashboard-advising/dashboard-advising.component");
var dashboard_buyer_component_1 = require("./dashboard-buyer/dashboard-buyer.component");
var dashboard_seller_component_1 = require("./dashboard-seller/dashboard-seller.component");
var ship_component_1 = require("./ship/ship.component");
var goods_shipped_component_1 = require("./goods-shipped/goods-shipped.component");
var all_loc_buyer_component_1 = require("./all-loc-buyer/all-loc-buyer.component");
var docs_component_1 = require("./docs/docs.component");
var all_loc_advising_component_1 = require("./all-loc-advising/all-loc-advising.component");
var all_purchase_order_component_1 = require("./all-purchase-order/all-purchase-order.component");
var all_purchase_order_seller_component_1 = require("./all-purchase-order-seller/all-purchase-order-seller.component");
var loc_state_view_component_1 = require("./loc-state-view/loc-state-view.component");
var loc_app_view_component_1 = require("./loc-app-view/loc-app-view.component");
var awaiting_approval_issuer_component_1 = require("./awaiting-approval-issuer/awaiting-approval-issuer.component");
var spinner_component_1 = require("./spinner/spinner.component");
var bill_of_lading_view_component_1 = require("./bill-of-lading-view/bill-of-lading-view.component");
var comma_seperated_number_pipe_1 = require("./comma-seperated-number.pipe");
var identity_service_1 = require("./services/identity.service");
var ng2_odometer_1 = require("ng2-odometer");
var timeline_component_1 = require("./timeline/timeline.component");
var view_bol_timeline_modal_component_1 = require("./modals/view-bol-timeline-modal.component");
var feedback_component_1 = require("./feedback/feedback.component");
var status_service_1 = require("./services/status.service");
var tx_service_1 = require("./services/tx.service");
var shepherd_service_1 = require("./services/shepherd.service");
var core_2 = require("angular2-cookie/core");
var tour_service_1 = require("./services/tour.service");
var footer_component_1 = require("./footer/footer.component");
var port_provider_service_1 = require("./services/port-provider.service");
var url_provider_service_1 = require("./services/url-provider.service");
var ng2_select_1 = require("ng2-select");
var logo_component_1 = require("./logo/logo.component");
var error_feedback_component_1 = require("./error-feedback/error-feedback.component");
var loading_component_1 = require("./loading/loading.component");
var peers_component_1 = require("./peers/peers.component");
var peers_with_port_component_1 = require("./peers-with-port/peers-with-port.component");
var dashboard_setup_component_1 = require("./dashboard-setup/dashboard-setup.component");
var static_map_component_1 = require("./static-map/static-map.component");
var map_legend_component_1 = require("./map-legend/map-legend.component");
var transactions_component_1 = require("./transactions/transactions.component");
var cash_issuance_component_1 = require("./cash-issuance/cash-issuance.component");
var safe_pipe_1 = require("./safe.pipe");
var test_component_1 = require("./test/test.component");
var rest_of_network_component_1 = require("./rest-of-network/rest-of-network.component");
var launch_component_1 = require("./launch/launch.component");
var graphical_transactions_component_1 = require("./graphical-transactions/graphical-transactions.component");
var graphical_transactions_service_1 = require("./services/graphical-transactions.service");
var startup_check_component_1 = require("./startup-check/startup-check.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule,
            ngx_bootstrap_1.DatepickerModule.forRoot(),
            ngx_bootstrap_2.ModalModule.forRoot(),
            ng2_odometer_1.Ng2OdometerModule.forRoot(),
            material_1.MatToolbarModule,
            material_2.MatDialogModule,
            material_3.MatSidenavModule,
            ng2_select_1.SelectModule,
        ],
        declarations: [
            app_component_1.AppComponent,
            active_loc_component_1.ActiveLocComponent,
            apply_for_loc_component_1.ApplyForLocComponent,
            header_component_1.HeaderComponent,
            awaiting_approval_component_1.AwaitingApprovalComponent,
            date_picker_component_1.DatePickerComponent,
            docs_modal_component_1.DocsModalComponent,
            ship_modal_component_1.ShipModalComponent,
            create_bol_modal_component_1.CreateBolModalComponent,
            view_purchase_order_modal_component_1.ViewPurchaseOrderModalComponent,
            approve_loc_modal_component_1.ApproveLocModalComponent,
            view_loc_state_modal_component_1.ViewLocStateModalComponent,
            view_loc_app_modal_component_1.ViewLocAppModalComponent,
            view_bol_modal_component_1.ViewBolModalComponent,
            cash_balance_component_1.CashBalanceComponent,
            all_loc_component_1.AllLocComponent,
            all_loc_seller_component_1.AllLocSellerComponent,
            approve_loc_component_1.ApproveLocComponent,
            bill_of_lading_component_1.BillOfLadingComponent,
            purchase_order_component_1.PurchaseOrderCreateComponent,
            purchase_order_view_component_1.PurchaseOrderViewComponent,
            dashboard_issuer_component_1.DashboardIssuerComponent,
            dashboard_advising_component_1.DashboardAdvisingComponent,
            dashboard_buyer_component_1.DashboardBuyerComponent,
            dashboard_seller_component_1.DashboardSellerComponent,
            ship_component_1.ShipComponent,
            goods_shipped_component_1.GoodsShippedComponent,
            all_loc_buyer_component_1.AllLocBuyerComponent,
            docs_component_1.DocsComponent,
            all_loc_advising_component_1.AllLocAdvisingComponent,
            all_purchase_order_component_1.AllPurchaseOrderComponent,
            all_purchase_order_seller_component_1.AllPurchaseOrderSellerComponent,
            loc_state_view_component_1.LocStateViewComponent,
            loc_app_view_component_1.LocAppViewComponent,
            awaiting_approval_issuer_component_1.AwaitingApprovalIssuerComponent,
            spinner_component_1.SpinnerComponent,
            bill_of_lading_view_component_1.BillOfLadingViewComponent,
            comma_seperated_number_pipe_1.CommaSeperatedNumberPipe,
            timeline_component_1.TimelineComponent,
            view_bol_timeline_modal_component_1.ViewBolTimelineModalComponent,
            feedback_component_1.FeedbackComponent,
            footer_component_1.FooterComponent,
            error_feedback_component_1.ErrorFeedbackComponent,
            loading_component_1.LoadingComponent,
            logo_component_1.LogoComponent,
            peers_component_1.PeersComponent,
            peers_with_port_component_1.PeersWithPortComponent,
            dashboard_setup_component_1.DashboardSetupComponent,
            static_map_component_1.StaticMapComponent,
            map_legend_component_1.MapLegendComponent,
            transactions_component_1.TransactionsComponent,
            cash_issuance_component_1.CashIssuanceComponent,
            safe_pipe_1.SafePipe,
            test_component_1.TestComponent,
            rest_of_network_component_1.RestOfNetworkComponent,
            launch_component_1.LaunchComponent,
            graphical_transactions_component_1.GraphicalTransactionsComponent,
            startup_check_component_1.StartupCheckComponent
        ],
        providers: [
            loc_service_1.LocService,
            docs_service_1.DocsService,
            credit_type_service_1.CreditTypeService,
            common_service_1.CommonService,
            issuing_bank_service_1.IssuingBankService,
            advising_bank_service_1.AdvisingBankService,
            refresh_service_1.RefreshService,
            identity_service_1.IdentityService,
            status_service_1.StatusService,
            tx_service_1.TxService,
            shepherd_service_1.ShepherdService,
            core_2.CookieService,
            tour_service_1.TourService,
            port_provider_service_1.PortProviderService,
            url_provider_service_1.UrlProviderService,
            graphical_transactions_service_1.GraphicalTransactionsService,
            { provide: core_2.CookieOptions, useValue: {} }
        ],
        entryComponents: [docs_modal_component_1.DocsModalComponent, ship_modal_component_1.ShipModalComponent,
            create_bol_modal_component_1.CreateBolModalComponent, view_purchase_order_modal_component_1.ViewPurchaseOrderModalComponent,
            approve_loc_modal_component_1.ApproveLocModalComponent, view_loc_state_modal_component_1.ViewLocStateModalComponent, view_loc_app_modal_component_1.ViewLocAppModalComponent, error_feedback_component_1.ErrorFeedbackComponent,
            view_bol_modal_component_1.ViewBolModalComponent, view_bol_timeline_modal_component_1.ViewBolTimelineModalComponent, peers_component_1.PeersComponent, peers_with_port_component_1.PeersWithPortComponent,
            all_loc_buyer_component_1.AllLocBuyerComponent, all_loc_seller_component_1.AllLocSellerComponent, dashboard_seller_component_1.DashboardSellerComponent, cash_issuance_component_1.CashIssuanceComponent,
            all_purchase_order_component_1.AllPurchaseOrderComponent, awaiting_approval_component_1.AwaitingApprovalComponent, bill_of_lading_component_1.BillOfLadingComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map