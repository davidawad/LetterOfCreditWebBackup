import { Component, OnInit } from '@angular/core';
import { IdentityService } from '../services/identity.service';
import { Peer } from '../peer';
import { MatDialogRef } from '@angular/material';
import { PeerWithPort } from '../peer-with-port';

@Component({
  selector: 'app-peers',
  templateUrl: './peers.component.html',
  styleUrls: ['./peers.component.scss']
})
export class PeersComponent implements OnInit {
  peers: Peer[];

  constructor(
    private identityService: IdentityService,
    public dialogRef: MatDialogRef<PeersComponent>) { }

  ngOnInit() {
    this.peers = new Array<Peer>();
    this.identityService.getPeers().then(response => this.peers = new Peer().deserialize(response.json()).peers);
  }

  setPeer(name: string) {
    this.identityService.peer = new PeerWithPort();
    this.identityService.peer.name = name;
    this.dialogRef.close();
  }
}
