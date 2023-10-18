import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerViewHomeComponent } from './customer-view-home.component';

describe('CustomerViewHomeComponent', () => {
  let component: CustomerViewHomeComponent;
  let fixture: ComponentFixture<CustomerViewHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerViewHomeComponent]
    });
    fixture = TestBed.createComponent(CustomerViewHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
