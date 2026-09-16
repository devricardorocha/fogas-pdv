import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'start',
        pathMatch: 'full'
    },
    {
        path: 'start',
        loadComponent: () => import('./core/components/start-page/start-page').then((m) => m.StartPage),
    },
    {
        path: 'app',
        loadComponent: () => import('./core/components/app-root/app-root').then((m) => m.AppRoot),
    },
    {
        path: 'catalog',
        loadComponent: () => import('./features/product-catalog/product-catalog').then((m) => m.ProductCatalog),
    }
];
