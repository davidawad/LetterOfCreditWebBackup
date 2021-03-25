import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { LocStateSummary } from './../loc-state-summary';

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
    <bill-of-lading [loc]="[locSummary]"></bill-of-lading>
    </div>
  </div>
  `
})
export class CreateBolModalComponent {
  public title: string;
  public locSummary: LocStateSummary;
  constructor(public bsModalRef: BsModalRef) {}

  public close() {
    this.bsModalRef.hide();
  }
}
