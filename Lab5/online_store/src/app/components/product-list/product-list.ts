import { Component, input, linkedSignal } from '@angular/core';
import { ProductItem } from '../product-item/product-item';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  imports: [ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products = input.required<Product[]>();

  displayedProducts = linkedSignal(() => [...this.products()]);

  deleteProduct(id: number): void {
    this.displayedProducts.update((prods) => prods.filter((p) => p.id !== id));
  }
}
