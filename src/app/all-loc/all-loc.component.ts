import { Component, OnInit, Input } from '@angular/core';
import { LocSummary } from './../loc-summary';
import { LocService } from './../loc.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'all-loc',
  templateUrl: './all-loc.component.html',
  styleUrls: ['./all-loc.component.css']
})
export class AllLocComponent implements OnInit {
  @Input() getAllUrl: string;
  locs: LocSummary[] = []

  constructor(private locService: LocService) { }

  ngOnInit(): void {
    this.locService.getAllLocApps(this.getAllUrl).then(locs => this.locs = locs);
  }
}
