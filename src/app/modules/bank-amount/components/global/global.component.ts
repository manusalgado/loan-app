import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.sass']
})
export class GlobalComponent implements OnInit {

  @Input() amount: number;

  constructor() { }

  ngOnInit(): void {
  }

}
