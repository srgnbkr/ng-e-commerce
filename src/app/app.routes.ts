import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./features/landing/landing.routes'),
  },
  {
    path: 'products',
    loadChildren: () => import('./features/products/product.routes'),
  },
  {
    path: 'cart',
    loadChildren: () => import('./features/carts/cart.routes'),
  },
];
