import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BeerModel} from '../models/beer.model';

@Injectable()
export class BeersService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(page: number, perPage: number): Observable<BeerModel[]> {
    const params = new HttpParams().set('page', page).set('per_page', perPage)
    return this._httpClient.get<BeerModel[]>('https://api.punkapi.com/v2/beers', {params});
  }
}
