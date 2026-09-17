import { Routes } from '@angular/router';
import { FEATURE_ROUTES } from './features/features.routes';

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
        children: FEATURE_ROUTES
    },
    
];
