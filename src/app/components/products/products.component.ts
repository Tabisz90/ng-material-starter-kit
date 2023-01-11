import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, switchMap} from 'rxjs';
import {ProductModel} from '../../models/product.model';
import {CategoriesService} from '../../services/categories.service';
import {ProductsService} from '../../services/products.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
  readonly params$: Observable<string> = this._activatedRoute.params.pipe(map((params) => params['category']));
  readonly categories$: Observable<string[]> = this._categoriesService.getAll();
  readonly products$: Observable<ProductModel[]> = this.params$.pipe(switchMap((category) => this._productsService.getAllByCategory(category)));

  constructor(private _categoriesService: CategoriesService, private _productsService: ProductsService, private _activatedRoute: ActivatedRoute) {
  }
}
