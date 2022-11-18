import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartDetailsComponent {
  readonly cartDetails$: Observable<Params> = this._activatedRoute.params.pipe(switchMap(data => this._cartsService.getOne(data['id'])));

  constructor(private _activatedRoute: ActivatedRoute, private _cartsService: CartsService) {
  }
}
