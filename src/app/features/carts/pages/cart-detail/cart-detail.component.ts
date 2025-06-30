import { CommonModule, CurrencyPipe, NgForOf, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CartStore } from '../../stores/cart.store';
import { CartItem } from '../../models/cart.model';

@Component({
  selector: 'app-cart-detail',
  standalone: true,
  imports: [CommonModule, NgIf, NgForOf, CurrencyPipe],
  templateUrl: './cart-detail.component.html',
  styleUrl: './cart-detail.component.scss',
})
export class CartDetailComponent {
  cartStore = inject(CartStore);


  get items() {
    return this.cartStore.items();
  }
  get totalPrice() {
    return this.cartStore.totalPrice();
  }
  get totalItems() {
    return this.cartStore.totalItems();
  }
  get isEmpty() {
    return this.cartStore.isEmpty();
  }

  increaseQuantity(item: CartItem) {
    this.cartStore.incrementQuantity(item.product.id);
  }
  decreaseQuantity(item: CartItem) {
    this.cartStore.decrementQuantity(item.product.id);
  }
  removeFromCart(item: CartItem) {
    this.cartStore.removeItem(item.product.id);
  }
}
