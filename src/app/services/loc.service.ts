import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Loc } from '../loc';
import { LocState } from '../loc-state';
import { LocSummary } from '../loc-summary';
import { LocStateSummary } from '../loc-state-summary';
import { Cash } from '../cash';
import { Party } from '../party';
import { Stats } from '../stats';
import { Tx } from '../tx';
import 'rxjs/add/operator/toPromise';
import { PortProviderService } from '../services/port-provider.service';
import { UrlProviderService } from '../services/url-provider.service';
import { MatDialog } from '@angular/material';
import { ErrorFeedbackComponent } from '../error-feedback/error-feedback.component';
import { RefreshService } from '../services/refresh.service';

@Injectable()
export class LocService {

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http, private portService: PortProviderService,
    private urlService: UrlProviderService, private dialog: MatDialog,
    private refreshService: RefreshService) { }

  getLocApp(id: string): Promise<Loc> {
    let _url = this.getUrl('/api/loc/get-loc-app');
    let trimmedId = id[0];
    const url = `${_url}?ref=${trimmedId}`;

    return this.http.get(url)
      .toPromise()
      .then(
        res => new Loc().deserialize(res.json()),
        err => this.handleError(err)
      );
  }

  getUrl(path: string) {
    return this.urlService.url + ':' + this.portService.current + path;
  }

  getLoc(id: string): Promise<LocState> {
    let _url = this.getUrl('/api/loc/get-loc');
    let trimmedId = id[0];
    const url = `${_url}?ref=${trimmedId}`;

    return this.http.get(url)
      .toPromise()
      .then(
        res => new LocState().deserialize(res.json()),
        err => this.handleError(err)
      );
  }

  getAllLocApps(node: string): Promise<LocSummary[]> {
    let url = this.getUrl('/api/loc/all-app');
    return this.http.get(url)
      .toPromise()
      .then(
        res => this.createLocSummaryArray(res.json()) as LocSummary[],
        err => this.handleError(err)
      );
  }

  getAwaitingApprovalLocs(): Promise<LocSummary[]> {
    let url = this.getUrl('/api/loc/awaiting-approval');
    return this.http.get(url)
      .toPromise()
      .then(
        res => this.createLocSummaryArray(res.json()) as LocSummary[],
        err => this.handleError(err)
      );
  }

  getAwaitingApprovalLocsIssuer(): Promise<LocSummary[]> {
    let url = this.getUrl('/api/loc/awaiting-approval');
    return this.http.get(url)
      .toPromise()
      .then(
        response => this.createLocSummaryArray(response.json()) as LocSummary[],
        err => this.handleError(err)
      );
  }

  getActiveLocsApps(): Promise<LocSummary[]> {
    let url =  this.getUrl('/api/loc/active');
    return this.http.get(url)
      .toPromise()
      .then(
        response => this.createLocSummaryArray(response.json()) as LocSummary[],
        err => this.handleError(err)
      );
  }

  getActiveLocs(): Promise<LocStateSummary[]> {
    let url = this.getUrl('/api/loc/all');
    return this.http.get(url)
      .toPromise()
      .then(
        res => this.createLocStateSummaryArray(res.json()) as LocStateSummary[],
        err => this.handleError(err)
      );
  }

  getAllLocs(): Promise<LocSummary[]> {
    let url = this.getUrl('/api/loc/all');
    return this.http.get(url)
      .toPromise()
      .then(
        res => this.createLocSummaryArray(res.json()) as LocSummary[],
        err => this.handleError(err)
      );
  }

  getAwaitingPaymentLocs(): Promise<LocSummary[]> {
    let url = this.getUrl('/api/loc/awaiting-payment');
    return this.http.get(url)
      .toPromise()
      .then(
        res => this.createLocSummaryArray(res.json()) as LocSummary[],
        err => this.handleError(err)
      );
  }

  getCashBalances(): Promise<Cash> {
    let url = this.getUrl('/api/loc/cash-balances');
    return this.http.get(url)
      .toPromise()
      .then(
        res => new Cash().deserialize(res.json()) as Cash,
        err => this.handleError(err)
      );
  }

  getMe(): Promise<Party> {
    let url = this.getUrl('/api/loc/me');
    return this.http.get(url)
      .toPromise()
      .then(
        res => new Party().deserialize(res.json()) as Party,
        err => this.handleError(err)
      );
  }

  getPeers(): Promise<Party[]> {
    let url = this.getUrl('/api/loc/peers');
    return this.http.get(url)
      .toPromise()
      .then(
        res => this.createPartyArray(res.json()) as Party[],
        err => this.handleError(err)
      );
  }

  getStats(): Promise<Stats> {
    let url = this.getUrl('/api/loc/loc-stats');
    return this.http.get(url)
      .toPromise()
      .then(
        res => new Stats().deserialize(res.json()) as Stats,
        err => this.handleError(err)
      );
  }

  createLoc(loc: Loc): Promise<string> {
    let url = this.getUrl('/api/loc/apply-for-loc');
    return this.http
      .post(url, JSON.stringify(loc), { headers: this.headers })
      .toPromise()
      .then(
        res => new Tx().deserialize(res).txResponse,
        err => this.handleError(err)
      );
  }

  approveLoc(ref: string): Promise<string> {
    let _url = this.getUrl('/api/loc/approve-loc');
    const url = `${_url}?ref=${ref}`;
    return this.http.get(url)
      .toPromise()
      .then(
        res => new Tx().deserialize(res).txResponse,
        err => this.handleError(err)
      );
  }

  paySeller(ref: string): Promise<string> {
    let _url = this.getUrl('/api/loc/pay-seller');
    const url = `${_url}?locId=${ref}`;
    return this.http.get(url).toPromise()
      .then(
        res => new Tx().deserialize(res).txResponse,
        err => this.handleError(err)
      );
  }

  payAdviser(ref: string): Promise<string> {
    let _url = this.getUrl('/api/loc/pay-adviser');
    const url = `${_url}?locId=${ref}`;
    return this.http.get(url)
      .toPromise()
      .then(
        res => new Tx().deserialize(res).txResponse,
        err => this.handleError(err)
      );
  }

  payIssuer(ref: string): Promise<string> {
    let _url = this.getUrl('/api/loc/pay-issuer');
    const url = `${_url}?locId=${ref}`;
    return this.http.get(url)
      .toPromise()
      .then(
        res => new Tx().deserialize(res).txResponse,
        err => this.handleError(err)
      )
  }

  private createPartyArray(input: any): Party[] {
    let parties = new Array<Party>();
    input.peers.forEach((element: string) => {
      let party = new Party().deserializeName(element);
      parties.push(party);
    });
    return parties;
  }

  private createLocSummaryArray(input: any): LocSummary[] {
    let locSummaries = new Array<LocSummary>();
    input.forEach((element: string[]) => {
      let locSummary = new LocSummary().deserialize(element);
      locSummaries.push(locSummary);
    });
    return locSummaries;
  }

  private createLocStateSummaryArray(input: any): LocStateSummary[] {
    let locStateSummaries = new Array<LocStateSummary>();
    input.forEach((element: string[]) => {
      let locStateSummary = new LocStateSummary().deserialize(element);
      locStateSummaries.push(locStateSummary);
    });
    return locStateSummaries;
  }

  shipGoods(ref: string): Promise<LocSummary> {
    let _url = this.getUrl('/api/loc/ship');
    const url = `${_url}?ref=${ref}`;
    return this.http.get(url)
      .toPromise()
      .then(
        res => new Tx().deserialize(res).txResponse,
        err => this.handleError(err)
      )
  }

  private handleError(response: Response): Promise<any> {
    this.dialog.open(ErrorFeedbackComponent,
      { data: { error: response.text()}});
      this.refreshService.loading = false;
    return Promise.reject(response);
  }
}
