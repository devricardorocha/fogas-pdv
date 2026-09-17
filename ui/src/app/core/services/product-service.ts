import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../models';
@Service()
export class ProductService {

  private httpClient = inject(HttpClient);

  public findAll(params?: any): Observable<Product[]> {
    return this.httpClient.get<Product[]>('/api/products', { params });
  }

}
