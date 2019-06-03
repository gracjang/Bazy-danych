/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DietetykComponent } from './dietetyk.component';

describe('DietetykComponent', () => {
  let component: DietetykComponent;
  let fixture: ComponentFixture<DietetykComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietetykComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietetykComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
