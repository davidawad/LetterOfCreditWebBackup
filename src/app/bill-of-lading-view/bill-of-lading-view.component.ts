import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Bol } from './../bol';
import { DocsService } from './../services/docs.service';
import { ViewBolModalComponent } from './../modals/view-bol-modal.component';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'bill-of-lading-view',
  templateUrl: './bill-of-lading-view.component.html',
  styleUrls: ['./bill-of-lading-view.component.scss']
})
export class BillOfLadingViewComponent implements OnChanges {
  @Input() id: string;
  @Input() requestor: string;
  bol: Bol;

  constructor(
    private docsService: DocsService,
    private modalComponent: ViewBolModalComponent,
    private modalService: BsModalService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.id[0] !== undefined) {
      this.docsService.getBol(this.id, this.requestor).then(bol => this.bol = bol);
    }
  }

}
