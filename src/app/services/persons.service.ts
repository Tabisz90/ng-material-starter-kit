import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonModel } from '../models/person.model';

@Injectable()
export class PersonsService {
  constructor(private _httpClient: HttpClient) {}

  getOne(name: string): Observable<PersonModel> {
    const params = new HttpParams().set('name', name);
    return this._httpClient.get<PersonModel>(`https://api.agify.io`, {
      params,
    });
  }
}
