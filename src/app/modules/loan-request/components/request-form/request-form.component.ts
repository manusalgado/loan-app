import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.sass']
})
export class RequestFormComponent implements OnInit {

  rangevalue = 100000;

  constructor() { }

  ngOnInit(): void {
  }

  public valueChanged(value): void {
    this.rangevalue = value.target.value;

  }

}
