/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CashIssuanceComponent } from './cash-issuance.component';

describe('CashIssuanceComponent', () => {
  let component: CashIssuanceComponent;
  let fixture: ComponentFixture<CashIssuanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashIssuanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashIssuanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
