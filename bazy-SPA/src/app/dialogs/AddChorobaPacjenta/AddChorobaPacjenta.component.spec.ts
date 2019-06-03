/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddChorobaPacjentaComponent } from './AddChorobaPacjenta.component';

describe('AddChorobaPacjentaComponent', () => {
  let component: AddChorobaPacjentaComponent;
  let fixture: ComponentFixture<AddChorobaPacjentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChorobaPacjentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChorobaPacjentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
