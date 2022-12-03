import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductListComponent} from './components/product-list/product-list.component';
import {CategoriesListComponent} from './components/categories-list/categories-list.component';
import {CryptoChipsComponent} from './components/crypto-chips/crypto-chips.component';
import {ProductsServiceModule} from './services/products.service-module';
import {ProductListComponentModule} from './components/product-list/product-list.component-module';
import {CategoriesListComponentModule} from './components/categories-list/categories-list.component-module';
import {CategoriesServiceModule} from './services/categories.service-module';
import {CryptoChipsComponentModule} from './components/crypto-chips/crypto-chips.component-module';
import {CryptoServiceModule} from './services/crypto.service-module';

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'products',
      component: ProductListComponent
    },
    {
      path: 'categories',
      component: CategoriesListComponent
    },
    {
      path: 'crypto',
      component: CryptoChipsComponent
    }]), ProductsServiceModule, ProductListComponentModule, CategoriesListComponentModule, CategoriesServiceModule, CryptoChipsComponentModule, CryptoServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
