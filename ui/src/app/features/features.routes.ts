import { Routes } from '@angular/router';
import { ProductCatalog } from './product-catalog/product-catalog';

export const FEATURE_ROUTES: Routes = [
  { path: '', redirectTo: 'catalog', pathMatch: 'full' },
  { path: 'catalog', component: ProductCatalog }
];
