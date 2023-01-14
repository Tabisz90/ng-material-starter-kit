import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {LimitProductsComponent} from './limit-products.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [ReactiveFormsModule, MatCardModule, MatButtonToggleModule, CommonModule, MatListModule, MatButtonModule, MatMenuModule, MatIconModule],
  declarations: [LimitProductsComponent],
  providers: [],
  exports: [LimitProductsComponent]
})
export class LimitProductsComponentModule {
}
