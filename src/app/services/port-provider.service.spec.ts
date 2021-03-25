/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PortProviderService } from './port-provider.service';

describe('Service: PortProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortProviderService]
    });
  });

  it('should ...', inject([PortProviderService], (service: PortProviderService) => {
    expect(service).toBeTruthy();
  }));
});