import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PortProviderService } from '../services/port-provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startup-check',
  templateUrl: './startup-check.component.html',
  styleUrls: ['./startup-check.component.scss']
})
export class StartupCheckComponent implements OnInit {

  constructor(private http: Http, private router: Router, public portProvider: PortProviderService) {}

  ngOnInit() {
    setInterval(() => { this.scanForNodes(); }, 3000);
  }

  scanForNodes() {
    let index = 0;
    console.log('running');
    for (let i of this.portProvider.nodes) {
      let url = 'http://localhost:' + i + '/api/loc/me';
      this.http.get(url)
        .toPromise()
        .then(response => this.portProvider.nodes = this.portProvider.nodes.splice(index, 1));
      index++;
    }
    if (this.portProvider.nodes.length === 0) {
      this.router.navigate(['/map']);
    }
  }

}
