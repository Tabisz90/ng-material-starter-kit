import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {PublicHolidaySelectComponent} from './public-holiday-select.component';

@NgModule({
  imports: [MatFormFieldModule, MatSelectModule, CommonModule, MatProgressBarModule],
  declarations: [PublicHolidaySelectComponent],
  providers: [],
  exports: [PublicHolidaySelectComponent]
})
export class PublicHolidaySelectComponentModule {
}
