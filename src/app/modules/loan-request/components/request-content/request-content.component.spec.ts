import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestContentComponent } from './request-content.component';

describe('RequestContentComponent', () => {
  let component: RequestContentComponent;
  let fixture: ComponentFixture<RequestContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
