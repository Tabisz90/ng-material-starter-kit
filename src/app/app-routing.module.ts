import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { EmployeeFormComponentModule } from './components/employee-form/employee-form.component-module';
import { EmployeesServiceModule } from './services/employees.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'create-product', component: ProductFormComponent },
      { path: 'create-employee', component: EmployeeFormComponent }
    ]),
    ProductFormComponentModule,
    ProductsServiceModule,
    EmployeeFormComponentModule,
    EmployeesServiceModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
