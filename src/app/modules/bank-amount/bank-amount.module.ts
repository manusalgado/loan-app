import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankAmountContainer } from './bank-amount.container';
import { GlobalComponent } from './components/global/global.component';

@NgModule({
  declarations: [BankAmountContainer, GlobalComponent],
  imports: [
    CommonModule
  ],
  exports: [BankAmountContainer]
})
export class BankAmountModule { }
