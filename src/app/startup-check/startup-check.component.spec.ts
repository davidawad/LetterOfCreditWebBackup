/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StartupCheckComponent } from './startup-check.component';

describe('StartupCheckComponent', () => {
  let component: StartupCheckComponent;
  let fixture: ComponentFixture<StartupCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
