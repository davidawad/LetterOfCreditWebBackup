import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs';
import { TimerObservable } from 'rxjs/observable/TimerObservable';

@Injectable()
export class RefreshService {
  public loading: boolean;

  // Observable sources
  private confirmedSource = new Subject<boolean>();
  private subscription: Subscription;

  // Observable string streams
  missionConfirmed$ = this.confirmedSource.asObservable();

  confirmMission() {
    this.confirmedSource.next(true);
  }

  constructor() {
    /*let timer = TimerObservable.create(100, 5000);
    this.subscription = timer.subscribe(t => {
      this.confirmMission();
    });*/
  }
}
