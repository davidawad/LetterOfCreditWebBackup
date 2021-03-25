import { Injectable } from '@angular/core';
import * as $ from "jquery";

@Injectable()
export class UrlProviderService {

  public url = "http://localhost";

  production = false;

  constructor() {
    if (this.production) {
      this.url = "http://51.141.225.140";
    }
  }
}
