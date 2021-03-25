import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rest-of-network',
  templateUrl: './rest-of-network.component.html',
  styleUrls: ['./rest-of-network.component.scss']
})
export class RestOfNetworkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.other-marker').each(function () {
      let x = Math.round(0xffffff * Math.random()).toString(16);
      let y = (6 - x.length);
      let z = '000000';
      let z1 = z.substring(0, y);
      let color = '#' + z1 + x;

      $(this).css({
        'fill': color
      });
    });
  }
}
