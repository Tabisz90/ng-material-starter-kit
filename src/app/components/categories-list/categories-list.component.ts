import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {CategoriesService} from '../../services/categories.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesListComponent {
  readonly categories$: Observable<string[]> = this._categoriesService.getAll().pipe();

  constructor(private _categoriesService: CategoriesService) {
  }
}
