import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Смартфоны' },
    { id: 2, name: 'Ноутбуки' },
    { id: 3, name: 'Наушники' },
    { id: 4, name: 'Планшеты' },
  ];

  products: Product[] = [
    {
      id: 1,
      categoryId: 1,
      name: 'Samsung Galaxy S24 Ultra',
      description:
        'Флагман Samsung с 200 Мп камерой, стилусом S Pen, чипом Snapdragon 8 Gen 3 и батареей 5000 мАч. Дисплей 6.8″ Dynamic AMOLED 2X с частотой 120 Гц.',
      price: 649990,
      rating: 4.9,
      imageUrl: 'https://placehold.co/400x300/4f46e5/ffffff?text=Galaxy+S24+Ultra',
      kaspiUrl: 'https://kaspi.kz/shop/search/?q=Samsung+Galaxy+S24+Ultra',
      likes: 0,
    },
    {
      id: 2,
      categoryId: 1,
      name: 'Apple iPhone 16 Pro',
      description:
        'Флагманский iPhone с чипом A18 Pro, тройной камерой с 5× оптическим зумом, Dynamic Island и кнопкой Action Button. iOS 18.',
      price: 749990,
      rating: 4.8,
      imageUrl: 'https://placehold.co/400x300/4f46e5/ffffff?text=iPhone+16+Pro',
      kaspiUrl: 'https://kaspi.kz/shop/search/?q=Apple+iPhone+16+Pro',
      likes: 0,
    },
    {
      id: 3,
      categoryId: 1,
      name: 'Xiaomi 14 Pro',
      description:
        'Флагман Xiaomi с Snapdragon 8 Gen 3, камерой Leica 50 Мп, быстрой зарядкой 120 Вт и ярким AMOLED-дисплеем 6.73″.',
      price: 369990,
      rating: 4.7,
      imageUrl: 'https://placehold.co/400x300/4f46e5/ffffff?text=Xiaomi+14+Pro',
      kaspiUrl: 'https://kaspi.kz/shop/search/?q=Xiaomi+14+Pro',
      likes: 0,
    },
    {
      id: 4,
      categoryId: 1,
      name: 'Google Pixel 9 Pro',
      description:
        'Google Pixel 9 Pro с лучшей в классе камерой Android, чипом Tensor G4 и мощными AI-функциями прямо на устройстве.',
      price: 549990,
      rating: 4.6,
      imageUrl: 'https://placehold.co/400x300/4f46e5/ffffff?text=Pixel+9+Pro',
      kaspiUrl: 'https://kaspi.kz/shop/search/?q=Google+Pixel+9+Pro',
      likes: 0,
    },
    {
      id: 5,
      categoryId: 1,
      name: 'OnePlus 12',
      description:
        'Флагман OnePlus с Snapdragon 8 Gen 3, батареей 5400 мАч, зарядкой SuperVOOC 100 Вт и дисплеем LTPO AMOLED 120 Гц.',
      price: 299990,
      rating: 4.5,
      imageUrl: 'https://placehold.co/400x300/4f46e5/ffffff?text=OnePlus+12',
      kaspiUrl: 'https://kaspi.kz/shop/search/?q=OnePlus+12',
      likes: 0,
    },

    {
      id: 6,
      categoryId: 2,
      name: 'Apple MacBook Air M3',
      description:
        'Ультратонкий ноутбук Apple с чипом M3, до 18 часов автономной работы, дисплеем Liquid Retina 13.6″ и весом 1.24 кг.',
      price: 699990,
      rating: 4.9,
      imageUrl: 'https://placehold.co/400x300/047857/ffffff?text=MacBook+Air+M3',
      kaspiUrl: 'https://kaspi.kz/shop/search/?q=Apple+MacBook+Air+M3',
      likes: 0,
    },
    {
      id: 7,
      categoryId: 2,
      name: 'ASUS ZenBook 14 OLED',
      description:
        'Ультрабук с OLED-дисплеем 2.8K 120 Гц, процессором Intel Core Ultra 7, весом 1.2 кг и аккумулятором 75 Вт·ч.',
      price: 449990,
      rating: 4.7,
      imageUrl: 'https://placehold.co/400x300/047857/ffffff?text=ZenBook+14+OLED',
      kaspiUrl: 'https://kaspi.kz/shop/search/?q=ASUS+ZenBook+14+OLED',
      likes: 0,
    },
    {
      id: 8,
      categoryId: 2,
      name: 'Lenovo ThinkPad X1 Carbon',
      description:
        'Деловой ноутбук с Intel Core Ultra 7, дисплеем 2.8K IPS, защитой военного стандарта MIL-SPEC и весом от 1.12 кг.',
      price: 799990,
      rating: 4.6,
      imageUrl: 'https://placehold.co/400x300/047857/ffffff?text=ThinkPad+X1',
      kaspiUrl: 'https://kaspi.kz/shop/search/?q=Lenovo+ThinkPad+X1+Carbon',
      likes: 0,
    },
    {
      id: 9,
      categoryId: 2,
      name: 'Dell XPS 15',
      description:
        'Мощный ноутбук Dell с InfinityEdge OLED-дисплеем 3.5K, Intel Core i9, NVIDIA RTX 4070 и 32 ГБ оперативной памяти.',
      price: 749990,
      rating: 4.5,
      imageUrl: 'https://placehold.co/400x300/047857/ffffff?text=Dell+XPS+15',
      kaspiUrl: 'https://kaspi.kz/shop/search/?q=Dell+XPS+15',
      likes: 0,
    },
    {
      id: 10,
      categoryId: 2,
      name: 'HP Pavilion 15',
      description:
        'Универсальный ноутбук с Intel Core i7 13-го поколения, дискретной графикой NVIDIA GeForce RTX 3050 и дисплеем FHD IPS.',
      price: 349990,
      rating: 4.3,
      imageUrl: 'https://placehold.co/400x300/047857/ffffff?text=HP+Pavilion+15',
      kaspiUrl: 'https://kaspi.kz/shop/search/?q=HP+Pavilion+15',
      likes: 0,
    },

    {
      id: 11,
      categoryId: 3,
      name: 'Sony WH-1000XM5',
      description:
        'Лучшие беспроводные наушники с шумоподавлением, 30 ч автономной работы, поддержкой LDAC и Hi-Res Audio.',
      price: 149990,
      rating: 4.9,
      imageUrl: 'https://placehold.co/400x300/6d28d9/ffffff?text=Sony+XM5',
      kaspiUrl: 'https://kaspi.kz/shop/search/?q=Sony+WH-1000XM5',
      likes: 0,
    },
    {
      id: 12,
      categoryId: 3,
      name: 'Apple AirPods Pro 2',
      description:
        'Наушники с активным шумоподавлением на чипе H2, прозрачным режимом, персонализированным пространственным звуком и 30 ч от кейса.',
      price: 189990,
      rating: 4.8,
      imageUrl: 'https://placehold.co/400x300/6d28d9/ffffff?text=AirPods+Pro+2',
      kaspiUrl: 'https://kaspi.kz/shop/search/?q=Apple+AirPods+Pro+2',
      likes: 0,
    },
    {
      id: 13,
      categoryId: 3,
      name: 'Samsung Galaxy Buds3 Pro',
      description:
        'Флагманские TWS-наушники Samsung с активным шумоподавлением, Hi-Fi звуком 24-бит и интеграцией с Galaxy AI.',
      price: 99990,
      rating: 4.6,
      imageUrl: 'https://placehold.co/400x300/6d28d9/ffffff?text=Buds3+Pro',
      kaspiUrl: 'https://kaspi.kz/shop/search/?q=Samsung+Galaxy+Buds3+Pro',
      likes: 0,
    },
    {
      id: 14,
      categoryId: 3,
      name: 'Bose QuietComfort 45',
      description:
        'Накладные наушники Bose с эффективным шумоподавлением, сбалансированным звуком, 24 ч автономной работы и режимом Aware.',
      price: 139990,
      rating: 4.7,
      imageUrl: 'https://placehold.co/400x300/6d28d9/ffffff?text=QC45',
      kaspiUrl: 'https://kaspi.kz/shop/search/?q=Bose+QuietComfort+45',
      likes: 0,
    },
    {
      id: 15,
      categoryId: 3,
      name: 'JBL Tune 770NC',
      description:
        'Беспроводные наушники с активным шумоподавлением, до 70 ч автономной работы, складной конструкцией и поддержкой голосовых ассистентов.',
      price: 49990,
      rating: 4.4,
      imageUrl: 'https://placehold.co/400x300/6d28d9/ffffff?text=JBL+770NC',
      kaspiUrl: 'https://kaspi.kz/shop/search/?q=JBL+Tune+770NC',
      likes: 0,
    },
    {
      id: 16,
      categoryId: 4,
      name: 'Apple iPad Pro M4',
      description:
        'Профессиональный планшет Apple с чипом M4, Ultra Retina XDR OLED-дисплеем 11″, поддержкой Apple Pencil Pro и Magic Keyboard.',
      price: 549990,
      rating: 4.9,
      imageUrl: 'https://placehold.co/400x300/b45309/ffffff?text=iPad+Pro+M4',
      kaspiUrl: 'https://kaspi.kz/shop/search/?q=Apple+iPad+Pro+M4',
      likes: 0,
    },
    {
      id: 17,
      categoryId: 4,
      name: 'Samsung Galaxy Tab S10+',
      description:
        'Флагманский планшет Samsung с AMOLED-дисплеем 12.4″, Snapdragon 8 Gen 3, режимом DeX и стилусом S Pen в комплекте.',
      price: 399990,
      rating: 4.7,
      imageUrl: 'https://placehold.co/400x300/b45309/ffffff?text=Tab+S10+Plus',
      kaspiUrl: 'https://kaspi.kz/shop/search/?q=Samsung+Galaxy+Tab+S10+Plus',
      likes: 0,
    },
    {
      id: 18,
      categoryId: 4,
      name: 'Xiaomi Pad 7',
      description:
        'Планшет Xiaomi с LCD-дисплеем 144 Гц 11.2″, Snapdragon 7s Gen 3, батареей 8600 мАч и быстрой зарядкой 45 Вт.',
      price: 159990,
      rating: 4.5,
      imageUrl: 'https://placehold.co/400x300/b45309/ffffff?text=Xiaomi+Pad+7',
      kaspiUrl: 'https://kaspi.kz/shop/search/?q=Xiaomi+Pad+7',
      likes: 0,
    },
    {
      id: 19,
      categoryId: 4,
      name: 'Microsoft Surface Pro 10',
      description:
        'Планшет-ноутбук с Intel Core Ultra, дисплеем PixelSense 13″, Windows 11 Pro и поддержкой Surface Pen и клавиатуры Type Cover.',
      price: 699990,
      rating: 4.6,
      imageUrl: 'https://placehold.co/400x300/b45309/ffffff?text=Surface+Pro+10',
      kaspiUrl: 'https://kaspi.kz/shop/search/?q=Microsoft+Surface+Pro+10',
      likes: 0,
    },
    {
      id: 20,
      categoryId: 4,
      name: 'Lenovo Tab P12 Pro',
      description:
        'Флагманский планшет с AMOLED-дисплеем 12.6″ 120 Гц, Snapdragon 870, стилусом Precision Pen 3 и акустикой JBL.',
      price: 249990,
      rating: 4.4,
      imageUrl: 'https://placehold.co/400x300/b45309/ffffff?text=Tab+P12+Pro',
      kaspiUrl: 'https://kaspi.kz/shop/search/?q=Lenovo+Tab+P12+Pro',
      likes: 0,
    },
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter((p) => p.categoryId === categoryId);
  }
}
