import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardIssuerComponent }   from './dashboard-issuer/dashboard-issuer.component';
import { DashboardAdvisingComponent }   from './dashboard-advising/dashboard-advising.component';
import { DashboardBuyerComponent }   from './dashboard-buyer/dashboard-buyer.component';
import { DashboardSellerComponent }   from './dashboard-seller/dashboard-seller.component';
import { ActiveLocComponent }      from './active-loc/active-loc.component';
import { ApplyForLocComponent }  from './apply-for-loc/apply-for-loc.component';
import { ApproveLocComponent } from './approve-loc/approve-loc.component';
import { BillOfLadingComponent } from './bill-of-lading/bill-of-lading.component';
import { PurchaseOrderCreateComponent } from './purchase-order-create/purchase-order.component';
import { ShipComponent } from './ship/ship.component';
import { AllLocSellerComponent } from './all-loc-seller/all-loc-seller.component';
import { StaticMapComponent } from './static-map/static-map.component';
import { GraphicalTransactionsComponent } from './graphical-transactions/graphical-transactions.component';
import { StartupCheckComponent } from './startup-check/startup-check.component';

const routes: Routes = [
  { path: 'approve/:id', component: ApproveLocComponent },
  { path: 'activeloc', component: ActiveLocComponent },
  { path: 'buyer', component: DashboardBuyerComponent },
  { path: 'seller', component: DashboardSellerComponent },
  { path: 'issuing', component: DashboardIssuerComponent},
  { path: 'advising', component: DashboardAdvisingComponent},
  { path: 'applyforloc', component: ApplyForLocComponent },
  { path: 'billoflading', component: BillOfLadingComponent },
  { path: 'purchase-order', component: PurchaseOrderCreateComponent },
  { path: 'purchase-order/:id', component: PurchaseOrderCreateComponent },
  { path: 'ship/:id', component: ShipComponent },
  { path: 'locsummary/:first', component: AllLocSellerComponent },
  { path: 'test', component: GraphicalTransactionsComponent },
  { path: 'map', component: StaticMapComponent },
  { path: '**', component: StaticMapComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
