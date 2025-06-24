import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { LayoutService } from '../services/layout.service';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'app-topbar',
  template: `
    <p-menubar [model]="items">
      <ng-template #end>
        <div class="flex items-center gap-2">
          <button  (click)="toggleTheme()">
            <i [ngClass]="{ 'pi ': true, 'pi-moon': layoutService.isDarkTheme(), 'pi-sun': !layoutService.isDarkTheme() }"></i>
          </button>
        </div>
      </ng-template>
    </p-menubar>
  `,
  standalone: true,
  imports: [Menubar,CommonModule, StyleClassModule],
})
export class TopbarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
      },
      {
        label: 'Features',
        icon: 'pi pi-star',
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

  constructor(public layoutService: LayoutService) {}

  toggleTheme() {
    this.layoutService.setDarkTheme(!this.layoutService.isDarkTheme());
  }
}
