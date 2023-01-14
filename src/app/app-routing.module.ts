import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LimitProductsComponent} from './components/limit-products/limit-products.component';
import {PaginationCitiesComponent} from './components/pagination-cities/pagination-cities.component';
import {LimitProductsComponentModule} from './components/limit-products/limit-products.component-module';
import {ProductsServiceModule} from './services/products.service-module';
import {PaginationCitiesComponentModule} from './components/pagination-cities/pagination-cities.component-module';
import {CitiesServiceModule} from './services/cities.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'router-limit-single-products',
    component: LimitProductsComponent
  }, {
    path: 'route-pagination-frontend-countries',
    component: PaginationCitiesComponent
  }]), LimitProductsComponentModule, ProductsServiceModule, PaginationCitiesComponentModule, CitiesServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
