/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GraphicalTransactionsService } from './graphical-transactions.service';

describe('Service: GraphicalTransactions', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraphicalTransactionsService]
    });
  });

  it('should ...', inject([GraphicalTransactionsService], (service: GraphicalTransactionsService) => {
    expect(service).toBeTruthy();
  }));
});
