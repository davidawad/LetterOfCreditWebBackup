/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PeersWithPortComponent } from './peers-with-Port.component';

describe('PeersWithPortComponent', () => {
  let component: PeersWithPortComponent;
  let fixture: ComponentFixture<PeersWithPortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeersWithPortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeersWithPortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
