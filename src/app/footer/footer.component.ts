import { Component } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private cookieService: CookieService) { }

  reset() {
    this.cookieService.removeAll();
  }

  reveal() {
    $('#loan').toggle();
  }

}
