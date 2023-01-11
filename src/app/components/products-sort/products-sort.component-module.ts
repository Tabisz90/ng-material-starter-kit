import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { MatChipsModule } from '@angular/material/chips';
import { ProductsSortComponent } from './products-sort.component';

@NgModule({
  imports: [MatListModule, FlexModule, CommonModule, RouterModule, MatChipsModule],
  declarations: [ProductsSortComponent],
  providers: [],
  exports: [ProductsSortComponent]
})
export class ProductsSortComponentModule {
}
