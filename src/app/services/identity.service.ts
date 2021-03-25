import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { PortProviderService } from './port-provider.service';
import { UrlProviderService } from './url-provider.service';
import { PeerWithPort } from '../peer-with-port';

@Injectable()
export class IdentityService {

  public peer: PeerWithPort;
  public me: string;
  public seller: string;
  public buyer: string;
  public advising: string;
  public issuing: string;
  public central: string;
  public current: string;

  public scannedPeers: PeerWithPort[] = new Array<PeerWithPort>();
  public removedPeers = new Set<PeerWithPort>();

  constructor(private http: Http, private portService: PortProviderService, private urlService: UrlProviderService) {
  }

  getUrl(path: string) {
    return this.urlService.url + ':' + this.portService.current + path;
  }

  getMe() {
    let url = this.getUrl('/api/loc/me');
    return this.http.get(url)
      .toPromise();
  }

  getPeers() {
    let url = this.getUrl('/api/loc/peers');
    return this.http.get(url)
      .toPromise();
  };

  removeScannedPeer(peer: PeerWithPort) {
    this.removedPeers.add(peer);
  }

  addPeer(peer: PeerWithPort) {
    this.removedPeers.delete(peer);
  }

  sync(peers: any) {
    this.removedPeers.clear();
    for (let p of peers) {
      let peer = this.scannedPeers.filter(s => s.name === p.name)[0];
      this.removedPeers.add(peer);
    }
  }

  scanForPeers() {
    if (this.scannedPeers.length === 0) {
      let i: number;
      for (i = 10014; i <= 10023; i+=3) {
        let url = this.urlService.url + ':' + i + '/api/loc/me';
        let port = i;
        this.http.get(url)
          .toPromise()
          .then(response => this.scannedPeers.push(new PeerWithPort().deserialize(response.json().me + '|' + port)))
          .catch(this.handleError);
      }
    }
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
