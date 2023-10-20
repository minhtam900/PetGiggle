import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerViewShoppingCartComponent } from './customer-view-shopping-cart.component';

describe('CustomerViewShoppingCartComponent', () => {
  let component: CustomerViewShoppingCartComponent;
  let fixture: ComponentFixture<CustomerViewShoppingCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerViewShoppingCartComponent]
    });
    fixture = TestBed.createComponent(CustomerViewShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
