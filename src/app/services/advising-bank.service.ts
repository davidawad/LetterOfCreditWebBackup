import { Injectable } from '@angular/core';
import { LocService } from './../loc.service'

@Injectable()
export class AdvisingBankService {

service: LocService;

constructor(private locService: LocService) {
  this.locService = locService;
}
}
