import { Component, inject } from '@angular/core';

import { RouterModule } from '@angular/router';
import { TopbarComponent } from './core/layouts/components/app.topbar';
import { ProductService } from './features/products/services/product.service';
import { PaginatorModule } from 'primeng/paginator';
import { FooterComponent } from './core/layouts/components/app.footer';


@Component({
  selector: 'app-root',
  imports: [TopbarComponent, RouterModule, PaginatorModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public productSercice = inject(ProductService);
  products = this.productSercice.products;
  totalRecords = this.productSercice.productsTotal;
  first = this.productSercice.skip();
  rows = this.productSercice.limit();

  title = 'ng-e-commerce';

  onPageChange(event: any): void {
    this.first = event.first;
    this.rows = event.rows;
    this.productSercice.setPage(this.first, this.rows);
  }
}
