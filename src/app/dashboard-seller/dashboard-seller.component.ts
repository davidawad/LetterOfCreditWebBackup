import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CookieService } from 'angular2-cookie/core';
import { TourService } from '../services/tour.service';
import { StatusService } from '../services/status.service';
import { RefreshService } from '../services/refresh.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'dashboard-seller',
  templateUrl: './dashboard-seller.component.html',
  styleUrls: ['./dashboard-seller.component.css']
})
export class DashboardSellerComponent implements OnInit {
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService, public tourService: TourService,
    private cookieService: CookieService, public statusService: StatusService,
    public refreshService: RefreshService, public dialogRef: MatDialogRef<DashboardSellerComponent>) { }

  ngOnInit() {
    // let body = document.getElementsByTagName('body')[0];
    // body.classList.add('background-image-seller');
    let bodyWrapper = document.getElementsByClassName('mat-dialog-container')[0];
    bodyWrapper.classList.add('background-image-seller');

    let demoDone = this.cookieService.get('sellerDemoDone');
    if (demoDone !== 'true') {
      //this.tourService.sellerTour.start();
      this.cookieService.put('sellerDemoDone', 'true');
    }
  }
}
