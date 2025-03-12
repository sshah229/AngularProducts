import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  standalone: true,
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  imports: [CommonModule]
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() selectProduct: EventEmitter<number> = new EventEmitter<number>();

  onSelect(): void {
    this.selectProduct.emit(this.product.id);
  }
}