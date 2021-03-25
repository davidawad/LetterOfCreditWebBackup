/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AllPurchaseOrderSellerComponent } from './all-purchase-order-seller.component';

describe('AllPurchaseOrderSellerComponent', () => {
  let component: AllPurchaseOrderSellerComponent;
  let fixture: ComponentFixture<AllPurchaseOrderSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPurchaseOrderSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPurchaseOrderSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
