import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CanDeactivate } from '@angular/router';
import { AccountComponent } from './account/account.component';


@Injectable()
export class CanDeactivateAccountGuard implements CanDeactivate<AccountComponent> {
  canDeactivate(component: AccountComponent){
    console.log('canDeactivate callled...' + component.pendingChanges);    
    return !component.pendingChanges;
  }
}
