import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankAmountContainer } from './bank-amount.container';
import { GlobalComponent } from './components/global/global.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BankAmountContainer, GlobalComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [BankAmountContainer]
})
export class BankAmountModule { }
