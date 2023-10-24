import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerViewShopComponent } from './customer-view-shop.component';

describe('CustomerViewShopComponent', () => {
  let component: CustomerViewShopComponent;
  let fixture: ComponentFixture<CustomerViewShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerViewShopComponent]
    });
    fixture = TestBed.createComponent(CustomerViewShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
