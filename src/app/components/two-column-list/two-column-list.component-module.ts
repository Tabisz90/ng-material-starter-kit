import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { TwoColumnListComponent } from './two-column-list.component';

@NgModule({
  imports: [MatGridListModule, MatListModule, CommonModule, MatButtonModule],
  declarations: [TwoColumnListComponent],
  providers: [],
  exports: [TwoColumnListComponent],
})
export class TwoColumnListComponentModule {}
