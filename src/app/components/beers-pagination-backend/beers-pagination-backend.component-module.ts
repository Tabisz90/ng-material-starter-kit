import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { BeersPaginationBackendComponent } from './beers-pagination-backend.component';

@NgModule({
  imports: [MatCardModule, MatPaginatorModule, MatChipsModule, CommonModule],
  declarations: [BeersPaginationBackendComponent],
  providers: [],
  exports: [BeersPaginationBackendComponent]
})
export class BeersPaginationBackendComponentModule {
}
