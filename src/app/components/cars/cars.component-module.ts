import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {CarsComponent} from './cars.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [MatCheckboxModule, CommonModule, MatCardModule, MatTableModule, RouterModule],
  declarations: [CarsComponent],
  providers: [],
  exports: [CarsComponent]
})
export class CarsComponentModule {
}
