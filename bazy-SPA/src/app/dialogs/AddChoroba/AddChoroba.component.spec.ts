/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddChorobaComponent } from './AddChoroba.component';

describe('AddChorobaComponent', () => {
  let component: AddChorobaComponent;
  let fixture: ComponentFixture<AddChorobaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChorobaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChorobaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
