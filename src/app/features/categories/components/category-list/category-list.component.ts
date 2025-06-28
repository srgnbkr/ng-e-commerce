import { NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category-list',
  imports: [NgForOf],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
export class CategoryListComponent {
  @Input() categories: Category[]=[]

}
