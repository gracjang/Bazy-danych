/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditDietetykComponent } from './editDietetyk.component';

describe('EditDietetykComponent', () => {
  let component: EditDietetykComponent;
  let fixture: ComponentFixture<EditDietetykComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDietetykComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDietetykComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
