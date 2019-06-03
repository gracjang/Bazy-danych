/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditChorobaPacjentaComponent } from './EditChorobaPacjenta.component';

describe('EditChorobaPacjentaComponent', () => {
  let component: EditChorobaPacjentaComponent;
  let fixture: ComponentFixture<EditChorobaPacjentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditChorobaPacjentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChorobaPacjentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
