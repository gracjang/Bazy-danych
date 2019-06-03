/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlanyComponent } from './Plany.component';

describe('PlanyComponent', () => {
  let component: PlanyComponent;
  let fixture: ComponentFixture<PlanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
