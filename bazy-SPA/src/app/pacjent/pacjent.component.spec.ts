/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PacjentComponent } from './pacjent.component';

describe('PacjentComponent', () => {
  let component: PacjentComponent;
  let fixture: ComponentFixture<PacjentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacjentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacjentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
