import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IsAdminService } from 'src/app/services/is-admin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public form = {
    user_id:null,
    street:null,
    number:null,
    complement:null,
    zipcode: null,
    neighborhood: null,
    city: null,
    uf: null,
  };
  
  public errors = null;
  constructor(
    private Manager: ManagerService,
    private activatedRoute: ActivatedRoute,
    private us: UserService,
    private Admin: IsAdminService,
    private Router: Router
  ) { 
    this.form.user_id = this.us.getUser('user_id')
  }

  onSubmit(){
    this.Manager.register(this.form).subscribe(
      data =>this.handleResponse(data),
      error => this.handleError(error)
      )
    }
    
    handleResponse(data){
      data = this.us.getUser('user_id')
      this.Admin.isAdmin(data);
  }

  handleError(error){
    this.errors = error.error.errors;
  }

  ngOnInit(): void {
     
  }

}
