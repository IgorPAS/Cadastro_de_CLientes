import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public form = {
    name:null,
    email:null,
    password: null,
    password_confirmation: null,
  };
  
  public errors = null;
  
  constructor(
    private Manager: ManagerService,
    private Token: TokenService,
    private Auth: AuthService,
    private Router: Router
    ) { }
  
  onSubmit(){
    this.Manager.signup(this.form).subscribe(
      data =>this.handleResponse(data),
      error => this.handleError(error)
    )
  }

  handleResponse(data){
    this.Token.handlerToken(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.Router.navigateByUrl('/client');
  }

  handleError(error){
    this.errors = error.error.errors;
  }

  ngOnInit(): void {
  }

}
