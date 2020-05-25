import { Component, Input, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-loan-status',
  templateUrl: './loan-status.component.html',
  styleUrls: ['./loan-status.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoanStatusComponent implements OnInit {
  public approved: boolean;
  @Input() status: boolean;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.approved = this.status;
    this.cdRef.detectChanges();
  }
}
