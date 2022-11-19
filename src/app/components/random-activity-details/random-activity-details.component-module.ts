import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { RandomActivityDetailsComponent } from './random-activity-details.component';

@NgModule({
  imports: [MatButtonToggleModule, MatCardModule, CommonModule],
  declarations: [RandomActivityDetailsComponent],
  providers: [],
  exports: [RandomActivityDetailsComponent]
})
export class RandomActivityDetailsComponentModule {
}
