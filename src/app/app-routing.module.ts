import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignUpModule } from './sign-up/sign-up.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { ProductsModule } from './products/products.module';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { AccountComponent } from './account/account.component';
import { AccountModule } from './account/account.module';
import { FooterComponent } from './footer/footer.component';
import { AnotherFooterComponent } from './another-footer/another-footer.component';
import { CanActivateAccountGuard } from './can-activate-account.guard';
import { CanDeactivateAccountGuard } from './can-deactivate-account.guard';
import { PricingModule } from './pricing/pricing.module';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignUpComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'product/:id',
        component: ProductDetailsComponent

      }
    ]
  },
  {
    path: 'account',
    component: AccountComponent,
    data: { pageTitle: 'Routing basic' },
    canActivate: [CanActivateAccountGuard],
    canDeactivate: [CanDeactivateAccountGuard]
  },
  {
    path:'pricing',
    loadChildren:'app/pricing/pricing.module#PricingModule'
  },
  {
    path: 'footer',
    component: FooterComponent,
    outlet: 'bottom'
  },
  {
    path: 'another-footer',
    component: AnotherFooterComponent,
    outlet: 'bottom'
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    LoginModule,
    SignUpModule,
    DashboardModule,
    ProductsModule,
    AccountModule,    
    RouterModule.forRoot(routes)],
  // RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
  providers: [CanActivateAccountGuard, CanDeactivateAccountGuard]
})
export class AppRoutingModule { }
