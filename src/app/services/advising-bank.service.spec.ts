/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdvisingBankService } from './advising-bank.service';

describe('Service: ApplicantBank', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvisingBankService]
    });
  });

  it('should ...', inject([AdvisingBankService], (service: AdvisingBankService) => {
    expect(service).toBeTruthy();
  }));
});
