import { Component, model, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '../../models';

@Component({
  imports: [
    MatIconModule,
    MatButtonModule,
  ],
  selector: 'app-product-card-actions',
  styleUrl: './product-card-actions.scss',
  templateUrl: './product-card-actions.html',
})
export class ProductCardActions {
  
  product = model.required<Product>();
  min = model<number>(0);
  max = model<number>(1_000);
  quantity = signal(0);

  protected canAddOne() {
    return this.quantity() < this.max();
  }

  protected canRemoveOne() {
    return this.quantity() > this.min();
  }

  protected addOne() {
    this.quantity.update((q) => {
      if (this.canAddOne()) {
        return q + 1;
      }

      throw Error('cannot add one');
    });
  }

  protected removeOne() {
    this.quantity.update((q) => {
      if (this.canRemoveOne()) {
        return q - 1;
      }

      throw Error('cannot remove one');
    });
  }

}
