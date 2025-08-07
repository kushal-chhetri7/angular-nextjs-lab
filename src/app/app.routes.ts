import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'items',
    loadComponent: () => import('./items/items-list/items-list.component').then(m => m.ItemsListComponent)
  },
  {
    path: 'add-item',
    loadComponent: () => import('./items/add-item/add-item.component').then(m => m.AddItemComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
