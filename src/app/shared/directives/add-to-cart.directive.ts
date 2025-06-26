import { Directive, HostListener, inject, Input } from '@angular/core';
import { CartStore } from '../../features/carts/stores/cart.store';
import { Product } from '../../features/products/models/product.model';

@Directive({
  selector: '[appAddToCart]',
})
export class AddToCartDirective {
  @Input() product!: Product;
  cartStore = inject(CartStore);

  @HostListener('click')
  onClick(): void {
    this.cartStore.addItem(this.product);
  }
}
