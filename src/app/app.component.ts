import { Component, inject } from '@angular/core';

import { RouterModule } from '@angular/router';
import { TopbarComponent } from './core/layouts/components/app.topbar';
import { ProductService } from './features/products/services/product.service';
import { PaginatorModule } from 'primeng/paginator';
import { FooterComponent } from './core/layouts/components/app.footer';
import { CartDetailComponent } from './features/carts/pages/cart-detail/cart-detail.component';

@Component({
  selector: 'app-root',
  imports: [TopbarComponent, RouterModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-e-commerce';
}
