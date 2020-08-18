import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css']
})
export class ProfileAdminComponent implements OnInit {


  dataArr: any;

  constructor(
    private manager: ManagerService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.manager.allUsers().subscribe(res => {
     this.dataArr = res;
    })
  }

}
