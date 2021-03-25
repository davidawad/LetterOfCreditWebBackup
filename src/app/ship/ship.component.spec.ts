/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShipComponent } from './ship.component';

describe('ShipComponent', () => {
  let component: ShipComponent;
  let fixture: ComponentFixture<ShipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
