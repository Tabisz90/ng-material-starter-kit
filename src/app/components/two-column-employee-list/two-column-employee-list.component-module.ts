import {NgModule} from '@angular/core';
import {TwoColumnEmployeeListComponent} from './two-column-employee-list.component';
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  imports: [
    MatButtonModule,
    CommonModule,
    MatListModule,
    MatGridListModule,
  ],
  declarations: [TwoColumnEmployeeListComponent],
  providers: [],
  exports: [TwoColumnEmployeeListComponent]
})
export class TwoColumnEmployeeListComponentModule {
}
