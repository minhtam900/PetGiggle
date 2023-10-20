import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerViewProductDetailComponent } from './customer-view-product-detail.component';

describe('CustomerViewProductDetailComponent', () => {
  let component: CustomerViewProductDetailComponent;
  let fixture: ComponentFixture<CustomerViewProductDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerViewProductDetailComponent]
    });
    fixture = TestBed.createComponent(CustomerViewProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
