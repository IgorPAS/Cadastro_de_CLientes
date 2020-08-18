import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileClientComponent } from './components/profile/profile-client/profile-client.component';
import { ProfileAdminComponent } from './components/profile/profile-admin/profile-admin.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { ManagerService } from './services/manager.service';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { WithLoginService } from './services/with-login.service';
import { WithoutLoginService } from './services/without-login.service';
import { IsAdminService } from './services/is-admin.service';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    LoginComponent,
    SignupComponent,
    ProfileClientComponent,
    ProfileAdminComponent,
    RequestResetComponent,
    ResponseResetComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ManagerService,
    TokenService,
    AuthService,
    WithLoginService,
    WithoutLoginService,
    IsAdminService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
