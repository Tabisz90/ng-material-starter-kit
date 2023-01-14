import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, shareReplay, take, tap} from 'rxjs';
import {CarBrandModel} from '../../models/car-brand.model';
import {ComfortFeatureModel} from '../../models/comfort-feature.model';
import {CarModel} from '../../models/car.model';
import {CarBrandsService} from '../../services/car-brands.service';
import {ComfortFeaturesService} from '../../services/comfort-features.service';
import {CarsService} from '../../services/cars.service';
import {map} from 'rxjs/operators';
import {combineLatest} from 'rxjs';
import {CarsFiterValues} from './cars-fiter-values';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarsComponent {
  readonly brands$: Observable<CarBrandModel[]> = this._carBrandsService.getAll();
  readonly comfortFeatures$: Observable<ComfortFeatureModel[]> = this._comfortFeaturesService.getAll();

  readonly filterParams$: Observable<CarsFiterValues> = this._activatedRoute.queryParams.pipe(map((params) => {
    return {
      brands: new Set<string>(params['brands'] === undefined ? [] : params['brands'].split(',')),
      comfortFeaturesIds: new Set<string>(params['comfort-features'] === undefined ? [] : params['comfort-features'].split(','))
    }
  }), shareReplay(1));

  readonly cars$: Observable<CarModel[]> = combineLatest([this._carsService.getAll(), this.filterParams$])
    .pipe(
      map(([cars, params]: [CarModel[], CarsFiterValues]) =>
        cars
          .filter((car) => (params.brands.size === 0 || params.brands.has(car.brandId)) &&
            (params.comfortFeaturesIds.size === 0 ||
              car.comfortFeatureIds.filter((comfortFeatureId) =>
                params.comfortFeaturesIds.has(comfortFeatureId)).length === params.comfortFeaturesIds.size)))
    );

  constructor(private _carBrandsService: CarBrandsService, private _comfortFeaturesService: ComfortFeaturesService,
              private _activatedRoute: ActivatedRoute, private _carsService: CarsService, private _router: Router) {
  }

  onBrandCheckboxChanged(brandId: string, isSelected: boolean): void {
    this.filterParams$.pipe(take(1), tap((params) => {
      const brands: Set<string> = params.brands;
      isSelected ? brands.delete(brandId) : brands.add(brandId);
      this._router.navigate([],
        {
          queryParams: this._mergeQueryParams(brands, params.comfortFeaturesIds),
        })
    }),).subscribe();
  }

  onComfortFeatureCheckboxChanged(comfortFeatureId: string, isSelected: boolean): void {
    this.filterParams$.pipe(take(1), tap((params) => {
      const comfortFeatures: Set<string> = params.comfortFeaturesIds;
      isSelected ? comfortFeatures.delete(comfortFeatureId) : comfortFeatures.add(comfortFeatureId)
      this._router.navigate([],
        {
          queryParams: this._mergeQueryParams(params.brands, comfortFeatures),
        })
    })).subscribe();
  }

  private _mergeQueryParams(brandsParams: Set<string>, comfortFeaturesParams: Set<string>,): Record<string, string> {
    const queryParams = {} as Record<string, string>
    if (brandsParams.size > 0) {
      queryParams['brands'] = [...brandsParams].sort().join(',');
    }
    if (comfortFeaturesParams.size > 0) {
      queryParams['comfort-features'] = [...comfortFeaturesParams].sort().join(',');
    }
    return queryParams;
  }
}
