import { Component, OnInit } from '@angular/core';
import { LocSummary } from './../loc-summary';
import { LocService } from './../loc.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ViewLocAppModalComponent } from './../modals/view-loc-app-modal.component';
import { RefreshService } from './../services/refresh.service';
declare var $: any;

@Component({
  selector: 'awaiting-approval',
  templateUrl: './awaiting-approval.component.html',
  styleUrls: ['./awaiting-approval.component.css']
})
export class AwaitingApprovalComponent implements OnInit {
  bsModalRef: BsModalRef;

  locs: LocSummary[] = [];

  constructor(private locService: LocService,
    private modalService: BsModalService,
    private refreshService: RefreshService) {
    refreshService.missionConfirmed$.subscribe(
      result => {
        this.update();
      });
  }

  public openLocModal(ref: string) {
    this.bsModalRef = this.modalService.show(ViewLocAppModalComponent, Object.assign({}, { class: 'gray modal-lg' }));
    this.bsModalRef.content.title = 'Letter of Credit Application';
    this.bsModalRef.content.locId = ref;
    this.bsModalRef.content.readOnly = true;
  }

  update() {
    this.locService.getAwaitingApprovalLocs().then(locs => this.locs = locs);
  }

  ngOnInit() {
    this.update();
  }

}
