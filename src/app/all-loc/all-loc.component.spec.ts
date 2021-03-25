/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AllLocComponent } from './all-loc.component';

describe('AllLocComponent', () => {
  let component: AllLocComponent;
  let fixture: ComponentFixture<AllLocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllLocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
