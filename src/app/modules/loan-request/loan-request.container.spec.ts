import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanRequestContainer } from './loan-request.container';

describe('LoanRequestContainer', () => {
  let component: LoanRequestContainer;
  let fixture: ComponentFixture<LoanRequestContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanRequestContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanRequestContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
