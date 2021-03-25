import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'modal-content',
  styleUrls: ['./modal.component.scss'],
  template: `
  <div class="modal-main">
    <div class="modal-header">
      <h4 class="modal-title pull-left">{{title}}</h4>
      <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
    <purchase-order-view [ref]="[purchaseOrderID]"></purchase-order-view>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" (click)="bsModalRef.hide()">Close</button>
    </div>
  </div>
  `
})
export class ViewPurchaseOrderModalComponent {
  public title: string;
  public body: Component;
  public purchaseOrderID: string;
  constructor(public bsModalRef: BsModalRef) {}

  public close() {
    this.bsModalRef.hide();
  }
}
