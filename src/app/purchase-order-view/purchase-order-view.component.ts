import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PurchaseOrder } from './../purchase-order';
import { DocsService } from './../services/docs.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ViewPurchaseOrderModalComponent } from './../modals/view-purchase-order-modal.component';

@Component({
  selector: 'purchase-order-view',
  templateUrl: './purchase-order-view.component.html',
  styleUrls: ['./purchase-order-view.component.css']
})
export class PurchaseOrderViewComponent implements OnChanges {
  @Input() ref: string;
  purchaseOrder: PurchaseOrder;
  bsModalRef: BsModalRef;

  constructor(
    private docsService: DocsService,
    private modalComponent: ViewPurchaseOrderModalComponent,
    private modalService: BsModalService) { }

  close(): void {
    this.modalComponent.close();
  }

  isArray(val) { return val instanceof Array; }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.ref[0] !== undefined) {
      this.docsService.getPurchaseOrder(this.ref).then(purchaseOrder => this.purchaseOrder = purchaseOrder);
    }
  }
}
