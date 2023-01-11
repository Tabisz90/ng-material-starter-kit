import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CarBrandModel} from '../models/car-brand.model';

@Injectable()
export class CarBrandsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<CarBrandModel[]> {
    return this._httpClient.get<CarBrandModel[]>(`https://636ce2d8ab4814f2b2712854.mockapi.io/car-brands`);
  }
}
