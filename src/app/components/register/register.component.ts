import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {
  readonly registerForm: FormGroup = new FormGroup({email: new FormControl(), password: new FormControl()});

  constructor(private _authService: AuthService, private _router: Router) {
  }

  onRegisterFormSubmitted(registerForm: FormGroup): void {
    this._authService.register(
      registerForm.get('email')?.value,
      registerForm.get('password')?.value).subscribe({
      next: () => this._router.navigate(['login'])
    });
  }
}
