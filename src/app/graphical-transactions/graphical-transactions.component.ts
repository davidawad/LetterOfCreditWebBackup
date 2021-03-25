import { Component } from '@angular/core';
import { GraphicalTransactionsService } from '../services/graphical-transactions.service';
import { RefreshService } from '../services/refresh.service';

@Component({
  selector: 'app-graphical-transactions',
  templateUrl: './graphical-transactions.component.html',
  styleUrls: ['./graphical-transactions.component.scss']
})
export class GraphicalTransactionsComponent {

  constructor(private gtService: GraphicalTransactionsService, private refreshService: RefreshService) {
    refreshService.missionConfirmed$.subscribe(
      result => {
        this.perform();
      });
  }

  perform() {
    if (this.gtService.nodesInTx.length > 1) {
      let startNode = this.gtService.nodesInTx[0];

      let startStyling = startNode.nativeElement.attributes.style.nodeValue.split(';');
      let x1 = this.extractStyle(startStyling[1]);
      let y1 = this.extractStyle(startStyling[0]);

      for (let x = 1; x < this.gtService.nodesInTx.length; x++) {
        let endNode = this.gtService.nodesInTx[x];

        let endStyling = endNode.nativeElement.attributes.style.nodeValue.split(';');
        let x2 = this.extractStyle(endStyling[1]);
        let y2 = this.extractStyle(endStyling[0]);

        if (this.gtService.cash) {
          this.sendCash(x1, y1, x2, y2);
          this.gtService.cash = false;
        } else {
          this.sendContract(x1, y1, x2, y2);
        }
      }

      this.fade();
    }
    this.gtService.nodesInTx = [];
  }

  fade() {
    $('#map').animate({ opacity: 0.3 }, 500);
    setTimeout(() => $('#map').animate({ opacity: 1 }, 1000), 3300);

    $('.mat-dialog-container').fadeToggle();
    setTimeout(() => $('.mat-dialog-container').fadeToggle(), 4000);
  }

  extractStyle(style: string) {
    let startPoint = style.indexOf(':') + 1;
    let endPoint = style.indexOf('%');
    let result = style.substring(startPoint, endPoint);

    return result;
  }

  sendContract(x1, y1, x2, y2) {
    let contract = $('<img src="assets/diploma.svg">')
      .appendTo('#page')
      .addClass('contract')
      .css({
        'position': 'absolute',
        'top': (y1 * 0.98) + '%',
        'left': (x1 * 0.98) + '%',
        'width': 0,
        'height': 0
      });
    let y = y2 - y1;
    let x = x2 - x1;
    contract.animate({ width: 50, height: 50 }, 500);
    contract.animate({
      'top': '+=' + y + '%',
      'left': '+=' + x + '%'
    }, 2000).animate({ width: 0, height: 0 }, 400);
  }

  sendCash(x1, y1, x2, y2) {
    let contract = $('<img src="assets/cash.png">')
      .appendTo('#page')
      .addClass('contract')
      .css({
        'position': 'absolute',
        'top': (y1 * 0.98) + '%',
        'left': (x1 * 0.98) + '%',
        'width': 0,
        'height': 0
      });
    let y = y2 - y1;
    let x = x2 - x1;
    contract.animate({ width: 50, height: 50 }, 500);
    contract.animate({
      'top': '+=' + y + '%',
      'left': '+=' + x + '%'
    }, 2000).animate({ width: 0, height: 0 }, 400);
  }

  createLine(x1, y1, x2, y2) {
    let w = window.innerWidth;
    let h = window.innerHeight;
    let length = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    let angle = Math.atan2(h * ((y2 - y1) / 100), (w * (x2 - x1) / 100)) * 180 / Math.PI;
    let transform = 'rotate(' + angle + 'deg)';

    let line = $('<div>')
      .appendTo('#page')
      .addClass('line')
      .css({
        'position': 'absolute',
        'transform': transform,
        'height': '3px',
        'background-color': 'rgba(255, 255, 255, 0.4)'
      })
      .width((length - 2) + '%')
      .offset({ left: w * (x1 / 100), top: h * (y1 / 100) + 50 });

    line.fadeOut(4000);
  }
}
