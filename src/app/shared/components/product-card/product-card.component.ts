import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../features/products/models/product.model';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddToCartDirective } from '../../directives/add-to-cart.directive';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink,AddToCartDirective],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product!: Product;


}
