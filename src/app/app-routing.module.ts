import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CatFactComponent } from './components/cat-fact/cat-fact.component';
import { AgePredictionComponent } from './components/age-prediction/age-prediction.component';
import { CatFactComponentModule } from './components/cat-fact/cat-fact.component-module';
import { CatFactsServiceModule } from './services/cat-facts.service-module';
import { AgePredictionComponentModule } from './components/age-prediction/age-prediction.component-module';
import { PersonsServiceModule } from './services/persons.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'cat-fact', component: CatFactComponent },
      { path: 'age/:name', component: AgePredictionComponent },
    ]),
    CatFactComponentModule,
    CatFactsServiceModule,
    AgePredictionComponentModule,
    PersonsServiceModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
