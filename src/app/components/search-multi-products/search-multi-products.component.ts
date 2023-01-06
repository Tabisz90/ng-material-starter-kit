import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, combineLatestWith, debounceTime, map} from 'rxjs';
import {ProductModel} from '../../models/product.model';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-search-multi-products',
  styleUrls: ['./search-multi-products.component.scss'],
  templateUrl: './search-multi-products.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchMultiProductsComponent {
  readonly searchForm: FormGroup = new FormGroup<{ phrase: FormControl<string | null> }>({phrase: new FormControl<string>('')});
  readonly products$: Observable<ProductModel[]> = this.searchForm.valueChanges.pipe(
    debounceTime(1000),
    combineLatestWith(this._productsService.getAll()),
    map(([phrase, products]) =>
      phrase.phrase !== '' ?
        products.filter((product: ProductModel) =>
          (product.title.toLowerCase().trim().includes(phrase.phrase.toLowerCase().trim())) || product.price ? product.price.toString().includes(phrase.phrase) : false)
        : []
    )
  );

  constructor(private _productsService: ProductsService) {
  }
}
