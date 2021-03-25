import { Component, OnInit, Input } from '@angular/core';
import { Cash } from './../cash';
import { LocService } from './../loc.service';
import { ActivatedRoute } from '@angular/router';
import { RefreshService } from './../services/refresh.service';
declare var $: any;

@Component({
  selector: 'cash-balance',
  templateUrl: './cash-balance.component.html',
  styleUrls: ['./cash-balance.component.css']
})
export class CashBalanceComponent implements OnInit {
  @Input() node: string;
  cashBalances: Cash;

  constructor(private locService: LocService,
              private route: ActivatedRoute,
              private refreshService: RefreshService) {
                refreshService.missionConfirmed$.subscribe(
                  result => {
                    this.getCashBalances();
                  });
               }

  getCashBalances() {
    this.locService.getCashBalances().then(cashBalances => this.cashBalances = cashBalances);
  }

  ngOnInit() {
    this.getCashBalances();
  }
}
