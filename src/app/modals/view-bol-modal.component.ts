import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ViewBolTimelineModalComponent } from './view-bol-timeline-modal.component'

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
    <img src="assets/timeline-icon.png" class="pull-right" height="20px" width="20px"
    (click)="openModal2()" style="cursor:pointer;margin-right:5px;">
    </div>
    <div class="modal-body">
    <bill-of-lading-view [id]="[id]" [requestor]="[requestor]"></bill-of-lading-view>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" (click)="bsModalRef.hide()">Close</button>
    </div>
  </div>
  `
})
export class ViewBolModalComponent {
  public title: string;
  public id: string;
  public requestor: string;
  public modalRef2: BsModalRef;
  constructor(public bsModalRef: BsModalRef,
              private modalService: BsModalService) {}

  public openModal2() {
    this.modalRef2 = this.modalService.show(ViewBolTimelineModalComponent);
    this.modalRef2.content.id = this.id;
    this.modalRef2.content.requestor = this.requestor;
  }

  public close() {
    this.bsModalRef.hide();
  }
}
