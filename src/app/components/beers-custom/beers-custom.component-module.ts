import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatListModule} from '@angular/material/list';
import {BeersCustomComponent} from './beers-custom.component';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, MatButtonToggleModule, MatListModule, MatRadioModule],
  declarations: [BeersCustomComponent],
  providers: [],
  exports: [BeersCustomComponent]
})
export class BeersCustomComponentModule {
}
