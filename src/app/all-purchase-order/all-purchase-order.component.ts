import { Component, OnInit } from '@angular/core';
import { PurchaseOrder } from './../purchase-order';
import { DocsService } from './../services/docs.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ViewPurchaseOrderModalComponent } from './../modals/view-purchase-order-modal.component';
import { RefreshService } from '../services/refresh.service';
import { ShepherdService } from '../services/shepherd.service';
import { MatDialog } from '@angular/material';
import { ApplyForLocComponent } from '../apply-for-loc/apply-for-loc.component';
import { BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'all-purchase-order',
  templateUrl: './all-purchase-order.component.html',
  styleUrls: ['./all-purchase-order.component.css'],
})
export class AllPurchaseOrderComponent implements OnInit {
  bsModalRef: BsModalRef;
  purchaseOrders: PurchaseOrder[] = [];

  constructor(private docService: DocsService,
    private modalService: BsModalService,
    private dialog: MatDialog,
    private refreshService: RefreshService,
    private sfhepService: ShepherdService) {
    refreshService.missionConfirmed$.subscribe(
      result => {
        this.update();
      });
  }

  public openModalWithComponent(purchaseOrder: PurchaseOrder) {
    this.dialog.open(ApplyForLocComponent, {
      height: '80%',
      data: { purchaseOrder: purchaseOrder }
    });
  }

  public openPurchaseOrderModal(ref: string) {
    this.bsModalRef = this.modalService.show(ViewPurchaseOrderModalComponent, Object.assign({}, { class: 'gray modal-lg' }));
    this.bsModalRef.content.title = 'PurchaseOrder';
    this.bsModalRef.content.purchaseOrderID = ref;
  }

  update() {
    this.docService.getPurchaseOrders().then(purchaseOrders => this.purchaseOrders = purchaseOrders);
  }

  ngOnInit() {
    this.update();
  }
}
