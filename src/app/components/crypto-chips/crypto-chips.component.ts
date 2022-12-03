import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {CryptoModel} from '../../models/crypto.model';
import {CryptoService} from '../../services/crypto.service';

@Component({
  selector: 'app-crypto-chips',
  templateUrl: './crypto-chips.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoChipsComponent {
  readonly crypto$: Observable<CryptoModel[]> = this._cryptoService.getAll().pipe();

  constructor(private _cryptoService: CryptoService) {
  }
}
