import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe, NgForOf, NgIf } from '@angular/common';
import { AddToCartDirective } from '../../../../shared/directives/add-to-cart.directive';

@Component({
  selector: 'app-product-detail',
  imports: [NgForOf, NgIf, DatePipe, AddToCartDirective],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  productService = inject(ProductService);
  route = inject(ActivatedRoute);

  product = this.productService.product;
  selectedImage!: string;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.id.set(id);
  }

  selectImage(img: string) {
    this.selectedImage = img;
  }
}
