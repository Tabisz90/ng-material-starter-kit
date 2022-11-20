import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule} from '@angular/material/core';
import { EmployeeListComponent } from './employee-list.component';
import {FlexModule} from "@angular/flex-layout";

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatRippleModule, FlexModule],
  declarations: [EmployeeListComponent],
  providers: [],
  exports: [EmployeeListComponent]
})
export class EmployeeListComponentModule {
}
