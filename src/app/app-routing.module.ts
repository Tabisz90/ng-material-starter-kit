import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CatFactComponent } from './components/cat-fact/cat-fact.component';
import { AgePredictionComponent } from './components/age-prediction/age-prediction.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { CatFactComponentModule } from './components/cat-fact/cat-fact.component-module';
import { CatFactsServiceModule } from './services/cat-facts.service-module';
import { AgePredictionComponentModule } from './components/age-prediction/age-prediction.component-module';
import { PersonsServiceModule } from './services/persons.service-module';
import { ProductDetailsComponentModule } from './components/product-details/product-details.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CartDetailsComponentModule } from './components/cart-details/cart-details.component-module';
import { CartsServiceModule } from './services/carts.service-module';
import { UserDetailsComponentModule } from './components/user-details/user-details.component-module';
import { UsersServiceModule } from './services/users.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'cat-fact', component: CatFactComponent },
      { path: 'age/:name', component: AgePredictionComponent },
      { path: 'product/:id', component: ProductDetailsComponent },
      { path: 'cart/:id', component: CartDetailsComponent },
      { path: 'user/:id', component: UserDetailsComponent },
    ]),
    CatFactComponentModule,
    CatFactsServiceModule,
    AgePredictionComponentModule,
    PersonsServiceModule,
    ProductDetailsComponentModule,
    ProductsServiceModule,
    CartDetailsComponentModule,
    CartsServiceModule,
    UserDetailsComponentModule,
    UsersServiceModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
