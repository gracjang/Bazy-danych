/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JednostkiChoroboweComponent } from './JednostkiChorobowe.component';

describe('JednostkiChoroboweComponent', () => {
  let component: JednostkiChoroboweComponent;
  let fixture: ComponentFixture<JednostkiChoroboweComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JednostkiChoroboweComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JednostkiChoroboweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
