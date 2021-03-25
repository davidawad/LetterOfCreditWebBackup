import { Injectable } from '@angular/core';

@Injectable()
export class StatusService {
  status: string;
  shipAnimation: boolean;

  constructor() { }
}
