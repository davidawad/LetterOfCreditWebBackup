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
      <loc-app-view [ref]="[locId]"></loc-app-view>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" (click)="bsModalRef.hide()">Close</button>
    </div>
  </div>
  `
})
export class ViewLocAppModalComponent {
  public title: string;
  public body: Component;
  public locId: string;
  constructor(public bsModalRef: BsModalRef) {}

  public close() {
    this.bsModalRef.hide();
  }
}
