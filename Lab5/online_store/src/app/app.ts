import { Component, computed, inject, signal } from '@angular/core';
import { ProductList } from './components/product-list/product-list';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  imports: [ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private productService = inject(ProductService);

  categories: Category[] = this.productService.getCategories();
  selectedCategoryId = signal<number | null>(null);

  selectedProducts = computed<Product[]>(() => {
    const id = this.selectedCategoryId();
    if (id === null) return [];
    return this.productService.getProductsByCategory(id);
  });

  selectCategory(id: number): void {
    this.selectedCategoryId.set(id);
  }
}
