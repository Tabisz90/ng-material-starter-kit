import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {combineLatest, Observable, tap, map, shareReplay, take, of} from 'rxjs';
import {CityModel} from '../../models/city.model';
import {CitiesService} from '../../services/cities.service';
import {MatSelectionListChange} from '@angular/material/list';

export interface PageOptions {
  pageSize: number;
  pageNumber: number;
}

@Component({
  selector: 'app-pagination-cities',
  templateUrl: './pagination-cities.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationCitiesComponent {
  readonly pageOptions$: Observable<PageOptions> = this._activatedRoute.queryParams.pipe(map((params) => ({
    pageSize: params['pageSize'] ? +params['pageSize'] : 5,
    pageNumber: params['pageNumber'] ? +params['pageNumber'] : 1,
  })), shareReplay(1));
  readonly pageSizes$: Observable<number[]> = of([5, 10, 15]);
  readonly cities$: Observable<CityModel[]> = this._citiesService.getAll().pipe(shareReplay(1));

  readonly pageNumbers$: Observable<number[]> = combineLatest([this.cities$, this.pageOptions$])
    .pipe(
      map(([cities, pageOptions]) => cities.slice(0, Math.ceil(cities.length / pageOptions.pageSize)).map((city, index) => index + 1)), shareReplay(1));

  readonly citiesWithPagination$: Observable<CityModel[]> = combineLatest([this.pageOptions$, this.cities$])
    .pipe(
      map(([pageOptions, cities]) =>
        pageOptions.pageSize * pageOptions.pageNumber < cities.length ?
          cities.slice(pageOptions.pageNumber * pageOptions.pageSize - pageOptions.pageSize, pageOptions.pageNumber * pageOptions.pageSize)
          :
          cities.slice(cities.length - cities.length % pageOptions.pageSize, cities.length)
      ));

  constructor(private _activatedRoute: ActivatedRoute, private _citiesService: CitiesService, private _router: Router) {
  }

  selectPageNumber(event: MatSelectionListChange): void {
    const pageNumber = event.options[0].value;
    combineLatest([this.cities$, this.pageOptions$, this.pageNumbers$]).pipe(tap(([cities, pageOptions, pageNumbers]) =>
      this._router.navigate(['/route-pagination-frontend-countries'], {
          queryParams: {
            pageSize: pageOptions.pageSize,
            pageNumber
          }
        }
      ), take(1))).subscribe();
  }

  selectPageSize(event: MatSelectionListChange): void {
    const pageSize = event.options[0].value;
    combineLatest([this.cities$, this.pageOptions$, this.pageNumbers$]).pipe(tap(([cities, pageOptions, pageNumbers]) =>
      this._router.navigate(['/route-pagination-frontend-countries'], {
          queryParams: {
            pageSize: pageSize,
            pageNumber: pageOptions.pageNumber * pageOptions.pageSize > cities.length ? pageNumbers[pageNumbers.length - 1] : pageOptions.pageNumber
          }
        }
      ), take(1))).subscribe();
  }
}
