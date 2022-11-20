import {NgModule} from '@angular/core';
import {EmployeeListComponent} from './employee-list.component';
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule, MatCardModule, MatButtonModule, MatListModule
  ],
  declarations: [EmployeeListComponent],
  providers: [],
  exports: [EmployeeListComponent]
})
export class EmployeeListComponentModule {
}
