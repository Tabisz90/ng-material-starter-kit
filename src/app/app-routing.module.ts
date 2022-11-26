import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TwoColumnListComponent} from './components/two-column-list/two-column-list.component';
import {TwoColumnEmployeeListComponent} from './components/two-column-employee-list/two-column-employee-list.component';
import {TwoColumnListComponentModule} from './components/two-column-list/two-column-list.component-module';
import {ProductsServiceModule} from './services/products.service-module';
import {
  TwoColumnEmployeeListComponentModule
} from './components/two-column-employee-list/two-column-employee-list.component-module';
import {EmployeesServiceModule} from './services/employees.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'products-master-details', component: TwoColumnListComponent},
      {path: 'employees-master-details', component: TwoColumnEmployeeListComponent}
    ]),
    TwoColumnListComponentModule,
    ProductsServiceModule,
    TwoColumnEmployeeListComponentModule,
    EmployeesServiceModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
