/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddDietetykComponent } from './AddDietetyk.component';

describe('AddDietetykComponent', () => {
  let component: AddDietetykComponent;
  let fixture: ComponentFixture<AddDietetykComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDietetykComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDietetykComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
