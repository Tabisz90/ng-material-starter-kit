import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CatFactComponent } from './cat-fact.component';

@NgModule({
  imports: [MatCardModule, CommonModule],
  declarations: [CatFactComponent],
  providers: [],
  exports: [CatFactComponent],
})
export class CatFactComponentModule {}
