import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { combineLatestWith, map, Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { CategoriesService } from '../../services/categories.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-filtered-product-list',
  templateUrl: './filtered-product-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilteredProductListComponent {
  readonly categories$: Observable<string[]> = this._categoriesService.getAll();
  readonly products$: Observable<ProductModel[]> = this._productsService
    .getAll()
    .pipe(
      combineLatestWith(this._activatedRoute.params),
      map(([products, params]: [ProductModel[], Params]) => {
        return products.filter(
          (product: ProductModel) => product.category === params['category']
        );
      })
    );

  constructor(
    private _categoriesService: CategoriesService,
    private _activatedRoute: ActivatedRoute,
    private _productsService: ProductsService
  ) {}
}
