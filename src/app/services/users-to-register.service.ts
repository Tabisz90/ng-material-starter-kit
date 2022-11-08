import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserToRegisterModel } from '../models/user-to-register.model';

@Injectable()
export class UsersToRegisterService {
  constructor(private _httpClient: HttpClient) {
  }

  register(user: UserToRegisterModel): Observable<void> {
    return this._httpClient.post<void>('https://fakestoreapi.com/users', user);
  }
}
