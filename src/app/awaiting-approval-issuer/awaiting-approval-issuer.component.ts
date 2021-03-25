import { Component, OnInit } from '@angular/core';
import { LocSummary } from './../loc-summary';
import { LocService } from './../loc.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ApproveLocModalComponent } from './../modals/approve-loc-modal.component';
import { RefreshService } from './../services/refresh.service';
import { GraphicalTransactionsService } from '../services/graphical-transactions.service';
import * as global from '../globals';

@Component({
  selector: 'awaiting-approval-issuer',
  templateUrl: './awaiting-approval-issuer.component.html',
  styleUrls: ['./awaiting-approval-issuer.component.scss']
})
export class AwaitingApprovalIssuerComponent implements OnInit {
  bsModalRef: BsModalRef;

  locs: LocSummary[] = [];

  constructor(private locService: LocService,
    private modalService: BsModalService,
    private refreshService: RefreshService,
    private gtService: GraphicalTransactionsService) {
    refreshService.missionConfirmed$.subscribe(
      result => {
        this.update();
      });
  }

  public openLocModal(ref: string) {
    this.bsModalRef = this.modalService.show(ApproveLocModalComponent, Object.assign({}, { class: 'gray modal-lg' }));
    this.bsModalRef.content.title = 'Letter of Credit Application';
    this.bsModalRef.content.locId = ref;
    this.bsModalRef.content.readOnly = true;
  }

  public approveLoc(ref: string) {
    this.refreshService.loading = true;
    this.gtService.setMarkers(global.advisingBankName, global.issuingBankName, global.buyerName, global.sellerName);
    this.locService.approveLoc(ref)
    .then(response => this.callResponse(response))
    .catch(err => err);
  }

  callResponse(result: string): void {
    this.refreshService.confirmMission();
    this.refreshService.loading = false;
  }

  update() {
    this.locService.getAwaitingApprovalLocsIssuer().then(locs => this.locs = locs);
  }

  ngOnInit() {
    this.update();
  }

}
