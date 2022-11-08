import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {
  constructor(private _httpClient: HttpClient) {}

  login(user: UserModel): Observable<void> {
    return this._httpClient.post<void>(
      'https://fakestoreapi.com/auth/login',
      user
    );
  }
}
