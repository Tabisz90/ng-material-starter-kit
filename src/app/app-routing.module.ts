import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilteredProductListComponent } from './components/filtered-product-list/filtered-product-list.component';
import { SubjectBasedFilteredProductListComponent } from './components/subject-based-filtered-product-list/subject-based-filtered-product-list.component';
import { ProductListWithSortingComponent } from './components/product-list-with-sorting/product-list-with-sorting.component';
import { FilteredProductListComponentModule } from './components/filtered-product-list/filtered-product-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { ProductsServiceModule } from './services/products.service-module';
import { SubjectBasedFilteredProductListComponentModule } from './components/subject-based-filtered-product-list/subject-based-filtered-product-list.component-module';
import { ProductListWithSortingComponentModule } from './components/product-list-with-sorting/product-list-with-sorting.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products/:category', component: FilteredProductListComponent },
      { path: 'products', component: SubjectBasedFilteredProductListComponent },
      { path: 'sorted-products', component: ProductListWithSortingComponent }
    ]),
    FilteredProductListComponentModule,
    CategoriesServiceModule,
    ProductsServiceModule,
    SubjectBasedFilteredProductListComponentModule,
    ProductListWithSortingComponentModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
