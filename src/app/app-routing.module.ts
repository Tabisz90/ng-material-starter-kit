import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CryptoAutocompleteComponent} from './components/crypto-autocomplete/crypto-autocomplete.component';
import {
  CarsAutocompleteWithTableComponent
} from './components/cars-autocomplete-with-table/cars-autocomplete-with-table.component';
import {CryptoAutocompleteComponentModule} from './components/crypto-autocomplete/crypto-autocomplete.component-module';
import {CryptoServiceModule} from './services/crypto.service-module';
import {
  CarsAutocompleteWithTableComponentModule
} from './components/cars-autocomplete-with-table/cars-autocomplete-with-table.component-module';
import {BrandsServiceModule} from './services/brands.service-module';
import {SecurityFeaturesServiceModule} from './services/security-features.service-module';
import {ComfortFeaturesServiceModule} from './services/comfort-features.service-module';
import {CarsServiceModule} from './services/cars.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'list-2-form-autocomplete-simple-crypto-chips',
    component: CryptoAutocompleteComponent
  }, {
    path: 'list-2-form-autocomplete-multi-cars',
    component: CarsAutocompleteWithTableComponent
  }]), CryptoAutocompleteComponentModule, CryptoServiceModule, CarsAutocompleteWithTableComponentModule, BrandsServiceModule, SecurityFeaturesServiceModule, ComfortFeaturesServiceModule, CarsServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
