/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BillOfLadingComponent } from './bill-of-lading.component';

describe('BillOfLadingComponent', () => {
  let component: BillOfLadingComponent;
  let fixture: ComponentFixture<BillOfLadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillOfLadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillOfLadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
