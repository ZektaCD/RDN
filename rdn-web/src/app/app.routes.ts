import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./site/home/home.component').then( m =>
      m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./site/about/about').then( m =>
      m.About)
  }
];
