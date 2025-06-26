import { httpResource } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { Product, ProductListResponse } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsApiUrl = 'https://dummyjson.com/products';

  // Signals for pagination
  skip = signal(0);
  limit = signal(12);
  //TODO : How to one products by productId?
  id = signal(1);

  // Computed URL based on skip and limit
  public productsResource = httpResource<ProductListResponse>(
    () => `${this.productsApiUrl}?limit=${this.limit()}&skip=${this.skip()}`,
    {
      defaultValue: {
        products: [],
        total: 0,
        skip: 0,
        limit: 0,
      },
    }
  );

  products = computed(() => this.productsResource.value().products);
  productsTotal = computed(() => this.productsResource.value().total);

  // Methods to update pagination
  setPage(skip: number, limit: number) {
    this.skip.set(skip);
    this.limit.set(limit);
  }

  productResource = httpResource<Product>(
    () => this.productsApiUrl + '/' + this.id()
  );

  product = computed(() => this.productResource.value());
}
