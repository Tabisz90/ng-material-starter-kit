import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { CryptoAutocompleteComponent } from './crypto-autocomplete.component';

@NgModule({
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule, MatOptionModule, CommonModule, MatButtonModule, MatChipsModule],
  declarations: [CryptoAutocompleteComponent],
  providers: [],
  exports: [CryptoAutocompleteComponent]
})
export class CryptoAutocompleteComponentModule {
}
