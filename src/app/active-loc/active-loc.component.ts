import { Component, OnInit } from '@angular/core';
import { LocStateSummary } from './../loc-state-summary';
import { LocService } from './../loc.service';
import { ViewBolModalComponent } from './../modals/view-bol-modal.component'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute } from '@angular/router';
import { RefreshService } from './../services/refresh.service';
import { ViewLocStateModalComponent } from './../modals/view-loc-state-modal.component';
import { StatusService } from '../services/status.service';
import * as global from '../globals';
import { GraphicalTransactionsService } from '../services/graphical-transactions.service';

@Component({
  selector: 'active-loc',
  templateUrl: './active-loc.component.html',
  styleUrls: ['./active-loc.component.css']
})
export class ActiveLocComponent implements OnInit {
  bsModalRef: BsModalRef;
  disabled = false;

  locs: LocStateSummary[] = [];

  constructor(private modalService: BsModalService,
              private locService: LocService,
              private refreshService: RefreshService,
              private route: ActivatedRoute,
              public statusService: StatusService,
              private gtService: GraphicalTransactionsService) {
                refreshService.missionConfirmed$.subscribe(
                  result => {
                    this.update();
                  });
              }

  public payAdvisory(id: string) {
    this.refreshService.loading = true;
    this.disabled = true;
    this.locService.payAdviser(id)
    .then(response => this.callResponse(response))
    .catch(err => err);
  }

  public openBol(id: string) {
    this.bsModalRef = this.modalService.show(ViewBolModalComponent);
    this.bsModalRef.content.id = id;
    this.bsModalRef.content.title = 'Bill of Lading';
    this.bsModalRef.content.requestor = this.route.snapshot.url[0].toString();
  }

  public openLocModal(ref: string) {
    this.bsModalRef = this.modalService.show(ViewLocStateModalComponent, Object.assign({}, {class: 'gray modal-lg'}));
    this.bsModalRef.content.title = 'Letter of Credit';
    this.bsModalRef.content.locId = ref;
  }

  callResponse(result: string): void {
    this.refreshService.loading = false;
    this.gtService.setMarkers(global.issuingBankName, global.advisingBankName);
    this.gtService.cash = true;
    this.refreshService.confirmMission();
    this.statusService.status = result;
    this.update();
    this.disabled = false;
  }

  update() {
    this.locService.getActiveLocs().then(locs => this.locs = locs);
  }

  ngOnInit(): void {
    this.update();
  }
}
