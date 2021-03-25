import { Component, ViewContainerRef, ViewChild } from '@angular/core';
import { PurchaseOrder } from './../purchase-order';
import { DocsService } from './../services/docs.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { StatusService } from '../services/status.service';
import { RefreshService } from '../services/refresh.service';
import { TourService } from '../services/tour.service';
import { IdentityService } from '../services/identity.service';
import { SelectItem } from 'ng2-select';
import { PeersComponent } from '../peers/peers.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { GraphicalTransactionsService } from '../services/graphical-transactions.service';

@Component({
  selector: 'create-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderCreateComponent {
  @ViewChild('PurchaseOrder', { read: ViewContainerRef }) vc: ViewContainerRef;
  purchaseOrder = new PurchaseOrder();
  submitted = false;
  bsModalRef: BsModalRef;
  buyerNameArray: SelectItem[];
  error: boolean;
  glow: boolean;

  constructor(
    private docsService: DocsService,
    private dialog: MatDialog,
    public statusService: StatusService,
    public refreshService: RefreshService,
    public identityService: IdentityService,
    private tourService: TourService,
    private dialog2: MatDialogRef<PurchaseOrderCreateComponent>,
    private gtService: GraphicalTransactionsService) { }

  lookupSeller() {
    let dialogRef = this.dialog.open(PeersComponent, { viewContainerRef: this.vc });
    dialogRef.afterClosed().subscribe(result => {
      this.purchaseOrder.sellerName = this.identityService.peer.name;
      this.glow = false;
    });
  }

  createPurchaseOrder(): void {
    if (!this.purchaseOrder.buyerName) {
      this.error = true;
      return;
    }
    this.error = false;
    this.refreshService.loading = true;
    this.docsService.createPurchaseOrder(this.purchaseOrder).then(result => this.callResponse(result));
    this.gtService.setMarkers(this.purchaseOrder.buyerName, this.purchaseOrder.sellerName);
    this.close();
  }

  autoComplete(): void {
    this.identityService.getMe().then(response => this.purchaseOrder.buyerName = response.json().me);
    let d = new Date();
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
  }

  callResponse(result: string): void {
    this.statusService.status = result;
    this.refreshService.confirmMission();
    setTimeout(() => this.tourService.sellerTour.show('purchase-order-created'), 5000);
    this.refreshService.loading = false;
  }

  close() {
    this.dialog2.close();
  }

  onSubmit() {
    this.submitted = true;
    this.createPurchaseOrder();
  }
}
