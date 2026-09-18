import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ProductService } from '../../core/services/product-service';

import { Product } from '../../core';
import { MatIconModule } from '@angular/material/icon';
import { ProductCardActions } from '../../core/components/product-card-actions/product-card-actions';

@Component({
  imports: [
    CurrencyPipe,
    MatCardModule,
    MatChipsModule,
    ProductCardActions
],
  selector: 'app-product-catalog',
  styleUrl: './product-catalog.scss',
  templateUrl: './product-catalog.html',
})
export class ProductCatalog implements OnInit {

  private productService = inject(ProductService);

  products: Product[] = [];
  
  ngOnInit(): void {
    this.fetchProducts();
  }

  private fetchProducts(): void {
    this.productService.findAll()
      .subscribe({
        next: (res: Product[]) => this.loadProducts(res),
        error: (err: Error) => this.onFetchProductsError(err)
      });
  }

  private onFetchProductsError(err: Error): void {
    this.loadProducts([]);
    console.error(err);
  }

  private loadProducts(products: Product[]): void {
    this.products = products;
  }

}
