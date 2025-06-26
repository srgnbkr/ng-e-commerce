import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { PaginatorModule } from 'primeng/paginator';
import { CartStore } from '../../../carts/stores/cart.store';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [PaginatorModule, ProductCardComponent,NgIf],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  public productService = inject(ProductService);
  cartStore = inject(CartStore);

  products = this.productService.products;
  totalRecords = this.productService.productsTotal;
  isLoading = this.productService.productsResource.isLoading;
  error = this.productService.productsResource.error;
  first = this.productService.skip();
  rows = this.productService.limit();
  skeletons = Array(8).fill(0);

  onPageChange(event: any): void {
    this.first = event.first;
    this.rows = event.rows;
    this.productService.setPage(this.first, this.rows);
  }

  addToCart(product: Product): void {
    this.cartStore.addItem(product);
  }
}
