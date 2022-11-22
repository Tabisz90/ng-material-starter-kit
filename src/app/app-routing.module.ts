import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TwoColumnListComponent } from './components/two-column-list/two-column-list.component';
import { TwoColumnListComponentModule } from './components/two-column-list/two-column-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products-master-details', component: TwoColumnListComponent },
    ]),
    TwoColumnListComponentModule,
    ProductsServiceModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
