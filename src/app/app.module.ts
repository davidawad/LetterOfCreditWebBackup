import * as $ from 'jquery'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MatToolbarModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { RefreshService } from './services/refresh.service';

import { AppComponent } from './app.component';
import { ActiveLocComponent } from './active-loc/active-loc.component';
import { ApplyForLocComponent } from './apply-for-loc/apply-for-loc.component';
import { LocService } from './loc.service';
import { DocsService } from './services/docs.service';
import { CreditTypeService } from './services/credit-types/credit-type.service';
import { CommonService } from './services/common/common.service';
import { IssuingBankService } from './services/issuing-bank.service';
import { AdvisingBankService } from './services/advising-bank.service';
import { HeaderComponent } from './header/header.component';
import { AwaitingApprovalComponent } from './awaiting-approval/awaiting-approval.component';
import { DatepickerModule } from 'ngx-bootstrap';
import { DatePickerComponent } from './helpers/date-picker/date-picker.component';
import { ModalModule } from 'ngx-bootstrap';
import { DocsModalComponent } from './modals/docs-modal.component';
import { ShipModalComponent } from './modals/ship-modal.component';
import { CreateBolModalComponent } from './modals/create-bol-modal.component';
import { ViewPurchaseOrderModalComponent } from './modals/view-purchase-order-modal.component';
import { ApproveLocModalComponent } from './modals/approve-loc-modal.component';
import { ViewLocStateModalComponent } from './modals/view-loc-state-modal.component';
import { ViewLocAppModalComponent } from './modals/view-loc-app-modal.component';
import { ViewBolModalComponent } from './modals/view-bol-modal.component';
import { CashBalanceComponent } from './cash-balance/cash-balance.component';
import { AllLocComponent } from './all-loc/all-loc.component';
import { AllLocSellerComponent } from './all-loc-seller/all-loc-seller.component';
import { ApproveLocComponent } from './approve-loc/approve-loc.component';
import { BillOfLadingComponent } from './bill-of-lading/bill-of-lading.component';
import { PurchaseOrderCreateComponent } from './purchase-order-create/purchase-order.component';
import { PurchaseOrderViewComponent } from './purchase-order-view/purchase-order-view.component';
import { DashboardIssuerComponent } from './dashboard-issuer/dashboard-issuer.component';
import { DashboardAdvisingComponent } from './dashboard-advising/dashboard-advising.component';
import { DashboardBuyerComponent } from './dashboard-buyer/dashboard-buyer.component';
import { DashboardSellerComponent } from './dashboard-seller/dashboard-seller.component';
import { ShipComponent } from './ship/ship.component';
import { GoodsShippedComponent } from './goods-shipped/goods-shipped.component';
import { AllLocBuyerComponent } from './all-loc-buyer/all-loc-buyer.component';
import { DocsComponent } from './docs/docs.component';
import { AllLocAdvisingComponent } from './all-loc-advising/all-loc-advising.component';
import { AllPurchaseOrderComponent } from './all-purchase-order/all-purchase-order.component';
import { AllPurchaseOrderSellerComponent } from './all-purchase-order-seller/all-purchase-order-seller.component';
import { LocStateViewComponent } from './loc-state-view/loc-state-view.component';
import { LocAppViewComponent } from './loc-app-view/loc-app-view.component';
import { AwaitingApprovalIssuerComponent } from './awaiting-approval-issuer/awaiting-approval-issuer.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { BillOfLadingViewComponent } from './bill-of-lading-view/bill-of-lading-view.component';
import { CommaSeperatedNumberPipe } from './comma-seperated-number.pipe';
import { IdentityService } from './services/identity.service'
import { Ng2OdometerModule } from 'ng2-odometer';
import { TimelineComponent } from './timeline/timeline.component';
import { ViewBolTimelineModalComponent } from './modals/view-bol-timeline-modal.component'
import { FeedbackComponent } from './feedback/feedback.component';
import { StatusService } from './services/status.service';
import { TxService } from './services/tx.service';
import { ShepherdService } from './services/shepherd.service';
import { CookieService, CookieOptions } from 'angular2-cookie/core';
import { TourService } from './services/tour.service';
import { FooterComponent } from './footer/footer.component';
import { PortProviderService } from './services/port-provider.service';
import { UrlProviderService } from './services/url-provider.service';
import { SelectModule } from 'ng2-select';
import { LogoComponent } from './logo/logo.component';
import { ErrorFeedbackComponent } from './error-feedback/error-feedback.component';
import { LoadingComponent } from './loading/loading.component';
import { PeersComponent } from './peers/peers.component';
import { PeersWithPortComponent } from './peers-with-port/peers-with-port.component';
import { DashboardSetupComponent } from './dashboard-setup/dashboard-setup.component';
import { StaticMapComponent } from './static-map/static-map.component';
import { MapLegendComponent } from './map-legend/map-legend.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { CashIssuanceComponent } from './cash-issuance/cash-issuance.component';
import { SafePipe } from './safe.pipe';
import { TestComponent } from './test/test.component';
import { RestOfNetworkComponent } from './rest-of-network/rest-of-network.component';
import { LaunchComponent } from './launch/launch.component';
import { GraphicalTransactionsComponent } from './graphical-transactions/graphical-transactions.component';
import { GraphicalTransactionsService } from './services/graphical-transactions.service';
import { StartupCheckComponent } from './startup-check/startup-check.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DatepickerModule.forRoot(),
    ModalModule.forRoot(),
    Ng2OdometerModule.forRoot(),
    MatToolbarModule,
    MatDialogModule,
    MatSidenavModule,
    SelectModule,
  ],
  declarations: [
    AppComponent,
    ActiveLocComponent,
    ApplyForLocComponent,
    HeaderComponent,
    AwaitingApprovalComponent,
    DatePickerComponent,
    DocsModalComponent,
    ShipModalComponent,
    CreateBolModalComponent,
    ViewPurchaseOrderModalComponent,
    ApproveLocModalComponent,
    ViewLocStateModalComponent,
    ViewLocAppModalComponent,
    ViewBolModalComponent,
    CashBalanceComponent,
    AllLocComponent,
    AllLocSellerComponent,
    ApproveLocComponent,
    BillOfLadingComponent,
    PurchaseOrderCreateComponent,
    PurchaseOrderViewComponent,
    DashboardIssuerComponent,
    DashboardAdvisingComponent,
    DashboardBuyerComponent,
    DashboardSellerComponent,
    ShipComponent,
    GoodsShippedComponent,
    AllLocBuyerComponent,
    DocsComponent,
    AllLocAdvisingComponent,
    AllPurchaseOrderComponent,
    AllPurchaseOrderSellerComponent,
    LocStateViewComponent,
    LocAppViewComponent,
    AwaitingApprovalIssuerComponent,
    SpinnerComponent,
    BillOfLadingViewComponent,
    CommaSeperatedNumberPipe,
    TimelineComponent,
    ViewBolTimelineModalComponent,
    FeedbackComponent,
    FooterComponent,
    ErrorFeedbackComponent,
    LoadingComponent,
    LogoComponent,
    PeersComponent,
    PeersWithPortComponent,
    DashboardSetupComponent,
    StaticMapComponent,
    MapLegendComponent,
    TransactionsComponent,
    CashIssuanceComponent,
    SafePipe,
    TestComponent,
    RestOfNetworkComponent,
    LaunchComponent,
    GraphicalTransactionsComponent,
    StartupCheckComponent
],
    providers: [
    LocService,
    DocsService,
    CreditTypeService,
    CommonService,
    IssuingBankService,
    AdvisingBankService,
    RefreshService,
    IdentityService,
    StatusService,
    TxService,
    ShepherdService,
    CookieService,
    TourService,
    PortProviderService,
    UrlProviderService,
    GraphicalTransactionsService,
    { provide: CookieOptions, useValue: {} }
  ],
  entryComponents: [DocsModalComponent, ShipModalComponent,
                    CreateBolModalComponent, ViewPurchaseOrderModalComponent,
                    ApproveLocModalComponent, ViewLocStateModalComponent, ViewLocAppModalComponent, ErrorFeedbackComponent,
                    ViewBolModalComponent, ViewBolTimelineModalComponent, PeersComponent, PeersWithPortComponent,
                    AllLocBuyerComponent, AllLocSellerComponent, DashboardSellerComponent, CashIssuanceComponent,
                    AllPurchaseOrderComponent, AwaitingApprovalComponent, BillOfLadingComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
