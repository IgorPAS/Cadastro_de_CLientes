import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagerService } from 'src/app/services/manager.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-profile-client',
  templateUrl: './profile-client.component.html',
  styleUrls: ['./profile-client.component.css']
})
export class ProfileClientComponent implements OnInit {

  userid: any;
  user: any;
  data:null;

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private us: UserService,
    private manager: ManagerService
  ) {  
   
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(user =>
      this.userid = user)
      this.getUser(this.userid);
    }

    getUser(data){
      this.manager.thisUser(data).subscribe((res: any[]) =>{
        this.user = res;
      })
    }

    register(event){
      event.preventDefault();
      this.router.navigateByUrl('/register')
    }
}
