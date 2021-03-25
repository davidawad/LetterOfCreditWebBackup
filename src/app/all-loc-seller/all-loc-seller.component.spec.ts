/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AllLocSellerComponent } from './all-loc-seller.component';

describe('AllLocComponent', () => {
  let component: AllLocSellerComponent;
  let fixture: ComponentFixture<AllLocSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllLocSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLocSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
