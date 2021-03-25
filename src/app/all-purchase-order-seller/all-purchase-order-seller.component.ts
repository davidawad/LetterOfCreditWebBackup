import { Component, OnInit } from '@angular/core';
import { PurchaseOrder } from './../purchase-order';
import { DocsService } from './../services/docs.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { RefreshService } from './../services/refresh.service';
import { ViewPurchaseOrderModalComponent } from './../modals/view-purchase-order-modal.component';

@Component({
  selector: 'all-purchase-order-seller',
  templateUrl: './all-purchase-order-seller.component.html',
  styleUrls: ['./all-purchase-order-seller.component.scss']
})
export class AllPurchaseOrderSellerComponent implements OnInit {
  bsModalRef: BsModalRef;
  purchaseOrders: PurchaseOrder[] = [];

  constructor(private docService: DocsService,
    private modalService: BsModalService,
    private refreshService: RefreshService) {
      refreshService.missionConfirmed$.subscribe(
        result => {
          this.update();
        });
  }

  public openPurchaseOrderModal(ref: string) {
    this.bsModalRef = this.modalService.show(ViewPurchaseOrderModalComponent, Object.assign({}, {class: 'gray modal-lg'}));
    this.bsModalRef.content.title = 'PurchaseOrder';
    this.bsModalRef.content.purchaseOrderID = ref;
  }

  update() {
    this.docService.getPurchaseOrders().then(purchaseOrders => this.purchaseOrders = purchaseOrders)
  }

  ngOnInit() {
    this.update();
  }

}
