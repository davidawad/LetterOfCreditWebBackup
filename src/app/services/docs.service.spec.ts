/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BolService } from './bol.service';

describe('Service: Bol', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BolService]
    });
  });

  it('should ...', inject([BolService], (service: BolService) => {
    expect(service).toBeTruthy();
  }));
});