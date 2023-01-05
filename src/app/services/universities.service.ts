import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UniversityModel} from '../models/university.model';

@Injectable()
export class UniversitiesService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(country: string): Observable<UniversityModel[]> {
    const params: HttpParams = new HttpParams().set('country', country)
    return this._httpClient.get<UniversityModel[]>(`http://universities.hipolabs.com/search`, {params});
  }
}
