import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Product A', price: 25, description: 'Description for product A' },
    { id: 2, name: 'Product B', price: 35, description: 'Description for product B' },
    // I have used hardcoded data but we can extend to fetch from an API or a mock JSON file as well
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = this.products.find(p => p.id === id);
    return of(product);
  }
}