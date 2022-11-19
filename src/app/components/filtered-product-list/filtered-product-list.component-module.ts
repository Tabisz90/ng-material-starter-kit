import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { FilteredProductListComponent } from './filtered-product-list.component';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  imports: [
    MatCardModule,
    MatListModule,
    FlexModule,
    CommonModule,
    RouterModule,
    MatRippleModule,
  ],
  declarations: [FilteredProductListComponent],
  providers: [],
  exports: [FilteredProductListComponent],
})
export class FilteredProductListComponentModule {}
