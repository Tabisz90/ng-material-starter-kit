import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, of, switchMap} from 'rxjs';
import {map} from 'rxjs/operators';
import {ProductModel} from '../../models/product.model';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-products-sort',
  styleUrls: ['./products-sort.component.scss'],
  templateUrl: './products-sort.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsSortComponent {
  readonly params$: Observable<string> = this._activatedRoute.queryParams.pipe(map((params) => params['sort'] ?? ''));
  readonly products$: Observable<ProductModel[]> = this.params$.pipe(switchMap((sort) => this._productsService.getAllSorted(sort)));
  readonly orders$: Observable<string[]> = of(['asc', 'desc']);

  constructor(private _activatedRoute: ActivatedRoute, private _productsService: ProductsService) {
  }
}
