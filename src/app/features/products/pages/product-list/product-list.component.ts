import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { PaginatorModule } from 'primeng/paginator';
import { CartStore } from '../../../carts/stores/cart.store';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card.component';
import { NgIf } from '@angular/common';
import { CategoryService } from '../../../categories/services/category.service';
import { ProductSearchPipe } from '../../pipes/product-search.pipe';
import { FormsModule } from '@angular/forms';
import { CategoryListComponent } from '../../../categories/components/category-list/category-list.component';



@Component({
  selector: 'app-product-list',
  imports: [
    FormsModule,
    PaginatorModule,
    ProductCardComponent,
    CategoryListComponent,
    NgIf,
    ProductSearchPipe,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  public productService = inject(ProductService);
  categoryService = inject(CategoryService);
  cartStore = inject(CartStore);



  products = this.productService.products;
  totalRecords = this.productService.productsTotal;
  isLoading = this.productService.productsResource.isLoading;
  error = this.productService.productsResource.error;
  first = this.productService.skip();
  rows = this.productService.limit();
  skeletons = Array(8).fill(0);

  //Search term for filtering products
  searchTerm = '';

  //List of categories
  categories = this.categoryService.categories;

  onPageChange(event: any): void {
    this.first = event.first;
    this.rows = event.rows;
    this.productService.setPage(this.first, this.rows);
  }

  addToCart(product: Product): void {
    this.cartStore.addItem(product);
  }
}
