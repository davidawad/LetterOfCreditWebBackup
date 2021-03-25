/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BillOfLadingViewComponent } from './bill-of-lading-view.component';

describe('BillOfLadingViewComponent', () => {
  let component: BillOfLadingViewComponent;
  let fixture: ComponentFixture<BillOfLadingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillOfLadingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillOfLadingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
