import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {map, Observable, shareReplay, switchMap} from 'rxjs';
import {Pagination} from './pagination';
import {BeerModel} from '../../models/beer.model';
import {BeersService} from '../../services/beers.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-beers-pagination-backend',
  templateUrl: './beers-pagination-backend.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeersPaginationBackendComponent {
  readonly pagination$: Observable<Pagination> = this._activatedRoute.queryParams.pipe(map((params) => {
      return {
        pageSize: params['pageSize'] ? +params['pageSize'] : 5,
        pageNumber: params['pageNumber'] ? Math.max(1, +params['pageNumber']) : 1,
        pageSizeOptions: [5, 10, 15],
        length: 100
      }
    }), shareReplay(1)
  );

  readonly beers$: Observable<BeerModel[]> = this.pagination$
    .pipe(
      switchMap((pagination) => this._beersService.getAllWithPagination(pagination.pageNumber, pagination.pageSize)));

  constructor(private _activatedRoute: ActivatedRoute, private _beersService: BeersService, private _router: Router) {
  }

  onPageChanged(event: PageEvent): void {
    this._router.navigate([], {
      queryParams: {
        pageSize: event.pageSize,
        pageNumber: event.pageIndex + 1,
      }
    })
  }
}
