import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BrandModel} from '../models/brand.model';

@Injectable()
export class BrandsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<BrandModel[]> {
    return this._httpClient.get<BrandModel[]>(`https://636ce2d8ab4814f2b2712854.mockapi.io/car-brands`);
  }
}
