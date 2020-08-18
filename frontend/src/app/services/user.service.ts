import { Injectable } from '@angular/core';
import { ManagerService } from './manager.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    manager: ManagerService
  ) { }

  infUser(data){
    this.setUser(data);
  }

  setUser(data){
    localStorage.setItem('user_id', data['id']);
    localStorage.setItem('user_email', data['email']);
    localStorage.setItem('user_profile', data['profile_id']);
    localStorage.setItem('user_name', data['name']);
  }

  getUser(data){
    return localStorage.getItem(data);
  }

  claenUser(){
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_profile');
  }
}

