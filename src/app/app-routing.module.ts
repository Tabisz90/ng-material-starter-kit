import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CatFactComponent } from './components/cat-fact/cat-fact.component';
import { AgePredictionComponent } from './components/age-prediction/age-prediction.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CatFactComponentModule } from './components/cat-fact/cat-fact.component-module';
import { CatFactsServiceModule } from './services/cat-facts.service-module';
import { AgePredictionComponentModule } from './components/age-prediction/age-prediction.component-module';
import { PersonsServiceModule } from './services/persons.service-module';
import { ProductDetailsComponentModule } from './components/product-details/product-details.component-module';
import { ProductsServiceModule } from './services/products.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'cat-fact', component: CatFactComponent },
      { path: 'age/:name', component: AgePredictionComponent },
      { path: 'product/:id', component: ProductDetailsComponent },
    ]),
    CatFactComponentModule,
    CatFactsServiceModule,
    AgePredictionComponentModule,
    PersonsServiceModule,
    ProductDetailsComponentModule,
    ProductsServiceModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
