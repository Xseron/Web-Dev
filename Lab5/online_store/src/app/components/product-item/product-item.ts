import { Component, input, output, signal, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem implements OnInit {
  product = input.required<Product>();
  deleted = output<number>();

  localLikes = signal(0);
  liked = signal(false);

  ngOnInit(): void {
    this.localLikes.set(this.product().likes);
  }

  get stars(): boolean[] {
    return Array.from({ length: 5 }, (_, i) => i < Math.round(this.product().rating));
  }

  like(): void {
    this.localLikes.update((n) => n + 1);
    this.liked.set(true);
  }

  onDelete(): void {
    this.deleted.emit(this.product().id);
  }

  shareWhatsApp(): void {
    const text = encodeURIComponent('Посмотри этот товар: ' + this.product().kaspiUrl);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  shareTelegram(): void {
    const url = encodeURIComponent(this.product().kaspiUrl);
    const text = encodeURIComponent(this.product().name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}
