import { Component, OnInit } from '@angular/core';
import { TxSummary } from './../tx-summary';
import { TxService } from './../services/tx.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { RefreshService } from './../services/refresh.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  txs: TxSummary[] = [];

  constructor(private txService: TxService,
    private modalService: BsModalService,
    private refreshService: RefreshService) {
    refreshService.missionConfirmed$.subscribe(
      result => {
        this.update();
      });
  }

  update() {
    this.txService.getTransactions().then(txs => this.txs = txs);
  }

  ngOnInit() {
    this.update();
  }
}
