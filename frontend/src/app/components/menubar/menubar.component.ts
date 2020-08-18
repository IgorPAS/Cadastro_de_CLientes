import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { IsAdminService } from 'src/app/services/is-admin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  public logged : boolean;
  
  public pro: any;

  constructor(
    private Auth: AuthService,
    private Router: Router,
    private Token: TokenService,
    private us: UserService,
    private isAdmin: IsAdminService
    ) { }

  ngOnInit(): void {
  this.Auth.authStatus.subscribe(value => this.logged = value);
  }

  logout(event: MouseEvent){
    event.preventDefault();
    this.Token.removeToken();
    this.Auth.changeAuthStatus(false);
    this.Router.navigateByUrl('/login');
    this.us.claenUser();
    this.isAdmin.clean();
  }
  profile(event: MouseEvent){
    event.preventDefault();
    this.pro = this.us.getUser('user_id')
    this.isAdmin.isAdmin(this.pro);
    
  }

}
