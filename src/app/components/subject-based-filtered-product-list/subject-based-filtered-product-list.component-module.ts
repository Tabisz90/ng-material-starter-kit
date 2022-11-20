import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {FlexModule} from '@angular/flex-layout/flex';
import {SubjectBasedFilteredProductListComponent} from './subject-based-filtered-product-list.component';
import {MatRippleModule} from "@angular/material/core";

@NgModule({
  imports: [MatCardModule, MatListModule, FlexModule, MatRippleModule, CommonModule],
  declarations: [SubjectBasedFilteredProductListComponent],
  providers: [],
  exports: [SubjectBasedFilteredProductListComponent]
})
export class SubjectBasedFilteredProductListComponentModule {
}
