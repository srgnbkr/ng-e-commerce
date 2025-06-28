import { httpResource } from '@angular/common/http';
import { computed, Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  public categoriesResource = httpResource<Category[]>(
    () => 'https://dummyjson.com/products/categories',
    {
      defaultValue: [],
    }
  );

  categories = computed(() => this.categoriesResource.value());
}
