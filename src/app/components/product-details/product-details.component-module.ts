import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ProductDetailsComponent } from './product-details.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [ProductDetailsComponent],
  providers: [],
  exports: [ProductDetailsComponent],
})
export class ProductDetailsComponentModule {}
