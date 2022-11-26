import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {CryptoModel} from '../../models/crypto.model';
import {CryptoService} from '../../services/crypto.service';

@Component({
  selector: 'app-two-column-crypto-list',
  templateUrl: './two-column-crypto-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TwoColumnCryptoListComponent {
  private _selectedCryptoSubject: Subject<CryptoModel> = new Subject<CryptoModel>();
  public selectedCrypto$: Observable<CryptoModel> = this._selectedCryptoSubject.asObservable();
  readonly cryptoList$: Observable<CryptoModel[]> = this._cryptoService.getAll();

  constructor(private _cryptoService: CryptoService) {
  }

  select(crypto: CryptoModel): void {
    this._selectedCryptoSubject.next(crypto);
  }
}
