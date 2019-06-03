/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChorobyPacjentaComponent } from './ChorobyPacjenta.component';

describe('ChorobyPacjentaComponent', () => {
  let component: ChorobyPacjentaComponent;
  let fixture: ComponentFixture<ChorobyPacjentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChorobyPacjentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChorobyPacjentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
