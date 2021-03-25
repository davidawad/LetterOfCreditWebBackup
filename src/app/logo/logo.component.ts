import { Component, OnInit } from '@angular/core';
import { IdentityService } from '../services/identity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  folder = 'assets/';
  logoImagePath: string;
  me: string;

  constructor(private identityService: IdentityService, private router: Router) { }

  ngOnInit() {
    this.identityService.getMe().then(response => this.me = response.json().me);
    switch (this.router.url) {
      case '/seller':
            this.logoImagePath = this.folder + 'seller.png';
            break;
      case '/buyer':
            this.logoImagePath = this.folder + 'buyer.png';
            break;
      case '/advising':
            this.logoImagePath = this.folder + 'advising.png';
            break;
      case '/issuing':
            this.logoImagePath = this.folder + 'issuing.png';
            break;
      default:
            this.logoImagePath = this.folder + this.identityService.current + '.png';
    }
  }

}
