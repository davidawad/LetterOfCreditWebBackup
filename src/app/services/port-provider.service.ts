import { Injectable } from '@angular/core';

@Injectable()
export class PortProviderService {

  public current: number;
  public nodes: Array<Number> = [10014, 10017, 10020, 10023];

  constructor() {
    if (location.port !== '4200') {
      let port = Number(location.port);
      this.current = port;
    } else {
      switch (location.pathname) {
        case '/issuing':
          this.current = 10023;
          break;
        case '/advising':
          this.current = 10020;
          break;
        case '/buyer':
          this.current = 10017;
          break;
        case '/seller':
          this.current = 10014;
          break;
      }
    }
  }
}
