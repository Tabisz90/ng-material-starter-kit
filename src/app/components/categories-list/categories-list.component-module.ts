import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {CategoriesListComponent} from './categories-list.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatListModule} from "@angular/material/list";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [MatCardModule, MatProgressSpinnerModule, MatListModule, CommonModule],
  declarations: [CategoriesListComponent],
  providers: [],
  exports: [CategoriesListComponent]
})
export class CategoriesListComponentModule {
}
