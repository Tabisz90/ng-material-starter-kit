import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LimitProductsComponent} from './components/limit-products/limit-products.component';
import {PaginationCitiesComponent} from './components/pagination-cities/pagination-cities.component';
import {
  BeersPaginationBackendComponent
} from './components/beers-pagination-backend/beers-pagination-backend.component';
import {BeersSimpleComponent} from './components/beers-simple/beers-simple.component';
import {BeersCustomComponent} from './components/beers-custom/beers-custom.component';
import {LimitProductsComponentModule} from './components/limit-products/limit-products.component-module';
import {ProductsServiceModule} from './services/products.service-module';
import {PaginationCitiesComponentModule} from './components/pagination-cities/pagination-cities.component-module';
import {CitiesServiceModule} from './services/cities.service-module';
import {
  BeersPaginationBackendComponentModule
} from './components/beers-pagination-backend/beers-pagination-backend.component-module';
import {BeersServiceModule} from './services/beers.service-module';
import {BeersSimpleComponentModule} from './components/beers-simple/beers-simple.component-module';
import {BeersCustomComponentModule} from './components/beers-custom/beers-custom.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'router-limit-single-products',
    component: LimitProductsComponent
  }, {
    path: 'route-pagination-frontend-countries',
    component: PaginationCitiesComponent
  }, {
    path: 'route-pagination-paginator-beers',
    component: BeersPaginationBackendComponent
  }, {
    path: 'route-pagination-simple-beers',
    component: BeersSimpleComponent
  }, {
    path: 'route-pagination-custom-beers',
    component: BeersCustomComponent
  }]), LimitProductsComponentModule, ProductsServiceModule, PaginationCitiesComponentModule, CitiesServiceModule, BeersPaginationBackendComponentModule, BeersServiceModule, BeersSimpleComponentModule, BeersCustomComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
