import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { PortProviderService } from '../services/port-provider.service';

@Component({
  selector: 'app-cash-issuance',
  templateUrl: './cash-issuance.component.html',
  styleUrls: ['./cash-issuance.component.scss']
})
export class CashIssuanceComponent {

  constructor(public dialogRef: MatDialogRef<CashIssuanceComponent>, private portService: PortProviderService) { }

  getUrl() {
    // TODO remove hardcoded port
    if (this.portService.current === 10019) {
      return 'http://localhost:' + this.portService.current + '/web/central/';
    }
    return 'http://localhost:' + this.portService.current + '/web/dashboard/';
  }
}
