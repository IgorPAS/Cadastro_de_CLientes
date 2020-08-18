import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {
public form = {
  email:null,
  password:null,
  password_confirmation:null,
  token: null,
};

public errors = null;
public error = null;
public data = null;

constructor(
    private Manager: ManagerService,
    private Router: ActivatedRoute, 
    private Redirect: Router 
  ) {
    Router.queryParams.subscribe(
      params => {this.form.token = params['token']}
    );
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.Manager.sendChangedpassword(this.form).subscribe(
      data =>this.handleResponse(data),
      error => this.handleError(error)
    )
  }

  handleResponse(data){
    this.Redirect.navigateByUrl('/login');
    this.data = data.data;
  }

  handleError(error){
    this.errors = error.error.errors?error.error.errors:null;
  }

}
