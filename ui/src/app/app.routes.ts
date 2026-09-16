import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'start',
        pathMatch: 'full'
    },
    {
        path: 'start',
        loadComponent: () => import('./features/start-screen/start-screen').then((m) => m.StartScreen),
    },
    {
        path: 'catalog',
        loadComponent: () => import('./features/product-catalog/product-catalog').then((m) => m.ProductCatalog),
    }
];
