import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CatFactComponent } from './components/cat-fact/cat-fact.component';
import { CatFactComponentModule } from './components/cat-fact/cat-fact.component-module';
import { CatFactsServiceModule } from './services/cat-facts.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([{ path: 'cat-fact', component: CatFactComponent }]),
    CatFactComponentModule,
    CatFactsServiceModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
