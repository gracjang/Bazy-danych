/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PacjentServiceService } from './PacjentService.service';

describe('Service: PacjentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PacjentServiceService]
    });
  });

  it('should ...', inject([PacjentServiceService], (service: PacjentServiceService) => {
    expect(service).toBeTruthy();
  }));
});
