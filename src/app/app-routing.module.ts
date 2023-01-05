import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SearchSingleComponent} from './components/search-single/search-single.component';
import {SearchSingleComponentModule} from './components/search-single/search-single.component-module';
import {UniversitiesServiceModule} from './services/universities.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'search-universities',
    component: SearchSingleComponent
  }]), SearchSingleComponentModule, UniversitiesServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
