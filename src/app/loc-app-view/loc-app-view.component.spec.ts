/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LocAppViewComponent } from './loc-app-view.component';

describe('LocAppViewComponent', () => {
  let component: LocAppViewComponent;
  let fixture: ComponentFixture<LocAppViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocAppViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocAppViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
