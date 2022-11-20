import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, combineLatestWith, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list-with-sorting',
  templateUrl: './product-list-with-sorting.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListWithSortingComponent {
  private _orderSubject: BehaviorSubject<string> = new BehaviorSubject<string>('asc');
  readonly order$: Observable<string> = this._orderSubject.asObservable();
  public orders$: Observable<string[]> = of(['asc', 'desc']);
  readonly products$: Observable<ProductModel[]> = this._productsService.getAll().pipe(
    combineLatestWith(this.order$),
    map(([products, order]: [ProductModel[], string]) => { return products.sort((a, b) => {
      if (a.price > b.price) return order === 'asc' ? 1 : -1;
      if(a.price < b.price) return order === 'asc' ? -1 : 1;
      return 0
    }) }));

  constructor(private _productsService: ProductsService) {
  }

  sort(order: string): void {
    this._orderSubject.next(order)
  }
}
