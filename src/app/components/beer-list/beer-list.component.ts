import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, Observable, switchMap} from 'rxjs';
import {BeerModel} from '../../models/beer.model';
import {BeersService} from '../../services/beers.service';
import {PageEvent} from "@angular/material/paginator";

export interface PaginationModel {
  page: number,
  perPage: number,
}

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeerListComponent {
  private _paginationSubject: BehaviorSubject<PaginationModel> = new BehaviorSubject<PaginationModel>({
    page: 1,
    perPage: 5
  });
  public pagination$: Observable<PaginationModel> = this._paginationSubject.asObservable();
  readonly beers$: Observable<BeerModel[]> = this.pagination$.pipe(switchMap((pagination) => this._beersService.getAll(pagination.page, pagination.perPage)));

  readonly pageSizeOptions = [5, 10, 25];

  constructor(private _beersService: BeersService) {
  }

  onPageChange($event: PageEvent) {
    this._paginationSubject.next({page: $event.pageIndex + 1, perPage: $event.pageSize})
  }

}
