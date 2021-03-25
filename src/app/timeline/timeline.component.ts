import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { DocsService } from './../services/docs.service';
import { BolEvents } from './../bol-events';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnChanges {
  @Input() id: string;
  @Input() requestor: string;
  bolEvents: BolEvents;

  constructor(private docsService: DocsService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.id[0] !== undefined) {
      this.docsService.getBolEvents(this.id, this.requestor).then(bolEvents => this.bolEvents = bolEvents);
    }
  }
}
