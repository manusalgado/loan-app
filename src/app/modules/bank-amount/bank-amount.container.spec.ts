import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAmountContainer } from './bank-amount.container';

describe('BankAmountContainer', () => {
  let component: BankAmountContainer;
  let fixture: ComponentFixture<BankAmountContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankAmountContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAmountContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
