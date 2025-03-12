import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: Product;
  @Output() selectProduct: EventEmitter<number> = new EventEmitter<number>();

  onSelect() {
    this.selectProduct.emit(this.product.id);
  }
}