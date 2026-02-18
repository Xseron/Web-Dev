import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 16 128GB',
      description:
        'Флагманский смартфон Apple с процессором A18 Bionic и улучшенной камерой 48 МП. Поддержка Apple Intelligence, Dynamic Island и зарядка MagSafe. Доступен в 6 цветах с аккумулятором на весь день.',
      price: 489990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h15/h40/86316415189022.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h15/h40/86316415189022.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h15/h40/86316415189022.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h15/h40/86316415189022.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-120560703/?c=750000000',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 256GB',
      description:
        'Мощный Android-флагман с процессором Snapdragon 8 Gen 3 и AI-функциями Galaxy AI. Экран Dynamic AMOLED 2X 6.2" с частотой 120 Гц и тройная камера 50 МП. Стеклянный корпус Corning Gorilla Glass Armor.',
      price: 379990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0e/hae/85460634173470.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h0e/hae/85460634173470.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0e/hae/85460634173470.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0e/hae/85460634173470.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-256gb-chernyi-titanium-117524369/?c=750000000',
    },
    {
      id: 3,
      name: 'Xiaomi Redmi Note 13 Pro 256GB',
      description:
        'Смартфон среднего класса с камерой 200 МП и AMOLED-дисплеем 6.67" 120 Гц. Оснащён процессором Snapdragon 7s Gen 2 и аккумулятором 5100 мАч с быстрой зарядкой 67 Вт. Отличное соотношение цены и качества.',
      price: 169990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha4/h84/85912983797790.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha4/h84/85912983797790.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha4/h84/85912983797790.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha4/h84/85912983797790.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-256gb-chernyi-118999039/?c=750000000',
    }
  ];
}
