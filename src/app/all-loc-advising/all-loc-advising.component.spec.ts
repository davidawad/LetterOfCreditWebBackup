/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AllLocAdvisingComponent } from './all-loc-advising.component';

describe('AllLocAdvisingComponent', () => {
  let component: AllLocAdvisingComponent;
  let fixture: ComponentFixture<AllLocAdvisingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllLocAdvisingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLocAdvisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
