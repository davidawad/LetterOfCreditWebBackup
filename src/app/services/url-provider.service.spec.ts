/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UrlProviderService } from './url-provider.service';

describe('Service: UrlProvider', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlProviderService]
    });
  });

  it('should ...', inject([UrlProviderService], (service: UrlProviderService) => {
    expect(service).toBeTruthy();
  }));
});
