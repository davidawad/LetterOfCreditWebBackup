import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { IdentityService } from '../services/identity.service';
import { MatDialog } from '@angular/material/dialog';
import { PeersWithPortComponent } from '../peers-with-port/peers-with-port.component';
import * as global from './../globals';

@Component({
  selector: 'app-dashboard-setup',
  templateUrl: './dashboard-setup.component.html',
  styleUrls: ['./dashboard-setup.component.scss']
})
export class DashboardSetupComponent implements AfterViewInit, OnInit {

  angleStart = -360;
  peerMapping = new Array<any>();
  launchText = 'Begin';
  backdropClicked: Boolean;

  constructor(public identityService: IdentityService, private dialog: MatDialog) { }

  ngOnInit() {
    this.identityService.scanForPeers();
  }

  ngAfterViewInit() {
    const angleStart = -360;

    // jquery rotate animation
    function rotate(li, d) {
      $({ d: angleStart }).animate({ d: d }, {
        step: function (now) {
          $(li)
            .css({ transform: 'rotate(' + now + 'deg)' })
            .find('label')
            .css({ transform: 'rotate(' + (-now) + 'deg)' });
        }, duration: 0
      });
    }

    // show / hide the options
    function toggleOptions(s) {
      $(s).toggleClass('open');
      let li = $(s).find('li');
      let deg = $(s).hasClass('half') ? 180 / (li.length - 1) : 360 / li.length;
      for (let i = 0; i < li.length; i++) {
        let d = $(s).hasClass('half') ? (i * deg) - 90 : i * deg;
        $(s).hasClass('open') ? rotate(li[i], d) : rotate(li[i], angleStart);
      }
    }

    $('.selector button').click(function (e) {
      toggleOptions($(this).parent());
    });
  }

  lookupPeer(role: string, event) {
    let dialogRef = this.dialog.open(PeersWithPortComponent);
    dialogRef.backdropClick().subscribe(result => {
      this.backdropClicked = true;
    });
    dialogRef.afterClosed().subscribe(result => {
      if (this.backdropClicked) {
        this.backdropClicked = false;
        return;
      }
      let mapping = this.peerMapping.find(peer => peer.role === role);
      if (mapping) {
        let index = this.peerMapping.indexOf(mapping);
        if (index > -1) {
          this.peerMapping.splice(index, 1);
        }
      }

      this.peerMapping.push({ role: role, port: this.identityService.peer.port, name: this.identityService.peer.name });
      this.identityService.sync(this.peerMapping);

      if (this.peerMapping.length === 5) {
        this.launchText = 'Launch';
        $('#launch').addClass('glow');
      }

      let target = (event.target as Element);
      $('.' + target.id).addClass('marked');
      //$('.' + target.id + '-sub').append(this.identityService.peer.name);
    });
  }

  launchPage(role: string, port: string, event: any, cash = false) {
    let path: string;

    switch (role) {
      case global.seller:
        path = '/web/loc/seller';
        break;
      case global.buyer:
        path = '/web/loc/buyer';
        break;
      case global.advisingBank:
        if (cash) {
          path = '/web/dashboard';
        } else {
          path = '/web/loc/advising';
        }
        break;
      case global.issuingBank:
        if (cash) {
          path = '/web/dashboard';
        } else {
          path = '/web/loc/issuing';
        }
        break;
      case global.centralBank:
        path = '/web/central';
        break;
    }
    let url = 'http://localhost:' + port + path;

    let a = document.createElement('a');
    a.href = url;
    let evt = document.createEvent('MouseEvents');
    evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0,
                                true, false, false, false, 0, null);
    a.dispatchEvent(evt);

    // window.open(url, '_blank');
    let target = event.target as Element;
    target.innerHTML = 'Launched';
  }

  launch(event: any) {
    let target = event.target as Element;
    if (target.innerHTML === 'Launch') {
      $('.wrap').toggleClass('active');
      $('.wrapper').toggleClass('hidden');
      $('.selector').fadeToggle(500);
    }
  }
}
