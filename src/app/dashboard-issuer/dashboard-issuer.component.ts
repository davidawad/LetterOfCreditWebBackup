import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { TourService } from '../services/tour.service';

@Component({
  selector: 'dashboard-issuer',
  templateUrl: './dashboard-issuer.component.html',
  styleUrls: ['./dashboard-issuer.component.css']
})
export class DashboardIssuerComponent implements OnInit {

  constructor(private cookieService: CookieService, private tourService: TourService) { }

  ngOnInit() {
    // let body = document.getElementsByTagName('body')[0];
    // body.classList.add('background-image-issuing');

    let bodyWrapper = document.getElementsByClassName('mat-dialog-container')[0];
    bodyWrapper.classList.add('background-image-issuing');

    let demoDone = this.cookieService.get('issuerDemoDone');
    if (demoDone !== 'true') {
      this.tourService.issuerTour.start();
      this.cookieService.put('issuerDemoDone', 'true');
    }
  }
}
