/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlanyService } from './Plany.service';

describe('Service: Plany', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanyService]
    });
  });

  it('should ...', inject([PlanyService], (service: PlanyService) => {
    expect(service).toBeTruthy();
  }));
});
