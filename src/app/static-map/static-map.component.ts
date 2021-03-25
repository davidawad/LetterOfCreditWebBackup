import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DashboardSellerComponent } from '../dashboard-seller/dashboard-seller.component';
import { PortProviderService } from '../services/port-provider.service';
import { IdentityService } from '../services/identity.service';
import { DashboardBuyerComponent } from '../dashboard-buyer/dashboard-buyer.component';
import { DashboardAdvisingComponent } from '../dashboard-advising/dashboard-advising.component';
import { DashboardIssuerComponent } from '../dashboard-issuer/dashboard-issuer.component';
import { CashIssuanceComponent } from '../cash-issuance/cash-issuance.component';
import { RefreshService } from '../services/refresh.service';
import { GraphicalTransactionsService } from '../services/graphical-transactions.service';
import * as global from './../globals';

@Component({
  selector: 'app-static-map',
  templateUrl: './static-map.component.html',
  styleUrls: ['./static-map.component.scss']
})
export class StaticMapComponent implements OnInit {
  expandTxt = '>';
  shrinkTxt = '<';
  buttonTxt = this.expandTxt;
  unfolded = false;
  names = global;

  @ViewChild('map') map;
  @ViewChild('markerBuyer') markerBuyer;
  @ViewChild('markerSeller') markerSeller;
  @ViewChild('markerAdvising') markerAdvising;
  @ViewChild('markerIssuing') markerIssuing;
  @ViewChild('markerNotary') markerNotary;

  constructor(private router: Router, private dialog: MatDialog,
    private portService: PortProviderService, private identityService: IdentityService,
    public refreshService: RefreshService, private gtService: GraphicalTransactionsService) {}

  ngOnInit() {
    // Increments the delay on each item.
    $('.rolldown-list li').each(function () {
      let delay = ($(this).index() / 4) + 's';
      $(this).css({
        webkitAnimationDelay: delay,
        mozAnimationDelay: delay,
        animationDelay: delay
      });
    });

    let totalHeight = 0,
      dropDownHeight = $('.dropdown-menu').outerHeight();

    $('.dropdown-menu').children().each(function () {
      totalHeight = totalHeight + $(this).outerHeight(true);
    });
    $('.trig').click(function () {
      if (dropDownHeight === 0) {
        $('.dropdown-menu').css('height', totalHeight + 'px');
        dropDownHeight = totalHeight;

      } else {
        $('.dropdown-menu').css('height', '0');
        dropDownHeight = 0;
      }
    });

    this.gtService.allNodes[this.names.buyerName] = this.markerBuyer;
    this.gtService.allNodes[this.names.sellerName] = this.markerSeller;
    this.gtService.allNodes[this.names.issuingBankName] = this.markerIssuing;
    this.gtService.allNodes[this.names.advisingBankName] = this.markerAdvising;
  }

  launch() {
    $('#loan').toggle();
    setTimeout(() => this.expandMenu(), 300);
    setTimeout(() => $('#map-legend').fadeToggle({duration: 1000}), 1500);
    setTimeout(() => $('#other-markers').fadeToggle({duration: 1500}), 2000);
  }

  expandMenu() {
    $(this).toggleClass('change');
    $('.sidenav').toggleClass('sidenav-toggle');
    $('.container').toggleClass('container-toggle');
    if (!this.unfolded) {
      $('#myList').removeClass('rolldown-list');
      setTimeout(function () {
        $('#myList').addClass('rolldown-list');
      }, 1);
      this.unfolded = true;
    }
    if (this.buttonTxt === this.expandTxt) {
      this.buttonTxt = this.shrinkTxt;
    } else {
      this.buttonTxt = this.expandTxt;
    }
  }

  launchSeller() {
    this.portService.current = 10014;
    this.identityService.current = 'seller';
    this.dialog.open(DashboardSellerComponent, { width: '85%', height: '85%' });
  }

  launchBuyer() {
    this.portService.current = 10017;
    this.identityService.current = 'buyer';
    this.dialog.open(DashboardBuyerComponent, { width: '85%', height: '85%' });
  }

  launchAdvising() {
    this.portService.current = 10020;
    this.identityService.current = 'advising';
    this.dialog.open(DashboardAdvisingComponent, { width: '85%', height: '85%' });
  }

  launchIssuing() {
    this.portService.current = 10023;
    this.identityService.current = 'issuing';
    this.dialog.open(DashboardIssuerComponent, { width: '85%', height: '85%' });
  }

  launchCentral() {
    this.portService.current = 10011;
    this.dialog.open(CashIssuanceComponent, { width: '85%', height: '85%' });
  }

  launchAdvisingCash() {
    this.portService.current = 10020;
    this.dialog.open(CashIssuanceComponent, { width: '85%', height: '85%' });
  }

  launchIssuingCash() {
    this.portService.current = 10023;
    this.dialog.open(CashIssuanceComponent, { width: '85%', height: '85%' });
  }
  launchNotary() {
    this.portService.current = 10004;
  }
}
