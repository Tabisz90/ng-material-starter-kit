import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {TwoColumnCryptoListComponent} from './two-column-crypto-list.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [MatGridListModule, MatListModule, CommonModule, MatButtonModule],
  declarations: [TwoColumnCryptoListComponent],
  providers: [],
  exports: [TwoColumnCryptoListComponent]
})
export class TwoColumnCryptoListComponentModule {
}
