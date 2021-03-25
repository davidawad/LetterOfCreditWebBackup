import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Loc } from './../loc';
import { LocService } from './../loc.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ViewLocAppModalComponent } from './../modals/view-loc-app-modal.component';

@Component({
  selector: 'loc-app-view',
  templateUrl: './loc-app-view.component.html',
  styleUrls: ['./loc-app-view.component.scss']
})
export class LocAppViewComponent implements OnChanges {
  @Input() ref: string;
  loc: Loc;
  bsModalRef: BsModalRef;
  public title: string;

  constructor(
    private locService: LocService,
    private modalComponent: ViewLocAppModalComponent,
    private modalService: BsModalService) { }

  close(): void {
    this.modalComponent.close();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.ref[0] !== undefined) {
      this.locService.getLocApp(this.ref).then(loc => this.loc = loc);
    }
  }

}
