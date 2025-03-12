import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product A',
      price: 25,
      description: 'High-quality product A for your needs.',
      imageUrl: 'https://picsum.photos/id/1018/300/200'
    },
    {
      id: 2,
      name: 'Product B',
      price: 35,
      description: 'Reliable product B with excellent performance.',
      imageUrl: 'https://picsum.photos/id/1025/300/200'
    },
    {
      id: 3,
      name: 'Product C',
      price: 45,
      description: 'Innovative product C designed for efficiency.',
      imageUrl: 'https://picsum.photos/id/103/300/200'
    },
    {
      id: 4,
      name: 'Product D',
      price: 55,
      description: 'Product D offers great value and durability.',
      imageUrl: 'https://picsum.photos/id/1040/300/200'
    },
    {
      id: 5,
      name: 'Product E',
      price: 65,
      description: 'Experience premium quality with product E.',
      imageUrl: 'https://picsum.photos/id/1052/300/200'
    }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = this.products.find(p => p.id === id);
    return of(product);
  }
}