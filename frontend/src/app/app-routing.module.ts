import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileAdminComponent } from './components/profile/profile-admin/profile-admin.component';
import { ProfileClientComponent } from './components/profile/profile-client/profile-client.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { WithoutLoginService } from './services/without-login.service';
import { WithLoginService } from './services/with-login.service';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
{ path: 'login', component: LoginComponent, canActivate: [WithoutLoginService] },
{ path: 'signup', component: SignupComponent, canActivate: [WithoutLoginService] },
{ path: 'register', component: RegisterComponent, canActivate: [WithLoginService] },
{ path: 'admin', component: ProfileAdminComponent, canActivate: [WithLoginService] },
{ path: 'client', component: ProfileClientComponent, canActivate: [WithLoginService]},
{ path: 'request-reset-password', component: RequestResetComponent, canActivate: [WithoutLoginService]},
{ path: 'response-reset-password', component: ResponseResetComponent, canActivate: [WithoutLoginService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
