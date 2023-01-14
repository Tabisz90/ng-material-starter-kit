import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, map, of, shareReplay, switchMap, tap, Subscription, startWith} from 'rxjs';
import {ProductModel} from '../../models/product.model';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-limit-products',
  styleUrls: ['./limit-products.component.scss'],
  templateUrl: './limit-products.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LimitProductsComponent {
  readonly limits$: Observable<string[]> = of(['5', '10', '15']).pipe(shareReplay(1));
  readonly limit$: Observable<number> = this._activatedRoute.queryParams.pipe(map((params) => (params['limit'] ? +params['limit'] : 5)));
  readonly currentLimitForm: FormControl = new FormControl();
  // set value of the control in limit
  readonly currentLimit$: Observable<string> = this.currentLimitForm.valueChanges
    .pipe(
      startWith('5'),
      tap((limit) => this._router.navigate(['/router-limit-single-products'],
        {
          queryParams: {limit}
        })),
    );
  readonly products$: Observable<ProductModel[]> = this.limit$.pipe(switchMap((limit) => this._productsService.getAllWithLimit(limit)));

  constructor(private _activatedRoute: ActivatedRoute, private _productsService: ProductsService, private _router: Router) {
  }

  onButtonClicked(value: string) {
    this.currentLimitForm.setValue(value);
  }
}
