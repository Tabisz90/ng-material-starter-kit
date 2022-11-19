import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UserModel } from 'src/app/models/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent {
  readonly user$: Observable<UserModel> = this._activatedRoute.params.pipe(
    switchMap((data) => this._usersService.getOne(data['id']))
  );

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _usersService: UsersService
  ) {}
}
