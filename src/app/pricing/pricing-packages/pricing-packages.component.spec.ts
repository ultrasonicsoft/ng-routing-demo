import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingPackagesComponent } from './pricing-packages.component';

describe('PricingPackagesComponent', () => {
  let component: PricingPackagesComponent;
  let fixture: ComponentFixture<PricingPackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingPackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
