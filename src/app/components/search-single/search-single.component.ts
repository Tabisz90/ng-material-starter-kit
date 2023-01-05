import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, debounceTime, switchMap} from 'rxjs';
import {UniversityModel} from '../../models/university.model';
import {UniversitiesService} from '../../services/universities.service';

@Component({
  selector: 'app-search-single',
  styleUrls: ['./search-single.component.scss'],
  templateUrl: './search-single.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchSingleComponent {
  readonly countryNameForm: FormGroup = new FormGroup({countryName: new FormControl('')});
  readonly universities$: Observable<UniversityModel[]> = this.countryNameForm.valueChanges.pipe(
    debounceTime(1000),
    switchMap((countryForm) => countryForm.countryName ? this._countriesService.getAll(countryForm.countryName) : []));

  constructor(private _countriesService: UniversitiesService) {
  }
}
