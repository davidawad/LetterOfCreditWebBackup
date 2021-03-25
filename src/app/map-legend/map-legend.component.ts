import { Component, OnInit } from '@angular/core';
import { PeerWithPort } from '../peer-with-port';
import { IdentityService } from '../services/identity.service';

@Component({
  selector: 'app-map-legend',
  templateUrl: './map-legend.component.html',
  styleUrls: ['./map-legend.component.scss']
})
export class MapLegendComponent implements OnInit {
  peers: PeerWithPort[];

  constructor(public identityService: IdentityService) { }

  ngOnInit() {
    this.peers = new Array<PeerWithPort>();
    this.identityService.scanForPeers();
  }
}
