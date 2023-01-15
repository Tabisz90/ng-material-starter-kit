import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, of, shareReplay, switchMap, tap, map, take} from 'rxjs';
import {DefaultPaginationOptions} from './defaultPaginationOptions';
import {Pagination} from '../beers-pagination-backend/pagination';
import {BeerModel} from '../../models/beer.model';
import {BeersService} from '../../services/beers.service';
import {MatButtonToggleChange} from '@angular/material/button-toggle';

@Component({
  selector: 'app-beers-custom',
  templateUrl: './beers-custom.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeersCustomComponent {
  readonly options$: Observable<DefaultPaginationOptions> = of({pageNumbers: [1, 2, 3, 4, 5], pageSizes: [5, 10, 15]});
  readonly paginationForm: FormGroup = new FormGroup({pageSize: new FormControl(), pageNumber: new FormControl()});
  readonly pagination$: Observable<Pick<Pagination, 'pageSize' | 'pageNumber'>> = this._activatedRoute.queryParams.pipe(map((params) => {
      return {
        pageNumber: params['pageNumber'] ? +params['pageNumber'] : 1,
        pageSize: params['pageSize'] ? +params['pageSize'] : 5,
      }
    }), shareReplay(1),
    tap((pagination) => this.paginationForm.patchValue(
      {
        pageNumber: pagination.pageNumber,
        pageSize: pagination.pageSize
      }
    )),);
  readonly beers$: Observable<BeerModel[]> = this.pagination$
    .pipe(
      switchMap((pagination) => this._beersService.getAllWithPagination(pagination.pageNumber, pagination.pageSize)));


  constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private _beersService: BeersService) {
  }

  onPageSizeChanged(event: MatButtonToggleChange): void {
    this.pagination$.pipe(tap((pagination) => this._router.navigate([], {
      queryParams: {pageNumber: pagination.pageNumber, pageSize: event.value}
    })), take(1)).subscribe();
  }

  onPageNumberChanged(event: any): void {
    this.pagination$.pipe(tap((pagination) => this._router.navigate([], {
      queryParams: {pageNumber: event.value, pageSize: pagination.pageSize}
    })), take(1)).subscribe();
  }
}
