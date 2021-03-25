/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShepherdService } from './shepherd.service';

describe('Service: Shepherd', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShepherdService]
    });
  });

  it('should ...', inject([ShepherdService], (service: ShepherdService) => {
    expect(service).toBeTruthy();
  }));
});