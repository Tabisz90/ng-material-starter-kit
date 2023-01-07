import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {Observable, combineLatestWith, debounceTime, map, startWith} from 'rxjs';
import {CryptoModel} from '../../models/crypto.model';
import {CryptoService} from '../../services/crypto.service';

@Component({
  selector: 'app-crypto-autocomplete',
  styleUrls: ['./crypto-autocomplete.component.scss'],
  templateUrl: './crypto-autocomplete.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoAutocompleteComponent {
  readonly cryptoForm: FormGroup = new FormGroup({symbol: new FormControl(''), selectedSymbols: new FormArray([])});
  readonly crypto$: Observable<CryptoModel[]> = this._cryptoService.getAll();
  readonly filteredCrypto$: Observable<CryptoModel[]> = this.cryptoForm.valueChanges.pipe(
    startWith({symbol: ''}),
    debounceTime(1000),
    combineLatestWith(this.crypto$),
    map(([symbol, crypto]: [{ symbol: string }, CryptoModel[]]) => crypto.filter((oneCrypto: CryptoModel) =>
      symbol.symbol.trim().length > 0 ? oneCrypto.symbol.toLowerCase().includes(symbol.symbol.toLowerCase().trim()) : true)
    ));

  constructor(private _cryptoService: CryptoService) {
  }

  get selectedSymbols(): FormArray {
    return this.cryptoForm.controls['selectedSymbols'] as FormArray;
  }

  addCrypto(symbol: string): void {
    this.selectedSymbols.push(
      new FormControl(symbol)
    );
  }
}
