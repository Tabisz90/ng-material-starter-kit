import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-product-form',
  styleUrls: ['./product-form.component.scss'],
  templateUrl: './product-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductFormComponent {
  readonly productForm: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    image: new FormControl(),
    category: new FormControl(),
  });
  readonly categories$: Observable<string[]> = this._categoriesService.getAll();

  constructor(
    private _productsService: ProductsService,
    private _categoriesService: CategoriesService
  ) {}

  onProductFormSubmitted(productForm: FormGroup): void {
    this._productsService
      .create({
        title: productForm.get('title')?.value,
        price: productForm.get('price')?.value,
        description: productForm.get('description')?.value,
        image: productForm.get('image')?.value,
        category: productForm.get('category')?.value,
      })
      .subscribe();
  }
}
