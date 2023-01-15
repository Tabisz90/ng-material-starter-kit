import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BeerModel} from '../models/beer.model';

@Injectable()
export class BeersService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllWithPagination(pageNumber: number, pageSize: number): Observable<BeerModel[]> {
    const params: HttpParams = new HttpParams().set('page', pageNumber).set('per_page', pageSize)

    return this._httpClient.get<BeerModel[]>(`https://api.punkapi.com/v2/beers`, {params});
  }
}
