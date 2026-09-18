import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardActions } from './product-card-actions';

describe('ProductCardActions', () => {
  let component: ProductCardActions;
  let fixture: ComponentFixture<ProductCardActions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardActions],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCardActions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
