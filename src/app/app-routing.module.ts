import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {LoggedInComponent} from './components/logged-in/logged-in.component';
import {VerifyComponent} from './components/verify/verify.component';
import {LoginComponentModule} from './components/login/login.component-module';
import {RegisterComponentModule} from './components/register/register.component-module';
import {AuthServiceModule} from './services/auth.service-module';
import {LoggedInComponentModule} from './components/logged-in/logged-in.component-module';
import {VerifyComponentModule} from './components/verify/verify.component-module';
import {STORAGE_PORT} from './ports/storage.port';
import {EmailVerifiedGuard} from './guards/email-verified/email-verified.guard';
import {EmailVerifiedGuardModule} from './guards/email-verified/email-verified.guard-module';

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'register',
      component: RegisterComponent,
    },
    {
      path: 'logged-in',
      component: LoggedInComponent,
      data:
        {
          verificationTrueRedirectTo: 'logged-in',
          verificationFalseRedirectTo: 'verify'
        },
      canActivate: [EmailVerifiedGuard]
    },
    {
      path: 'verify',
      component: VerifyComponent
    }
  ]), LoginComponentModule, RegisterComponentModule, AuthServiceModule, LoggedInComponentModule,
    VerifyComponentModule, EmailVerifiedGuardModule],
  providers: [{provide: STORAGE_PORT, useValue: localStorage}],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
