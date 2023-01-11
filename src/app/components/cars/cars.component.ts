import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, shareReplay} from 'rxjs';
import {CarBrandModel} from '../../models/car-brand.model';
import {ComfortFeatureModel} from '../../models/comfort-feature.model';
import {CarModel} from '../../models/car.model';
import {CarBrandsService} from '../../services/car-brands.service';
import {ComfortFeaturesService} from '../../services/comfort-features.service';
import {CarsService} from '../../services/cars.service';
import {map} from 'rxjs/operators';
import {combineLatest} from 'rxjs';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarsComponent {
  readonly brands$: Observable<CarBrandModel[]> = this._carBrandsService.getAll();
  readonly comfortFeatures$: Observable<ComfortFeatureModel[]> = this._comfortFeaturesService.getAll();
  readonly comfortFeaturesParam$: Observable<string[]> = this._activatedRoute.queryParams.pipe(map((params) => params['comfortFeatures'] ?? []), shareReplay(1));
  readonly brandsParam$: Observable<string[]> = this._activatedRoute.queryParams.pipe(map((params) => params['brands'] ?? []), shareReplay(1));
  readonly cars$: Observable<CarModel[]> = combineLatest([this._carsService.getAll(), this.comfortFeaturesParam$, this.brandsParam$])
    .pipe(
      map(([cars, comfortFeaturesIds, brandsIds]: [CarModel[], string[], string[]]) =>
        cars.filter((car) => brandsIds.some((brandId) => car.brandId === brandId) &&
          comfortFeaturesIds.some((comfortFeatureId) => car.comfortFeatureIds.some((carCFid) => carCFid === comfortFeatureId)))
      ));

  constructor(private _carBrandsService: CarBrandsService, private _comfortFeaturesService: ComfortFeaturesService,
              private _activatedRoute: ActivatedRoute, private _carsService: CarsService, private _router: Router) {
  }
}
