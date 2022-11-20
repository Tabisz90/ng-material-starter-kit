import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { ProductListWithSortingComponent } from './product-list-with-sorting.component';
import {MatRippleModule} from "@angular/material/core";

@NgModule({
  imports: [MatCardModule, CommonModule, MatListModule, MatRippleModule, FlexModule],
  declarations: [ProductListWithSortingComponent],
  providers: [],
  exports: [ProductListWithSortingComponent]
})
export class ProductListWithSortingComponentModule {
}
