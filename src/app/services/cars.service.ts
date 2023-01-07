import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CarModel} from '../models/car.model';

@Injectable()
export class CarsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<CarModel[]> {
    return this._httpClient.get<CarModel[]>(`https://636ce2d8ab4814f2b2712854.mockapi.io/cars`);
  }
}
