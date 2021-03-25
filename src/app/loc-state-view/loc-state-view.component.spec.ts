/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LocStateViewComponent } from './loc-state-view.component';

describe('LocStateViewComponent', () => {
  let component: LocStateViewComponent;
  let fixture: ComponentFixture<LocStateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocStateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocStateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
