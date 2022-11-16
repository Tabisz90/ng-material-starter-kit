import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PersonModel } from '../../models/person.model';
import { PersonsService } from '../../services/persons.service';

@Component({
  selector: 'app-age-prediction',
  templateUrl: './age-prediction.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgePredictionComponent {
  readonly person$: Observable<PersonModel> = this._activatedRoute.params.pipe(
    switchMap((data) => this._personsService.getOne(data['name']))
  );

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _personsService: PersonsService
  ) {}
}
