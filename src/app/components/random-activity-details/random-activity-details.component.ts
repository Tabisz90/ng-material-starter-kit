import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivityModel } from '../../models/activity.model';
import { ActivitiesService } from '../../services/activities.service';

@Component({
  selector: 'app-random-activity-details',
  templateUrl: './random-activity-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RandomActivityDetailsComponent {
  readonly activity$: Observable<ActivityModel> = this._activitiesService.getOne();

  constructor(private _activitiesService: ActivitiesService) {
  }
}
