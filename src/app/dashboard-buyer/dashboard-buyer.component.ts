import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CookieService } from 'angular2-cookie/core';
import { TourService } from '../services/tour.service';

@Component({
  selector: 'dashboard-buyer',
  templateUrl: './dashboard-buyer.component.html',
  styleUrls: ['./dashboard-buyer.component.css']
})
export class DashboardBuyerComponent implements OnInit {
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService, private cookieService: CookieService,
    private tourService: TourService) { }

  ngOnInit() {
    // let body = document.getElementsByTagName('body')[0];
    // body.classList.add('background-image-buyer');

    let bodyWrapper = document.getElementsByClassName('mat-dialog-container')[0];
    bodyWrapper.classList.add('background-image-buyer');

    let demoDone = this.cookieService.get('buyerDemoDone');
    if (demoDone !== 'true') {
      this.tourService.buyerTour.start();
      this.cookieService.put('buyerDemoDone', 'true');
    }
  }
}
