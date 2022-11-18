import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartModel } from '../models/cart.model';

@Injectable()
export class CartsService {
  constructor(private _httpClient: HttpClient) {
  }

  getOne(id: number): Observable<CartModel> {
    return this._httpClient.get<CartModel>(`https://fakestoreapi.com/carts/${id}`);
  }
}
