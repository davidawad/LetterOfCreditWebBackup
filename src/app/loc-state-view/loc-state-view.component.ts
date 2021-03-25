import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LocState } from './../loc-state';
import { CommonService } from './../services/common/common.service';
import { LocService } from './../loc.service';
import { ViewLocStateModalComponent } from './../modals/view-loc-state-modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'loc-state-view',
  templateUrl: './loc-state-view.component.html',
  styleUrls: ['./loc-state-view.component.scss']
})
export class LocStateViewComponent implements OnChanges {
  @Input() ref: string;
  loc: LocState;
  submitted = false;
  txResponse: string;
  bsModalRef: BsModalRef;
  public title: string;

  constructor(private commonService: CommonService,
    private locService: LocService,
    private modalComponent: ViewLocStateModalComponent,
    private modalService: BsModalService) { }

  close(): void {
    this.modalComponent.close();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.ref[0] !== undefined) {
      this.locService.getLoc(this.ref).then(loc => this.loc = loc);
    }
  }
}
