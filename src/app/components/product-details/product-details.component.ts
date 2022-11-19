import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent {
  readonly productDetails$: Observable<ProductModel> =
    this._activatedRoute.params.pipe(
      switchMap((data) => this._productsService.getOne(data['id']))
    );

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productsService: ProductsService
  ) {}
}
