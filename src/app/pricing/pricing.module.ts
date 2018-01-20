import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingComponent } from './pricing.component';
import { PricingDetailsComponent } from './pricing-details/pricing-details.component';
import { PricingPackagesComponent } from './pricing-packages/pricing-packages.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

var childRoutes: Routes = [
  {
    path: '',    
    component: PricingComponent
  },
  {
    path: 'pricing-details',    
    component: PricingDetailsComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(childRoutes)
  ],
  declarations: [PricingComponent, PricingDetailsComponent, PricingPackagesComponent]
})
export class PricingModule { }
