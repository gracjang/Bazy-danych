/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditChorobaComponent } from './EditChoroba.component';

describe('EditChorobaComponent', () => {
  let component: EditChorobaComponent;
  let fixture: ComponentFixture<EditChorobaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditChorobaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChorobaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
