import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {combineLatestWith, map, Observable, shareReplay, startWith} from 'rxjs';
import {BrandModel} from '../../models/brand.model';
import {SecurityFeatureModel} from '../../models/security-feature.model';
import {ComfortFeatureModel} from '../../models/comfort-feature.model';
import {BrandsService} from '../../services/brands.service';
import {SecurityFeaturesService} from '../../services/security-features.service';
import {ComfortFeaturesService} from '../../services/comfort-features.service';
import {CarsService} from '../../services/cars.service';
import {CarView} from './car.view';

@Component({
  selector: 'app-cars-autocomplete-with-table',
  styleUrls: ['./cars-autocomplete-with-table.component.scss'],
  templateUrl: './cars-autocomplete-with-table.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarsAutocompleteWithTableComponent {
  readonly carsCriteriaForm: FormGroup = new FormGroup({
    brand: new FormControl(),
    securityFeature: new FormControl(),
    comfortFeature: new FormControl()
  });
  readonly carForm$ = this.carsCriteriaForm.valueChanges.pipe(
    startWith({
      brand: '',
      securityFeature: '',
      comfortFeature: ''
    }),
    shareReplay(1))
  readonly brands$: Observable<BrandModel[]> = this._brandsService.getAll().pipe(shareReplay(1));
  readonly securityFeatures$: Observable<SecurityFeatureModel[]> = this._securityFeaturesService.getAll().pipe(shareReplay(1));
  readonly comfortFeatures$: Observable<ComfortFeatureModel[]> = this._comfortFeaturesService.getAll().pipe(shareReplay(1));

  readonly filteredBrands$: Observable<BrandModel[]> = this.carForm$.pipe(
    combineLatestWith(this.brands$),
    map(([carForm, brands]) => brands.filter((brand) => brand.name.toLowerCase().includes(carForm.brand ? carForm.brand.toLowerCase().trim() : ''))));
  readonly filteredSecurityFeatures$: Observable<SecurityFeatureModel[]> = this.carForm$.pipe(
    combineLatestWith(this.securityFeatures$),
    map(([carForm, securityFeatures]) => securityFeatures.filter((securityFeature) => securityFeature.name.toLowerCase().includes(carForm.securityFeature ? carForm.securityFeature.toLowerCase().trim() : ''))));
  readonly filteredComfortFeatures$: Observable<SecurityFeatureModel[]> = this.carForm$.pipe(
    combineLatestWith(this.comfortFeatures$),
    map(([carForm, comfortFeatures]) => comfortFeatures.filter((comfortFeature) => comfortFeature.name.toLowerCase().includes(carForm.comfortFeature ? carForm.comfortFeature.toLowerCase().trim() : ''))));

  readonly selectedCars$: Observable<CarView[]> = this.carForm$.pipe(combineLatestWith(
      this.brands$,
      this.securityFeatures$,
      this.comfortFeatures$,
      this._carsService.getAll(),
    ), map(([carForm, brands, securityFeatures, comfortFeatures, cars]) => {
        const brandsMap = brands.reduce((acc, value) => {
          return {...acc, [value.id]: value};
        }, {}) as Record<string, BrandModel>;
        const securityFeaturesMap = securityFeatures.reduce((acc, value) => {
          return {...acc, [value.id]: value};
        }, {}) as Record<string, SecurityFeatureModel>;
        const comfortFeaturesMap = comfortFeatures.reduce((acc, value) => {
          return {...acc, [value.id]: value};
        }, {}) as Record<string, SecurityFeatureModel>;

        return cars.filter((car) =>
          (!carForm.brand ||
            carForm.brand.trim().length === 0 ||
            carForm.brand === brandsMap[car.brandId]?.name) &&
          (!carForm.securityFeature ||
            carForm.securityFeature.trim().length === 0 ||
            car.securityFeatureIds
              .map((securityFeatureId) => securityFeaturesMap[securityFeatureId]?.name)
              .includes(carForm.securityFeature)) &&
          (!carForm.comfortFeature ||
            carForm.comfortFeature.trim().length === 0 ||
            car.comfortFeatureIds
              .map((comfortFeatureId) => comfortFeaturesMap[comfortFeatureId]?.name)
              .includes(carForm.comfortFeature))
        ).map((car) => {
          return {
            brand: brandsMap[car.brandId]?.name,
            model: car.model,
            securityFeatures: (car.securityFeatureIds ?? []).map((securityFeatureId) => securityFeaturesMap[securityFeatureId].name),
            comfortFeatures: (car.comfortFeatureIds ?? []).map((comfortFeatureId) => comfortFeaturesMap[comfortFeatureId].name),
          } as CarView
        })
      }
    )
  );

  constructor(private _brandsService: BrandsService, private _securityFeaturesService: SecurityFeaturesService, private _comfortFeaturesService: ComfortFeaturesService, private _carsService: CarsService) {
  }
}
