/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MapLegendComponent } from './map-legend.component';

describe('MapLegendComponent', () => {
  let component: MapLegendComponent;
  let fixture: ComponentFixture<MapLegendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapLegendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
