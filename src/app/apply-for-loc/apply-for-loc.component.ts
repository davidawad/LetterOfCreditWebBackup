import { Component, OnInit, Inject } from '@angular/core';
import { Loc } from './../loc';
import { CreditType } from './../services/credit-types/credit-type';
import { CreditTypeService } from './../services/credit-types/credit-type.service';
import { Currency } from './../services/common/currency';
import { WeightUnit } from './../services/common/weight-unit';
import { CommonService } from './../services/common/common.service';
import { LocService } from './../loc.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { StatusService } from '../services/status.service';
import { RefreshService } from '../services/refresh.service';
import { TourService } from '../services/tour.service';
import { IdentityService } from '../services/identity.service';
import { PurchaseOrder } from '../purchase-order';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PeersComponent } from '../peers/peers.component';
import { GraphicalTransactionsService } from '../services/graphical-transactions.service';

@Component({
  selector: 'apply-for-loc',
  templateUrl: './apply-for-loc.component.html',
  styleUrls: ['./apply-for-loc.component.css'],
  providers: [CreditTypeService, CommonService, LocService]
})
export class ApplyForLocComponent implements OnInit {

  creditTypes: CreditType[];
  currencies: Currency[];
  weightunits: WeightUnit[];
  applicant: string;
  today: number = Date.now();
  bsModalRef: BsModalRef;
  error: boolean;
  issuerGlow: boolean;
  advisingGlow: boolean;

  loc = new Loc();
  purchaseOrder: PurchaseOrder;
  submitted = false;

  constructor(
    private creditTypesService: CreditTypeService,
    private commonService: CommonService,
    private locService: LocService,
    private modalService: BsModalService,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<ApplyForLocComponent>,
    public statusService: StatusService,
    public refreshService: RefreshService,
    private identityService: IdentityService,
    private tourService: TourService,
    private gtService: GraphicalTransactionsService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  getCreditTypes(): void {
    this.creditTypesService.getCreditTypes().then(creditTypes => this.creditTypes = creditTypes);
  }

  getCurrencies(): void {
    this.commonService.getCurrencies().then(currencies => this.currencies = currencies);
  }

  getWeightUnits(): void {
    this.commonService.getWeightUnits().then(weightunits => this.weightunits = weightunits);
  }

  getMe(): void {
    this.locService.getMe().then(me => this.applicant = me.name);
  }

  createLoc(): void {
    if (!this.loc.issuer || !this.loc.advisingBank) {
      this.error = true;
      return;
    }
    this.error = false;
    this.refreshService.loading = true;
    this.locService.createLoc(this.loc).then(result => this.callResponse(result));
  }

  callResponse(result: string): void {
    this.close();
    this.statusService.status = result;
    this.refreshService.confirmMission();
    this.refreshService.loading = false;
    this.tourService.buyerTour.show('application-created');
  }

  close(): void {
    this.dialogRef.close();
  }

  lookupIssuer() {
    let dialogRef = this.dialog.open(PeersComponent)
    dialogRef.afterClosed().subscribe(result => {
      this.loc.issuer = this.identityService.peer.name;
      this.issuerGlow = false;
    });
  }

  lookupAdvising() {
    let dialogRef = this.dialog.open(PeersComponent)
    dialogRef.afterClosed().subscribe(result => {
      this.loc.advisingBank = this.identityService.peer.name;
      this.advisingGlow = false;
    })
  }

  autoComplete(): void {
    let d = new Date()
    this.loc.applicationDate = d;
    this.loc.applicationId = this.data.purchaseOrder.purchaseOrderID;
    this.loc.typeCredit = 'SIGHT';
    this.loc.amount = '1300000 USD';

    let year = d.getFullYear() + 1
    // TODO: Use a real date, instead of padded strings.
    let month = ("000" + d.getMonth()).slice(-2);
    let day = ("000" + d.getDay()).slice(-2);
    this.loc.expiryDate = year + "-" + month + "-" + day

    this.loc.portLoadingAddress = 'The Port';
    this.loc.portLoadingCity = 'Shenzhen';
    this.loc.portLoadingCountry = 'CN';
    this.loc.portDischargeAddress = 'Maritime Centre';
    this.loc.portDischargeCity = 'Liverpool';
    this.loc.portDischargeCountry = 'UK';
    this.loc.goodsDescription = 'OLED 6" Screens';
    this.loc.goodsQuantity = 100000;
    this.loc.goodsWeight = 1000;
    this.loc.goodsWeightUnit = 'KG';
    this.loc.goodsUnitPrice = 13;
    this.loc.goodsPurchaseOrderRef = this.data.purchaseOrder.purchaseOrderID;
    this.loc.placePresentationCountry = 'UK';
    this.loc.placePresentationCity = 'Liverpool';
    this.loc.placePresentationState = 'Liverpool';
    this.loc.lastShipmentDate = this.loc.expiryDate;
    this.loc.periodPresentation = 1;

    this.loc.beneficiary = this.data.purchaseOrder.sellerName;
    this.identityService.getMe().then(response => this.loc.applicant = response.json().me);

    this.loc.issuer = '';
    this.loc.advisingBank = '';

    this.issuerGlow = true;
    this.advisingGlow = true;
  }

  ngOnInit() {
    this.getMe();
    this.loc.applicant = this.applicant;
    this.loc.applicationId = this.data.purchaseOrder.purchaseOrderID;
    this.purchaseOrder = this.data;
  }

  onSubmit() {
    this.submitted = true;
    this.gtService.setMarkers(this.loc.applicant, this.loc.issuer);
    this.createLoc();
  }
}
