import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, shareReplay, switchMap, tap, map, take} from 'rxjs';
import {Pagination} from '../beers-pagination-backend/pagination';
import {BeerModel} from '../../models/beer.model';
import {BeersService} from '../../services/beers.service';

@Component({
  selector: 'app-beers-simple',
  templateUrl: './beers-simple.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeersSimpleComponent {
  readonly pagination$: Observable<Pick<Pagination, 'pageNumber' | 'pageSize'>> = this._activatedRoute.queryParams
    .pipe(
      map((params) => {
        return {
          pageSize: 10,
          pageNumber: params['pageNumber'] ? +params['pageNumber'] : 1
        }
      }),
      shareReplay(1)
    );

  readonly beers$: Observable<BeerModel[]> = this.pagination$
    .pipe(
      switchMap((pagination) => this._beersService.getAllWithPagination(pagination.pageNumber, pagination.pageSize)), shareReplay(1));

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private _beersService: BeersService) {
  }

  onNextClicked(): void {
    this.pagination$.pipe(tap((pagination) => this._router.navigate([],
        {
          queryParams: {
            pageNumber: pagination.pageNumber + 1,
          }
        })
      ),
      take(1)
    ).subscribe()
  }

  onPreviousClicked(): void {
    this.pagination$.pipe(tap((pagination) => this._router.navigate([],
        {
          queryParams: {
            pageNumber: pagination.pageNumber - 1,
          }
        })
      ),
      take(1)
    ).subscribe()
  }
}
