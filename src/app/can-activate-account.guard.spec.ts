import { TestBed, async, inject } from '@angular/core/testing';

import { CanActivateAccountGuard } from './can-activate-account.guard';

describe('CanActivateAccountGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateAccountGuard]
    });
  });

  it('should ...', inject([CanActivateAccountGuard], (guard: CanActivateAccountGuard) => {
    expect(guard).toBeTruthy();
  }));
});
