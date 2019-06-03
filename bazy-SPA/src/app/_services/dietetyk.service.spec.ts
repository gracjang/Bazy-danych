/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DietetykService } from './dietetyk.service';

describe('Service: Dietetyk', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DietetykService]
    });
  });

  it('should ...', inject([DietetykService], (service: DietetykService) => {
    expect(service).toBeTruthy();
  }));
});
