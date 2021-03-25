import { Component, Input } from '@angular/core';
import { Bol } from './../bol';
import { DocsService } from './../services/docs.service';
import { CreateBolModalComponent } from './../modals/create-bol-modal.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { LocStateSummary } from './../loc-state-summary';
import { StatusService } from '../services/status.service';
import { RefreshService } from '../services/refresh.service';
import * as global from '../globals';
import { GraphicalTransactionsService } from '../services/graphical-transactions.service';

@Component({
  selector: 'bill-of-lading',
  templateUrl: './bill-of-lading.component.html',
  styleUrls: ['./bill-of-lading.component.css']
})
export class BillOfLadingComponent {
  bol = new Bol();
  submitted = false;
  @Input() loc: LocStateSummary;

  constructor(
    private docsService: DocsService,
    private modalComponent: CreateBolModalComponent,
    private modalService: BsModalService,
    public statusService: StatusService,
    public refreshService: RefreshService,
    private gtService: GraphicalTransactionsService) { }

  createBol(): void {
    this.bol.advisingBank = this.loc[0].advisory;
    this.bol.issuingBank = this.loc[0].issuer;
    this.refreshService.loading = true;
    this.gtService.setMarkers(global.sellerName, global.advisingBankName, global.issuingBankName, global.buyerName);
    this.docsService.createBol(this.bol)
    .then(result => this.callResponse(result))
    .catch(err => this.refreshService.loading = false);
  }

  autoComplete(): void {
    let d = new Date();
    this.bol.billOfLadingId = this.loc[0].orderRef;
    this.bol.issueDate = d;
    this.bol.carrierOwner = 'Alice Shipping';

    this.bol.nameOfVessel = 'SurfRider';
    this.bol.goodsDescription = this.loc[0].description;
    this.bol.goodsQuantity = this.loc[0].quantity;
    this.bol.dateOfShipment = d;

    this.bol.portOfLoadingCountry = 'China';
    this.bol.portOfLoadingCity = 'Shenzhen';
    this.bol.portOfLoadingAddress = 'Dong Men Street';

    this.bol.portOfDischargeCountry = 'UK';
    this.bol.portOfDischargeCity = 'Liverpool';
    this.bol.portOfDischargeAddress = 'Maritime Centre';

    this.bol.shipper = this.loc[0].beneficiary;
    this.bol.notifyName = 'Analog Importers';
    this.bol.notifyAddress = '3 Smithdown Road. Liverpool, L2 6RE';
    this.bol.notifyPhone = '+447590043622';

    this.bol.consigneeName = this.loc[0].applicant;
    this.bol.consigneeAddress = '3 Smithdown Road. Liverpool, L2 6RE';
    this.bol.consigneePhone = '+447590043622';

    this.bol.grossWeight = 1000;
    this.bol.grossWeightUnit = 'KG';

    this.bol.placeOfReceiptCountry = 'UK';
    this.bol.placeOfReceiptCity = 'Liverpool';

    this.bol.buyer = this.bol.consigneeName;
    this.bol.advisingBank = this.loc[0].advisingBank;
  }

  callResponse(result: string): void {
    this.close();
    this.statusService.status = result;
    this.refreshService.confirmMission();
    this.refreshService.loading = false;
  }

  close(): void {
    this.modalComponent.close();
  }

  onSubmit() {
    this.submitted = true;
    this.createBol();
  }

}
