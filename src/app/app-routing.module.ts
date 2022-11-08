import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { ProductsServiceModule } from './services/products.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'create-product', component: ProductFormComponent },
    ]),
    ProductFormComponentModule,
    ProductsServiceModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
