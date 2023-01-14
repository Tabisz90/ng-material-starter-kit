import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { FlexModule } from '@angular/flex-layout/flex';
import { PaginationCitiesComponent } from './pagination-cities.component';

@NgModule({
  imports: [MatListModule, CommonModule, FlexModule],
  declarations: [PaginationCitiesComponent],
  providers: [],
  exports: [PaginationCitiesComponent]
})
export class PaginationCitiesComponentModule {
}
