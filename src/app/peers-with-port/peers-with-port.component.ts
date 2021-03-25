import { Component, OnInit } from '@angular/core';
import { IdentityService } from '../services/identity.service';
import { MatDialogRef } from '@angular/material';
import { PeerWithPort } from '../peer-with-port';

@Component({
  selector: 'app-peers-with-Port',
  templateUrl: './peers-with-Port.component.html',
  styleUrls: ['./peers-with-Port.component.scss']
})
export class PeersWithPortComponent implements OnInit {
  peers: PeerWithPort[];

  constructor(
    private identityService: IdentityService,
    public dialogRef: MatDialogRef<PeersWithPortComponent>) { }

  ngOnInit() {
    this.peers = new Array<PeerWithPort>();
    this.identityService.scanForPeers();
    this.peers = this.identityService.scannedPeers.filter((item) => {
      return !this.identityService.removedPeers.has(item);
    });
  }

  setPeer(peer: PeerWithPort) {
    this.identityService.peer = peer;
    this.identityService.removeScannedPeer(peer);
    this.dialogRef.close();
  }
}
