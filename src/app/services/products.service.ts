import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductModel} from '../models/product.model';

@Injectable()
export class ProductsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllSorted(sort: string): Observable<ProductModel[]> {
    const params: HttpParams = new HttpParams().set('sort', sort);

    return this._httpClient.get<ProductModel[]>(`https://fakestoreapi.com/products`, {params});
  }

  getAllByCategory(category: string): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>(`https://fakestoreapi.com/products/category/${category}`);
  }
}
