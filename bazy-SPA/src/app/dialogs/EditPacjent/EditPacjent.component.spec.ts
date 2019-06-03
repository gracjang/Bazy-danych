/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditPacjentComponent } from './EditPacjent.component';

describe('EditPacjentComponent', () => {
  let component: EditPacjentComponent;
  let fixture: ComponentFixture<EditPacjentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPacjentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPacjentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
