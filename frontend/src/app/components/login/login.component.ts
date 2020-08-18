import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';
import { IsAdminService } from 'src/app/services/is-admin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public form = {
  email:null,
  password: null,
};

public error = null;
public data = null;

  constructor(
    private Manager: ManagerService,
    private Token:TokenService ,
    private Auth: AuthService,
    private Admin: IsAdminService,
    private us: UserService,
    ) { }

  onSubmit(){
    this.Manager.login(this.form).subscribe(
      data =>this.handleResponse(data),
      error => this.handleError(error)
    )
  }

  handleResponse(data){
    this.Token.handlerToken(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.Admin.redirect(data.user);
    this.us.infUser(data.user);
  }

  handleError(error){
    this.error = error.error.error;
  }

  ngOnInit(): void {
  }

}
