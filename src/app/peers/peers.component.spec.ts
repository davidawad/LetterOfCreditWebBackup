/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PeersComponent } from './peers.component';

describe('PeersComponent', () => {
  let component: PeersComponent;
  let fixture: ComponentFixture<PeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
