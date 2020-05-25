import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-request-content',
  templateUrl: './request-content.component.html',
  styleUrls: ['./request-content.component.sass']
})
export class RequestContentComponent {
  @Input() selectedRange: number;
  @Input() status: boolean;
}
