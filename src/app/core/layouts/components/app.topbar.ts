import { Component, computed, inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { CartStore } from '../../../features/carts/stores/cart.store';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-topbar',
  template: `
    <p-menubar [model]="items">
      <ng-template #end>
        <div class="flex items-center gap-2">
          <p-button
            [label]="
              cartItemsCount() === 0
                ? 'Sepetim'
                : 'Sepetim(' + cartItemsCount() + ')'
            "
            [raised]="true"
            severity="secondary"
            icon="pi pi-shopping-cart"
            routerLink="/cart"
          />
        </div>
      </ng-template>
    </p-menubar>
  `,
  standalone: true,
  imports: [Menubar, CommonModule, StyleClassModule, ButtonModule,RouterLink],
})
export class TopbarComponent implements OnInit {
  items: MenuItem[] | undefined;
  cartStore = inject(CartStore);

  cartItemsCount = computed(() => this.cartStore.totalItems());

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',
      },
      {
        label: 'Ürünler',
        icon: 'pi pi-box',
        routerLink: '/products',
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Components',
            icon: 'pi pi-bolt',
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server',
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil',
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette',
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette',
              },
            ],
          },
        ],
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
      },
    ];
  }
}
