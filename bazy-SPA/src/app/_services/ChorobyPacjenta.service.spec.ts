/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChorobyPacjentaService } from './ChorobyPacjenta.service';

describe('Service: ChorobyPacjenta', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChorobyPacjentaService]
    });
  });

  it('should ...', inject([ChorobyPacjentaService], (service: ChorobyPacjentaService) => {
    expect(service).toBeTruthy();
  }));
});
