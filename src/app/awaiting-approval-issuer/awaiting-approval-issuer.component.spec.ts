/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AwaitingApprovalIssuerComponent } from './awaiting-approval-issuer.component';

describe('AwaitingApprovalIssuerComponent', () => {
  let component: AwaitingApprovalIssuerComponent;
  let fixture: ComponentFixture<AwaitingApprovalIssuerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwaitingApprovalIssuerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwaitingApprovalIssuerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
