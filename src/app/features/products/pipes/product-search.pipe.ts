import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'productSearch',
  standalone: true
})
export class ProductSearchPipe implements PipeTransform {
  transform(products: Product[] = [], search: string = ''): Product[] {
    if (!search?.trim()) return products;
    const lowerSearch = search.toLowerCase();
    return products.filter(product =>
      product.title.toLowerCase().includes(lowerSearch) ||
      product.description.toLowerCase().includes(lowerSearch) ||
      product.brand.toLowerCase().includes(lowerSearch)
    );
  }
}
