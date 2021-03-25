/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TourService } from './tour.service';

describe('Service: Tour', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TourService]
    });
  });

  it('should ...', inject([TourService], (service: TourService) => {
    expect(service).toBeTruthy();
  }));
});