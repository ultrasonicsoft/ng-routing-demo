import { TestBed, async, inject } from '@angular/core/testing';

import { CanDeactivateAccountGuard } from './can-deactivate-account.guard';

describe('CanDeactivateAccountGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanDeactivateAccountGuard]
    });
  });

  it('should ...', inject([CanDeactivateAccountGuard], (guard: CanDeactivateAccountGuard) => {
    expect(guard).toBeTruthy();
  }));
});
