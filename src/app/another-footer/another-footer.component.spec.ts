import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherFooterComponent } from './another-footer.component';

describe('AnotherFooterComponent', () => {
  let component: AnotherFooterComponent;
  let fixture: ComponentFixture<AnotherFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
