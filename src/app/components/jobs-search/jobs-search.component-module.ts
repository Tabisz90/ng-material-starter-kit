import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { JobsSearchComponent } from './jobs-search.component';

@NgModule({
  imports: [MatInputModule, ReactiveFormsModule, MatFormFieldModule, CommonModule, MatButtonModule, RouterModule, MatTableModule],
  declarations: [JobsSearchComponent],
  providers: [],
  exports: [JobsSearchComponent]
})
export class JobsSearchComponentModule {
}
