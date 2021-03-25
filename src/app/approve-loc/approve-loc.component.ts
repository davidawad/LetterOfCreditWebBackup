import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Loc } from './../loc';
import { CommonService } from './../services/common/common.service';
import { LocService } from './../loc.service';
import { ApproveLocModalComponent } from './../modals/approve-loc-modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { StatusService } from '../services/status.service';
import { RefreshService } from '../services/refresh.service';

@Component({
  selector: 'approve-loc',
  templateUrl: './approve-loc.component.html',
  styleUrls: ['./approve-loc.component.css'],
  providers: [LocService]
})
export class ApproveLocComponent implements OnChanges {
  @Input() ref: string;
  loc: Loc;
  submitted = false;
  txResponse: string;
  bsModalRef: BsModalRef;
  public title: string;

  constructor(
    private commonService: CommonService,
    private locService: LocService,
    private modalComponent: ApproveLocModalComponent,
    private modalService: BsModalService,
    public statusService: StatusService,
    public refreshService: RefreshService) { }

  close(): void {
    this.modalComponent.close();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.ref[0] !== undefined) {
      this.locService.getLocApp(this.ref).then(loc => this.loc = loc);
    }
  }
}
