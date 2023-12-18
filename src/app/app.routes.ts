import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'balancing',
    pathMatch: 'full',
  },
  {
    path: 'balancing',
    loadComponent: () =>
      import('./balancing/balancing.page').then((m) => m.BalancingPage),
  },
  {
    path: 'compare',
    loadComponent: () =>
      import('./compare/compare.page').then((m) => m.ComparePage),
  },
];
