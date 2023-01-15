import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {BeersSimpleComponent} from './beers-simple.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatIconModule, MatButtonModule],
  declarations: [BeersSimpleComponent],
  providers: [],
  exports: [BeersSimpleComponent]
})
export class BeersSimpleComponentModule {
}
