import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, Subject, switchMap } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-two-column-list',
  templateUrl: './two-column-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TwoColumnListComponent {
  private _selectedProductIdSubject: Subject<number> = new Subject<number>();
  public selectedProductId$: Observable<number> =
    this._selectedProductIdSubject.asObservable();
  readonly products$: Observable<ProductModel[]> =
    this._productsService.getAll();
  readonly selectedProduct$: Observable<ProductModel> =
    this.selectedProductId$.pipe(
      switchMap((selectedId) => this._productsService.getOne(selectedId))
    );

  constructor(private _productsService: ProductsService) {}

  select(id: number): void {
    this._selectedProductIdSubject.next(id);
  }
}
