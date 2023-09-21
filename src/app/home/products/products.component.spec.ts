import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';
import { HttpClientModule } from '@angular/common/http';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports: [HttpClientModule]
    });
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should be empty array', () => {
    component.ngOnInit();
    expect(component.products).toBeFalsy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
