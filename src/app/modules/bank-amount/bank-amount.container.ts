import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bank-amount',
  templateUrl: './bank-amount.container.html',
  styleUrls: ['./bank-amount.container.sass']
})
export class BankAmountContainer implements OnInit {

  public globalAmount: number = environment.globalAmount;

  constructor() { }

  ngOnInit(): void {
  }

}
