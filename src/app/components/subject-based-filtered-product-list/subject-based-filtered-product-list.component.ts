import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, combineLatestWith, map, Observable} from 'rxjs';
import {ProductModel} from '../../models/product.model';
import {CategoriesService} from '../../services/categories.service';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-subject-based-filtered-product-list',
  templateUrl: './subject-based-filtered-product-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectBasedFilteredProductListComponent {
  readonly categories$: Observable<string[]> = this._categoriesService.getAll();
  private _categorySubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public category$:Observable<string> = this._categorySubject.asObservable();
  readonly products$: Observable<ProductModel[]> = this._productsService.getAll().pipe(
    combineLatestWith(this.category$),
    map(([products, category]: [ProductModel[], string]) => {
    return products.filter((product) => product.category === category)
  }))


  constructor(private _categoriesService: CategoriesService, private _productsService: ProductsService) {
  }

  onButtonClicked(category: string): void {
    this._categorySubject.next(category);
  }
}
