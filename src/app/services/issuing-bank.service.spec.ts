/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IssuingBankService } from './issuing-bank.service';

describe('Service: IssuingBank', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssuingBankService]
    });
  });

  it('should ...', inject([IssuingBankService], (service: IssuingBankService) => {
    expect(service).toBeTruthy();
  }));
});