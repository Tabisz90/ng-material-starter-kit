import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {map} from 'rxjs/operators';
import {STORAGE_PORT, StoragePort} from '../ports/storage.port';
import {RegisterModel} from '../models/register.model';
import {LoginModel} from '../models/login.model';
import {UserModel} from '../models/user.model';

@Injectable()
export class AuthService {
  private _userSubject: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>({
    accessToken: this._storagePort.getItem('accessToken') || '',
    emailVerified: !this._storagePort.getItem('emailVerified')
  })
  public user: Observable<UserModel> = this._userSubject.asObservable();

  constructor(private _httpClient: HttpClient, @Inject(STORAGE_PORT) private _storagePort: StoragePort) {
  }

  register(email: string, password: string): Observable<void> {
    return this._httpClient.post<RegisterModel>(`https://us-central1-courses-auth.cloudfunctions.net/auth/register2`, {
      data: {
        email,
        password
      }
    })
      .pipe(
        map(() => void 0));
  }

  login(email: string, password: string): Observable<void> {
    return this._httpClient.post<LoginModel>(`https://us-central1-courses-auth.cloudfunctions.net/auth/login`, {
      data: {
        email,
        password
      }
    }).pipe(
      tap((res) => {
        this._userSubject.next({
          accessToken: res.data.accessToken,
          emailVerified: res.data.emailVerified,
        });
        this._storagePort.setItem('emailVerified', String(res.data.emailVerified));
        this._storagePort.setItem('accessToken', res.data.accessToken);
      }),
      map(() => void 0)
    );
  }
}
