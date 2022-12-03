import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {PublicHolidaysModel} from '../../models/public-holidays.model';
import {PublicHolidaysService} from '../../services/public-holidays.service';

@Component({
  selector: 'app-public-holiday-select',
  templateUrl: './public-holiday-select.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicHolidaySelectComponent {
  readonly publicHolidays$: Observable<PublicHolidaysModel[]> = this._publicHolidaysService.getAll();

  constructor(private _publicHolidaysService: PublicHolidaysService) {
  }
}
