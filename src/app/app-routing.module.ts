import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SearchSingleComponent} from './components/search-single/search-single.component';
import {SearchMultiProductsComponent} from './components/search-multi-products/search-multi-products.component';
import {SearchSingleComponentModule} from './components/search-single/search-single.component-module';
import {UniversitiesServiceModule} from './services/universities.service-module';
import {
  SearchMultiProductsComponentModule
} from './components/search-multi-products/search-multi-products.component-module';
import {ProductsServiceModule} from './services/products.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'search-universities',
    component: SearchSingleComponent
  }, {
    path: 'list-2-form-search-multi-products',
    component: SearchMultiProductsComponent
  }]), SearchSingleComponentModule, UniversitiesServiceModule, SearchMultiProductsComponentModule, ProductsServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
