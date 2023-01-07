import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SecurityFeatureModel} from '../models/security-feature.model';

@Injectable()
export class SecurityFeaturesService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<SecurityFeatureModel[]> {
    return this._httpClient.get<SecurityFeatureModel[]>(`https://636ce2d8ab4814f2b2712854.mockapi.io/car-security-features`);
  }
}
