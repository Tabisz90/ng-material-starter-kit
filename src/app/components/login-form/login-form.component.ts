import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login-form',
  styleUrls: ['./login-form.component.scss'],
  templateUrl: './login-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  readonly loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  constructor(private _usersService: UsersService) {}

  onLoginFormSubmitted(loginForm: FormGroup): void {
    this._usersService
      .login({
        username: loginForm.get('username')?.value,
        password: loginForm.get('password')?.value,
      })
      .subscribe();
  }
}
