import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductListComponent} from './components/product-list/product-list.component';
import {EmployeeListComponent} from './components/employee-list/employee-list.component';
import {ProductListComponentModule} from './components/product-list/product-list.component-module';
import {ProductsServiceModule} from './services/products.service-module';
import {EmployeeListComponentModule} from './components/employee-list/employee-list.component-module';
import {EmployeesServiceModule} from './services/employees.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'refresh-products',
    component: ProductListComponent
  }, {
    path: 'refresh-employees',
    component: EmployeeListComponent
  }]), ProductListComponentModule, ProductsServiceModule, EmployeeListComponentModule, EmployeesServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
