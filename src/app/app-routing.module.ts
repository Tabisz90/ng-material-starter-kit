import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductsSortComponent} from './components/products-sort/products-sort.component';
import {JobsSearchComponent} from './components/jobs-search/jobs-search.component';
import {ProductsComponent} from './components/products/products.component';
import {CarsComponent} from './components/cars/cars.component';
import {ProductsSortComponentModule} from './components/products-sort/products-sort.component-module';
import {ProductsServiceModule} from './services/products.service-module';
import {JobsSearchComponentModule} from './components/jobs-search/jobs-search.component-module';
import {JobPostsServiceModule} from './services/job-posts.service-module';
import {ProductsComponentModule} from './components/products/products.component-module';
import {CategoriesServiceModule} from './services/categories.service-module';
import {CarsComponentModule} from './components/cars/cars.component-module';
import {CarBrandsServiceModule} from './services/car-brands.service-module';
import {ComfortFeaturesServiceModule} from './services/comfort-features.service-module';
import {CarsServiceModule} from './services/cars.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'list-2-route-sort-single-products-backend',
    component: ProductsSortComponent
  }, {path: 'search-route-multi-jobs', component: JobsSearchComponent}, {
    path: 'products/:category',
    component: ProductsComponent
  }, {
    path: 'list-2-route-filter-multi-cars-frontend',
    component: CarsComponent
  }]), ProductsSortComponentModule, ProductsServiceModule, JobsSearchComponentModule, JobPostsServiceModule, ProductsComponentModule, CategoriesServiceModule, CarsComponentModule, CarBrandsServiceModule, ComfortFeaturesServiceModule, CarsServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
