import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TwoColumnListComponent} from './components/two-column-list/two-column-list.component';
import {TwoColumnEmployeeListComponent} from './components/two-column-employee-list/two-column-employee-list.component';
import {TwoColumnCryptoListComponent} from './components/two-column-crypto-list/two-column-crypto-list.component';
import {TwoColumnListComponentModule} from './components/two-column-list/two-column-list.component-module';
import {ProductsServiceModule} from './services/products.service-module';
import {
  TwoColumnEmployeeListComponentModule
} from './components/two-column-employee-list/two-column-employee-list.component-module';
import {EmployeesServiceModule} from './services/employees.service-module';
import {
  TwoColumnCryptoListComponentModule
} from './components/two-column-crypto-list/two-column-crypto-list.component-module';
import {CryptoServiceModule} from './services/crypto.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'products-master-details', component: TwoColumnListComponent},
      {path: 'employees-master-details', component: TwoColumnEmployeeListComponent},
      {path: 'crypto-master-details', component: TwoColumnCryptoListComponent}
    ]),
    TwoColumnListComponentModule,
    ProductsServiceModule,
    TwoColumnEmployeeListComponentModule,
    EmployeesServiceModule,
    TwoColumnCryptoListComponentModule,
    CryptoServiceModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
